# Kurumsal Dropdown Menü Talimatı
**Tarih:** 2026-04-10
**Çalışma dizini:** `scratch/torem-site/`
**Dosya:** `src/layouts/BaseLayout.astro`
**⛔ DOKUNMA:** `scratch/torem-zemin-2026/`

---

## SORUN

Nav dizisinde Kurumsal altındaki 3 sayfa (`parent: 'kurumsal'`) ayrı link olarak görünüyor.
Bunlar "Kurumsal" linkine hover/tıkta açılan bir dropdown içinde olmalı.

---

## İŞ 1 — NAV DİZİSİNİ GÜNCELLE

**Dosya:** `src/layouts/BaseLayout.astro` — satır 47-58 arası `const nav = [...]` bloğu

Mevcut:
```js
const nav = [
  { label: 'Ana Sayfa',         href: '/' },
  { label: 'Kurumsal',          href: '/kurumsal/' },
  { label: 'Neden Torem?',      href: '/kurumsal/neden-torem/', parent: 'kurumsal' },
  { label: 'Ekibimiz',          href: '/kurumsal/ekibimiz/',    parent: 'kurumsal' },
  { label: 'Belgelerimiz',      href: '/kurumsal/belgelerimiz/', parent: 'kurumsal' },
  { label: 'Faaliyet Alanları', href: '/faaliyet-alanlari/', mega: true },
  { label: 'Projelerimiz',      href: '/projelerimiz/' },
  { label: 'Makine Parkı',     href: '/makine-parki/' },
  { label: 'Blog',              href: '/blog/' },
  { label: 'İletişim',          href: '/iletisim/' },
];
```

Bununla değiştir:
```js
const nav = [
  { label: 'Ana Sayfa',         href: '/' },
  {
    label: 'Kurumsal',
    href: '/kurumsal/',
    dropdown: [
      { label: 'Hakkımızda',   href: '/kurumsal/' },
      { label: 'Neden Torem?', href: '/kurumsal/neden-torem/' },
      { label: 'Ekibimiz',     href: '/kurumsal/ekibimiz/' },
      { label: 'Belgelerimiz', href: '/kurumsal/belgelerimiz/' },
    ],
  },
  { label: 'Faaliyet Alanları', href: '/faaliyet-alanlari/', mega: true },
  { label: 'Projelerimiz',      href: '/projelerimiz/' },
  { label: 'Makine Parkı',      href: '/makine-parki/' },
  { label: 'Blog',              href: '/blog/' },
  { label: 'İletişim',          href: '/iletisim/' },
];
```

---

## İŞ 2 — NAV HTML'İNİ GÜNCELLE

Mevcut nav render kodu (satır ~108-132):
```astro
{nav.map(({ label, href, mega }: any) => (
  <li class={`site-nav__item${mega ? ' site-nav__item--mega' : ''}`}>
    <a href={href} class={`site-nav__link${...}`}>
      {label}{mega && <svg ...chevron... />}
    </a>
    {mega && (
      <div class="mega-menu">...</div>
    )}
  </li>
))}
```

Bununla değiştir:
```astro
{nav.map(({ label, href, mega, dropdown }: any) => (
  <li class={`site-nav__item${mega ? ' site-nav__item--mega' : ''}${dropdown ? ' site-nav__item--dropdown' : ''}`}>
    <a
      href={href}
      class={`site-nav__link${currentPath === href || (href !== '/' && currentPath.startsWith(href)) ? ' site-nav__link--active' : ''}`}
    >
      {label}
      {(mega || dropdown) && (
        <svg class="nav-chevron" width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <path d="M2 4l3 3 3-3"/>
        </svg>
      )}
    </a>

    {/* Dropdown menü — Kurumsal gibi küçük alt menüler */}
    {dropdown && (
      <div class="dropdown-menu">
        {dropdown.map((item: any) => (
          <a
            href={item.href}
            class={`dropdown-menu__link${currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href)) ? ' dropdown-menu__link--active' : ''}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    )}

    {/* Mega menü — Faaliyet Alanları */}
    {mega && (
      <div class="mega-menu">
        <div class="mega-menu__panel">
          <div class="mega-menu__grid">
            {kategoriler.map((k) => (
              <a href={`/faaliyet-alanlari/${k.slug}/`} class="mega-menu__item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20" aria-hidden="true"><path d={k.icon}/></svg>
                <span>{k.title}</span>
              </a>
            ))}
          </div>
          <div class="mega-menu__footer">
            <a href="/faaliyet-alanlari/" class="mega-menu__all">Tüm Faaliyet Alanları</a>
          </div>
        </div>
      </div>
    )}
  </li>
))}
```

---

## İŞ 3 — DROPDOWN CSS EKLE

`<style>` bloğuna, mevcut `.mega-menu` stillerinin HEMEN ÖNÜNE şu CSS bloğunu ekle:

```css
/* ── Dropdown Menü (Kurumsal gibi küçük alt menüler) ── */
.site-nav__item--dropdown { position: relative; }

.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-white);
  border: 1px solid var(--color-border, #e5e7eb);
  border-radius: var(--r-xl, 12px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06);
  padding: 0.5rem;
  min-width: 200px;
  z-index: 200;
  /* Gizli başlangıç */
  opacity: 0;
  visibility: hidden;
  transform: translateX(-50%) translateY(-6px);
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
  pointer-events: none;
}

/* Ok işareti üstte */
.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  background: var(--color-white);
  border-left: 1px solid var(--color-border, #e5e7eb);
  border-top: 1px solid var(--color-border, #e5e7eb);
  rotate: 45deg;
}

/* Hover veya focus'ta aç */
.site-nav__item--dropdown:hover .dropdown-menu,
.site-nav__item--dropdown:focus-within .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
  pointer-events: auto;
}

/* Chevron dönsün */
.site-nav__item--dropdown:hover .nav-chevron {
  transform: rotate(180deg);
}

.dropdown-menu__link {
  display: block;
  padding: 0.6rem 1rem;
  font-size: var(--text-sm, 0.875rem);
  font-weight: 500;
  color: var(--color-text, #1B2B3A);
  text-decoration: none;
  border-radius: var(--r-lg, 8px);
  transition: background 0.15s ease, color 0.15s ease;
  white-space: nowrap;
}

.dropdown-menu__link:hover {
  background: var(--color-bg, #F5F2ED);
  color: var(--color-highlight, #C8873A);
}

.dropdown-menu__link--active {
  color: var(--color-highlight, #C8873A);
  font-weight: 600;
  background: rgba(200,135,58,0.08);
}
```

---

## İŞ 4 — BUILD & DEPLOY

```bash
cd scratch/torem-site
npm run build
```

Hata yoksa:
```bash
git add src/layouts/BaseLayout.astro
git commit -m "fix: kurumsal dropdown menü — alt sayfalar tek menü altında toplandı"
git push origin main
```

---

## DOĞRULAMA

- [ ] Nav'da sadece: Ana Sayfa, Kurumsal, Faaliyet Alanları, Projelerimiz, Makine Parkı, Blog, İletişim görünüyor (7 item — önceden 10'du)
- [ ] "Kurumsal" linkine hover yapınca dropdown açılıyor: Hakkımızda, Neden Torem?, Ekibimiz, Belgelerimiz
- [ ] Dropdown'daki her link ilgili sayfaya gidiyor
- [ ] Aktif sayfa dropdown'da highlight rengiyle görünüyor
- [ ] "Faaliyet Alanları" mega menüsü hâlâ çalışıyor, bozulmadı
- [ ] Build sıfır hata
