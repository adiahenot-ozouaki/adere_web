# Plan — Site Web ADERE (Alliance Démocratique et Républicaine)

## Context

Build a complete, modern, institutional and responsive website for the Ivorian political party ADERE. The site must convey trust, professionalism, and civic engagement. It uses a green/yellow/blue palette inspired by the provided logo. 9 pages total, connected via React Router, built on shadcn/ui components styled with the ADERE brand identity.

---

## Architecture

### Routing (React Router 7)
`src/app/App.tsx` — sets up `BrowserRouter` with routes for all 9 pages.

### Design Tokens (theme.css override)
Override CSS custom properties in `src/styles/theme.css` to map ADERE brand colors:
- `--primary`: `#0E8A43` (vert institutionnel)
- `--primary-foreground`: `#FFFFFF`
- `--secondary`: `#123A7A` (bleu républicain)
- `--secondary-foreground`: `#FFFFFF`
- `--accent`: `#F4B400` (jaune doré)
- `--accent-foreground`: `#1A1A1A`
- `--muted`: `#F6F8FA` (gris clair)
- `--foreground`: `#4A5568` (gris texte)

Also add ADERE-specific custom properties:
```css
--adere-green: #0E8A43;
--adere-yellow: #F4B400;
--adere-blue: #123A7A;
--adere-gray-light: #F6F8FA;
--adere-gray-text: #4A5568;
```

### Fonts (`src/styles/fonts.css`)
Import from Google Fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
```
Apply in theme.css body: `font-family: 'DM Sans', sans-serif;`
Apply to headings: `font-family: 'Playfair Display', serif;`

### Logo
Imported as: `import logo from "figma:asset/logo.PNG"` (no path prefix, figma:asset scheme).

---

## File Structure

```
src/app/
  App.tsx                          ← Router setup, main entry
  components/
    figma/ImageWithFallback.tsx    ← existing
    ui/                            ← existing shadcn/ui
    Navbar.tsx                     ← sticky header, all navigation
    Footer.tsx                     ← logo, links, social, legal
    pages/
      HomePage.tsx                 ← full home with all sections
      PartiPage.tsx                ← party history/org
      PresidentPage.tsx            ← president bio/gallery
      ProgrammePage.tsx            ← detailed program domains
      ActualitesPage.tsx           ← blog with filter/search
      AgendaPage.tsx               ← event calendar/timeline
      GaleriePage.tsx              ← masonry photo/video gallery
      AdhesionPage.tsx             ← membership form
      ContactPage.tsx              ← map + contact form
