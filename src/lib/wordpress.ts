/**
 * WordPress REST API — Torem Zemin
 * Base: https://www.toremzemin.com/wp-json/wp/v2
 */

const API = 'https://www.toremzemin.com/wp-json/wp/v2';

// ─── Tipler ────────────────────────────────────────────────
export interface WPPost {
  id: number;
  slug: string;
  status: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  modified: string;
  link: string;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
      media_details?: { sizes?: Record<string, { source_url: string }> };
    }>;
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>;
  };
}

export interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  link: string;
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

// ─── Yardımcı ────────────────────────────────────────────────
async function fetchWP<T>(endpoint: string, params: Record<string, string | number> = {}): Promise<T> {
  const url = new URL(`${API}${endpoint}`);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, String(v));

  const res = await fetch(url.toString(), {
    headers: { Accept: 'application/json' },
  });

  if (!res.ok) {
    throw new Error(`WP API ${endpoint} → ${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

// Düz HTML metin — excerpt temizliği için
export function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '').replace(/&[a-z]+;/gi, ' ').trim();
}

// ISO tarih → Türkçe format
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('tr-TR', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

// ─── Posts ────────────────────────────────────────────────────
export async function getPosts(opts: {
  perPage?: number;
  page?: number;
  category?: number;
  search?: string;
} = {}): Promise<WPPost[]> {
  return fetchWP<WPPost[]>('/posts', {
    per_page: opts.perPage ?? 12,
    page: opts.page ?? 1,
    status: 'publish',
    _embed: 1,
    ...(opts.category ? { categories: opts.category } : {}),
    ...(opts.search ? { search: opts.search } : {}),
  });
}

export async function getPost(slug: string): Promise<WPPost | null> {
  const posts = await fetchWP<WPPost[]>('/posts', { slug, _embed: 1, status: 'publish' });
  return posts[0] ?? null;
}

export async function getLatestPosts(count = 3): Promise<WPPost[]> {
  return getPosts({ perPage: count });
}

// ─── Hizmet Sayfaları ─────────────────────────────────────────
// Hizmetler WordPress'te standart post olarak tutuluyor
// Slug'ları CLAUDE.md § 7'den
const HIZMET_SLUGS = [
  'fore-kazik-nedir',
  'jet-grout-nedir',
  'ankraj-nedir',
  'mini-kazik-nedir',
  'zemin-civisi-nedir',
  'zemin-enjeksiyonu-nedir',
  'iksa-nedir',
  'zemin-ankraji',
  'puskurtme-beton',
] as const;

export type HizmetSlug = typeof HIZMET_SLUGS[number];

export async function getHizmetler(): Promise<WPPost[]> {
  const results = await Promise.allSettled(
    HIZMET_SLUGS.map((slug) => getPost(slug))
  );
  return results
    .filter((r): r is PromiseFulfilledResult<WPPost> => r.status === 'fulfilled' && r.value !== null)
    .map((r) => r.value);
}

export async function getHizmet(slug: string): Promise<WPPost | null> {
  return getPost(slug);
}

export function getHizmetSlugs(): string[] {
  return [...HIZMET_SLUGS];
}

// ─── Pages ────────────────────────────────────────────────────
export async function getPage(slug: string): Promise<WPPage | null> {
  const pages = await fetchWP<WPPage[]>('/pages', { slug });
  return pages[0] ?? null;
}

// ─── Categories ───────────────────────────────────────────────
export async function getCategories(): Promise<WPCategory[]> {
  return fetchWP<WPCategory[]>('/categories', { per_page: 50, hide_empty: 1 });
}

// ─── Featured image URL ────────────────────────────────────────
export function getFeaturedImageUrl(post: WPPost, size = 'large'): string {
  const media = post._embedded?.['wp:featuredmedia']?.[0];
  if (!media) return '/placeholder-geo.jpg';
  return media.media_details?.sizes?.[size]?.source_url ?? media.source_url;
}

export function getFeaturedImageAlt(post: WPPost): string {
  return post._embedded?.['wp:featuredmedia']?.[0]?.alt_text ?? stripHtml(post.title.rendered);
}
