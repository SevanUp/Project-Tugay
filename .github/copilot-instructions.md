# Project Tugay - AI Coding Agent Instructions

## Project Overview
Portfolio website for sculptor Тугай Роман (Tugay Roman). Currently a design-only project with PSD mockups and assets ready for implementation into a functional website.

## Project Structure
```
├── Final-2.jpg           # Primary design mockup (complete landing page)
├── Final.jpg/Final.psd   # Alternative design versions
├── Идеи.txt             # Design specifications (typography, colors, interactions)
├── img/                  # Content images (sculptures, exhibitions, news)
│   ├── about1.jpg       # About section imagery
│   ├── work{1-4}.jpg    # Portfolio sculpture images
│   ├── news{1-3}.jpg    # Exhibition/publication images
│   ├── slide{1-3}.jpg   # Hero carousel images
│   └── contacts.jpg     # Contact page background
├── icons/                # Social media and contact icons (PSD sources)
├── MoodBoard/           # Design inspiration and references
└── *.psd                # Page-specific mockups (about_me, contacts, news, works)
```

## Design Specifications (from Идеи.txt)

### Typography
- **Primary headings**: Montserrat Medium/SemiBold, 48px, weight 400
- **Section headings**: Montserrat Medium, 36px, #555555, weight 400
- **Body text**: Open Sans Regular, 16px, weight 400
- **Fonts**: Load from Google Fonts (Montserrat, Open Sans)

### Color Palette
- **Primary text**: #555555
- **Background accents**: Light blue/turquoise (see `MoodBoard/cvetovaya-palitra-392.jpg`)
- **Dark sections**: Black backgrounds with light text overlay
- **Accent buttons**: Turquoise/cyan (#00BCD4 or similar)

### Page Sections (from Final-2.jpg)
1. **Hero**: Full-screen with sculpture image, artist name "Тугай Роман", tagline "Тут будет крутая подпись"
2. **About (Обо мне)**: Light blue background, circular profile image, biography text, "Подробнее" button
3. **Sculptures (Скульптуры)**: Dark background, grid of sculpture images, "Смотреть ещё" button
4. **Exhibitions & Publications (Выставки и публикации)**: Preview cards with images, "Смотреть ещё" button
5. **Contact (Контакты)**: Contact form with fields: Name, Email, Message + "Отправить" button. Social links (WhatsApp, VK, Facebook)
6. **Footer**: Navigation links, social icons, contact info (phone, email)

### Interactive Elements
- **Form validation**: Empty field detection, email format validation
- **Form submission**: AJAX submission without page reload; show success/error states
- **Textarea**: Auto-expand on user input (mentioned in Идеи.txt)
- **Animations**: Smooth scroll-triggered entrance animations, parallax effects on hero

## Implementation Patterns

### File Organization
When creating the website:
```
index.html              # Single-page landing
css/
  ├── style.css        # Main styles
  └── animations.css   # Scroll animations, transitions
js/
  ├── main.js          # Form handlers, smooth scroll
  └── animations.js    # Intersection Observer for scroll effects
img/                   # Copy from source img/ folder
icons/                 # Export PNGs/SVGs from .psd files
```

### Key Implementation Notes
- **Russian language**: All UI text is in Russian (Cyrillic)
- **Navigation**: "Главная, Обо мне, Скульптуры, Новости, Контакты"
- **Responsive design**: Mockups exist for desktop and tablet (`main_tablet.psd`)
- **Image assets**: Use `img/` folder images; export icons from `icons/*.psd`
- **Form fields**: Name ("Ваше имя"), Email ("Эл. почта"), Message ("Ваше сообщение")

### JavaScript Handlers (Empty Stubs)
When implementing interactivity, create empty handler functions for:
- `handleFormSubmit(event)` - Contact form submission (prevent default, log data, show success message)
- `handleButtonClick(buttonType)` - "Подробнее", "Смотреть ещё", "Отправить" buttons
- `initScrollAnimations()` - Vanilla CSS/JS scroll-triggered animations using Intersection Observer
- `initSmoothScroll()` - Anchor link navigation with `scrollIntoView({ behavior: 'smooth' })`

### CSS Architecture (Vanilla CSS Only)
- Use CSS Grid for sculpture/news galleries (3-column desktop, responsive)
- Flexbox for header/footer navigation
- CSS variables for color palette consistency
- Modern CSS features: `clamp()`, `min()`, `max()` for responsive sizing
- CSS animations with `@keyframes` and `transform` properties
- Media queries: Desktop (1920px), Tablet (768px), Mobile (375px)
- No preprocessors or build tools - pure CSS

## Development Workflow
Since this is currently design-only:
1. Export image assets from PSD files
2. Export icons from `icons/*.psd` (see Icon Export Guidelines below)
3. Implement HTML structure matching Final-2.jpg layout
4. Apply CSS styling per design specifications (vanilla CSS only)
5. Add animation scaffolding (CSS + vanilla JS Intersection Observer)
6. Create empty JS event handlers for future backend integration
7. Test responsive behavior against tablet mockups
8. Target modern browsers only (ES6+, CSS Grid, Flexbox)

## Icon Export Guidelines
For `icons/*.psd` files, export as:
- **Format**: SVG preferred, PNG fallback (24x24px, 48x48px for @2x)
- **Settings**: Transparent background, preserve vector paths when possible
- **Naming**: `icon-{name}.svg` (e.g., `icon-facebook.svg`, `icon-email.svg`)
- **Social icons needed**: WhatsApp, VK, Facebook, Email, Phone
- **Colors**: Use currentColor in SVG for CSS color inheritance

## External Dependencies
- **Google Fonts**: Montserrat, Open Sans (load via `<link>` tag)
- **Social platforms**: WhatsApp, VK, Facebook integration (links only, no SDKs)
- **No backend**: Form submission uses empty JS handlers for now
- **No build tools**: Direct HTML/CSS/JS files, no bundlers or preprocessors

## Reference Files
- **Design mockup**: `Final-2.jpg` (attached image shows complete layout)
- **Typography/colors**: `Идеи.txt`
- **Content images**: `img/*.jpg`
- **Icons**: `icons/*.psd` (need export to SVG/PNG)