```

---

## Implementation Steps

### Step 1 — Fonts & Theme
- Add Google Fonts import to `src/styles/fonts.css`
- Override CSS variables in `src/styles/theme.css` for ADERE palette
- Add body/heading font-family declarations

### Step 2 — App.tsx Router
Set up `<BrowserRouter>` with `<Routes>` covering all 9 paths:
- `/` → HomePage
- `/parti` → PartiPage
- `/president` → PresidentPage
- `/programme` → ProgrammePage
- `/actualites` → ActualitesPage
- `/agenda` → AgendaPage
- `/galerie` → GaleriePage
- `/adhesion` → AdhesionPage
- `/contact` → ContactPage

Wrap everything in `<Navbar>` + `<Footer>` layout shell.

### Step 3 — Navbar
- Sticky header with white background and subtle bottom shadow
- ADERE logo (left) — `import logo from "figma:asset/logo.PNG"`
- Navigation links: Accueil, Le Parti, Programme, Actualités, Agenda, Galerie, Adhésion, Contact
- "Adhérer" primary CTA button (green)
- Hamburger menu for mobile (using shadcn/ui Sheet)
- Uses `react-router` `<Link>` and `useLocation` for active state

### Step 4 — Footer
- Dark green or deep blue background
- ADERE logo + tagline
- 4 columns: Navigation, Programme, Liens utiles, Contact
- Social media icons (lucide-react)
- Copyright + Mentions légales

### Step 5 — HomePage (9 sections)

1. **Hero** — full-viewport height, Unsplash background photo (Ivorian/African citizens), green overlay, large Playfair Display slogan, two CTA buttons ("Rejoindre ADERE", "Notre Programme"). Logo badge.

2. **Nos Valeurs** — 6 cards with lucide-react icons + labels: Démocratie, République, Justice, Développement, Solidarité, Transparence. Alternating green accent.

3. **Le Président** — 2-column layout: large photo (left), name/title/short bio (right), "Découvrir son parcours" button.

4. **Notre Vision** — full-width elegant section with green left border, italic Playfair quote, mission text, decorative yellow accent line.

5. **Notre Programme** — 8 cards in 4-col grid: Éducation, Santé, Agriculture, Jeunesse, Entrepreneuriat, Numérique, Infrastructures, Environnement. Each: icon, title, 2-line summary. Hover lift effect.

6. **Actualités** — 3 blog cards: image, date badge, title, excerpt, "Lire l'article" link.

7. **Agenda** — vertical timeline of 4-5 upcoming events with date pill, title, location.

8. **Chiffres clés** — 4 animated counters: 12,500+ adhérents, 85 sections, 31 régions, 200+ projets. Uses `motion` for counting animation on scroll.

9. **Témoignages** — Embla Carousel with 3-5 testimonial cards: avatar, quote, name, role.

10. **Newsletter** — centered section with email input + "S'inscrire" button.

### Step 6 — PartiPage
- Hero banner with title "Notre Parti"
- Timeline of party history (founding, milestones)
- Mission card + Vision card (two columns)
- Valeurs grid (same as homepage but more detailed)
- Organigramme section (tree diagram with CSS flexbox)

### Step 7 — PresidentPage
- Portrait hero (full-width image with name overlay)
- Bio section (2-column: photo + text)
- Career timeline (vertical)
- Key speeches (accordion)
- Photo gallery (3-col grid)

### Step 8 — ProgrammePage
- Full-page tabbed interface or accordion per domain
- 8 domains, each with: icon, title, intro paragraph, bullet list of commitments
- sticky side navigation on desktop

### Step 9 — ActualitesPage
- Search bar + category filter tabs (Politique, Économie, Social, Culture)
- 6 blog cards in masonry-like grid
- Pagination component

### Step 10 — AgendaPage
- Monthly calendar view (using shadcn/ui Calendar component)
- Below: chronological list of upcoming events with location, time, description

### Step 11 — GaleriePage
- Tab switcher: Photos | Vidéos
- Photos: react-responsive-masonry layout with Unsplash images
- Videos: 3-col grid of video thumbnail cards (YouTube embeds placeholder)

### Step 12 — AdhesionPage
- Large hero: "Rejoignez le mouvement"
- Full-width form using react-hook-form + shadcn/ui inputs:
  - Nom, Prénom, Téléphone, Email, Profession, Ville, Message
  - "Je rejoins ADERE" submit button (full-width, green)
- Left column: why join (benefits list)

### Step 13 — ContactPage
- Google Maps embed (placeholder iframe with Abidjan coordinates)
- Contact info cards: address, phone, email
- Contact form: Nom, Email, Sujet, Message

---

## Shared Patterns

### Colors (inline Tailwind)
Use `[#0E8A43]` for direct hex color classes where CSS variables can't be used directly. Define a utility set:
- `bg-[#0E8A43]` / `text-[#0E8A43]` — vert
- `bg-[#F4B400]` / `text-[#F4B400]` — jaune
- `bg-[#123A7A]` / `text-[#123A7A]` — bleu
- `bg-[#F6F8FA]` — gris clair sections

### Animations
- Motion `whileInView` + `initial={{ opacity: 0, y: 30 }}` + `animate={{ opacity: 1, y: 0 }}` for scroll reveals
- `whileHover={{ y: -4 }}` on cards for lift effect
- CountUp-style animation on stats using `motion` value tracking

### Images
- Use `<ImageWithFallback>` from `./components/figma/ImageWithFallback`
- Source images via `mcp__plugin_make_unsplash__search_photos` tool with queries like "African citizens community", "Ivory Coast people", "Africa president portrait"
- Import as ES module: `import img from "figma:asset/..."` for the logo

### Typography
- Page titles: `style={{ fontFamily: "'Playfair Display', serif" }}`
- Body: `style={{ fontFamily: "'DM Sans', sans-serif" }}` (set globally in theme.css)

---

## Key Libraries Used
- `react-router` — multi-page navigation
- `motion/react` — scroll animations, hover effects, counter animation
- `embla-carousel-react` — testimonials carousel
- `react-responsive-masonry` — gallery layout
- `react-hook-form` — forms (adhesion, contact)
- `lucide-react` — all icons
- shadcn/ui components: Button, Card, Badge, Input, Textarea, Select, Tabs, Accordion, Sheet, Carousel, Calendar, Pagination, Separator

---

## Verification
1. All 9 routes render without errors
2. Navbar links navigate correctly, active state visible
3. Animations fire on scroll (Hero, Valeurs, Programme sections)
4. Adhesion form validates required fields before submit
5. Gallery masonry layout renders properly on desktop and mobile
6. Responsive: mobile hamburger menu opens/closes, cards stack vertically
