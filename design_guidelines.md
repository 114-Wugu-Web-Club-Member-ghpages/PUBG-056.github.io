# 李泓德 Gaming & Tech Blog - Design Guidelines

## Design Approach
**Reference-Based:** Drawing inspiration from The Verge's editorial design, IGN's gaming aesthetic, and Polygon's modern layout systems. Creating a distinctive high-tech/cyberpunk fusion that balances content readability with visual impact.

**Core Principle:** Dark, immersive tech aesthetic that makes content the hero while maintaining strong visual identity.

---

## Typography System

**Primary Font:** Inter or Space Grotesk (Google Fonts) - modern, technical feel
**Accent Font:** Orbitron or Rajdhani for headers - sci-fi aesthetic

**Hierarchy:**
- H1 (Blog Title/Logo): text-4xl to text-5xl, font-bold, accent font
- H2 (Article Titles): text-2xl to text-3xl, font-semibold
- H3 (Section Headers): text-xl, font-medium
- Body Text: text-base, leading-relaxed for optimal reading
- Meta Info (dates, categories): text-sm, uppercase tracking-wide

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16 (p-4, gap-6, my-8, py-12, space-y-16)

**Grid Structure:**
- Container: max-w-7xl mx-auto px-4
- Article Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- Featured Area: Full-width with max-w-6xl centered content
- Reading Content: max-w-3xl for optimal article readability

---

## Component Library

### Navigation
**Sticky Header** (h-16 to h-20):
- Left: Logo "李泓德 | LI HONGDE" with subtle tech icon/glyph
- Center: Category links (Gaming, Tech, Reviews, All Posts)
- Right: Search icon button + About link
- Background: Semi-transparent dark with backdrop blur

### Hero Section
**Featured Article Showcase:**
- Full-width gradient-overlay card (h-96 to h-[500px])
- Large hero image (gaming/tech visual) with dark gradient overlay
- Bottom-aligned content: Category badge, article title (text-4xl), excerpt, read time
- "Latest Post" or "Featured" label with neon accent

**Images:** Yes, large hero image is essential. Featured article image should be dramatic gaming/tech photography or artwork.

### Article Cards
**Standard Grid Cards:**
- Thumbnail image (aspect-video, rounded-lg)
- Category badge (top-left overlay or above image)
- Title (text-xl, 2-line clamp)
- Excerpt (text-sm, 3-line clamp, muted color)
- Bottom meta: Date + Read time with icon
- Hover: Subtle lift effect, neon border glow

### Article Detail Page
**Reading Layout:**
- Full-width hero image (aspect-[21/9])
- Centered content column (max-w-3xl)
- Title, author info, date, category badges
- Markdown content with proper spacing
- Side elements: Share buttons, table of contents (sticky on desktop)

### Search Interface
**Overlay Modal:**
- Full-screen dark backdrop
- Centered search input (large, glowing focus state)
- Real-time results grid below
- Category filters as chips

### Category System
**Visual Tags:**
- Colored badges (Gaming: neon blue, Tech: cyan, Reviews: purple)
- Both pill-shaped and sharp-edged variants for variety
- Consistent color coding throughout

### Footer
- Newsletter subscription form (centered, prominent)
- Social links (GitHub, Twitter, Discord, YouTube)
- Copyright and site info
- Secondary navigation

---

## Images

**Required Images:**
1. **Hero Image:** Dynamic gaming/tech artwork (1920x800px minimum) - cyberpunk cityscape, gaming setup, or abstract tech visual
2. **Article Thumbnails:** 16:9 ratio gaming screenshots, tech product photos, or custom graphics
3. **About Page:** Professional or styled portrait of 李泓德 with tech/gaming environment

**Treatment:** All images use subtle dark overlays for text contrast, rounded corners (rounded-lg to rounded-xl)

---

## Visual Effects

**Glow Effects:**
- Neon accent borders on hover states
- Subtle glow on interactive elements (search, buttons)
- Category badges with soft inner glow

**Background Treatments:**
- Main background: Very dark (near black) with subtle gradient
- Noise texture overlay for depth (optional via CSS filter)
- Grid pattern or circuit-board subtle background graphic

**Micro-interactions:**
- Smooth transitions (transition-all duration-300)
- Card hover lifts (transform translate-y)
- Button hover glows
- Search input focus glow expansion

---

## Tech Aesthetic Elements

**Accent Colors (via Tailwind):**
- Primary: cyan-400 to cyan-500 (neon cyan)
- Secondary: purple-500 to purple-600 (neon purple)
- Tertiary: blue-400 (electric blue)

**Decorative Elements:**
- Corner brackets on cards (CSS pseudo-elements)
- Thin neon divider lines between sections
- Hexagonal or angular design motifs
- Subtle scan-line effects on hero

---

## Key Pages Structure

**Homepage:** Hero featured post + 3-column article grid + category filter tabs + pagination

**Article Page:** Hero image + centered reading column + related posts sidebar/footer

**Category Pages:** Category header with description + filtered article grid

**About Page:** Split layout - left: author photo, right: bio text + social links + tech stack

**Search Results:** Grid of matching articles with highlighted search terms

---

This design creates an immersive, high-tech blogging experience that positions 李泓德 as an authoritative voice in gaming and tech while maintaining excellent content readability and discoverability.