# Design Decisions — detsis-paidiatros.gr

Visual design system for the rebuild. Derived from the client's reference images
(logo cards + social posts) and two inspiration sites. IA comes from [PLAN.md](PLAN.md);
this doc is the *look and motion* layer.

## Inspiration → what we borrowed

| Source | Borrowed |
|---|---|
| [persona-detstvo.ru](https://persona-detstvo.ru/) (pediatric clinic) | Sticky header with phone + persistent **Ραντεβού** button; warm accent CTA on clean ground; alternating dense-cards ↔ full-width breather rhythm. |
| [thompsoncff.org/about-us](https://www.thompsoncff.org/about-us/) | **Wavy SVG section dividers**; hero = one bold statement + single CTA; large optimistic photography between text blocks; generous whitespace. |
| Client reference images | Palette, two-tone Greek headlines (accent word + navy/white), stethoscope/curve motifs, hairline display type. |

## Typography

- **New Hero** (Newlyn / Monotype) via Adobe Fonts kit `aix4wav`. Chosen because its Greek is
  excellent (Riccardo Olocco, Granshan-awarded) — confirmed Greek support.
  - ⚠️ Action needed: enable the **Greek subset** in the Adobe Fonts project, else Greek falls to system sans.
- `new-hero-hairline` (weight 100) → large display accents (hero accent word).
- `new-hero` (400 body / 700 headings).
- Fluid scale via `clamp()` (~1.25 minor third), tokens in [assets/css/tokens.css](assets/css/tokens.css).

## Color

From the reference design system (blues dominate; warm accent for action):

| Token | Hex | Use |
|---|---|---|
| `--navy-900` | `#1E3A56` | footer, trust strip, deepest grounds |
| `--navy-700` | `#2B4C6F` | primary brand, hero bg, headlines |
| `--steel-500` | `#5B7B9A` | secondary text |
| `--dusty-300` | `#A8C0D4` | curves, soft fills, tags |
| `--mist-100` | `#EAF1F6` | alternating section tint |
| `--coral-500` | `#E8836B` | **primary CTA + headline accent word** |
| `--sun-400` | `#F4C95D` | secondary playful glow accents |

Coral CTA = the persona-detstvo "warm button on cool ground" move; pops against the navy hero.

## Layout

- Hero: navy ground, two-tone H1 (`Μάριος Δέτσης,` white + `Παιδίατρος` coral hairline), doctor
  portrait inside an organic blob, wavy white divider into the page.
- 7 sections per the homepage blueprint: Hero → Trust strip → Intro/bio → Services → Clinics →
  Articles → Reviews → Final CTA band.
- Cards on `--mist-100` tints alternate with white sections for rhythm.
- Max width 1200px, fluid gutters.

## Motion (GSAP)

Full GSAP bundle vendored at [assets/vendor/gsap/](assets/vendor/gsap/) (gsap + ScrollTrigger + SplitText).

| Effect | Plugin | Where |
|---|---|---|
| Hero headline line-reveal | SplitText | H1 lines rise in, staggered |
| Hero intro timeline | core | eyebrow/sub/CTA/portrait sequence on load |
| Background parallax | ScrollTrigger (scrub) | hero gradient drifts on scroll |
| Section reveal | ScrollTrigger | `[data-rise]` blocks fade+rise at 85% |
| Staggered children | ScrollTrigger | `[data-stagger]` card/trust/review grids |

Available but **not yet used** (homepage didn't need them): DrawSVG (animate the stethoscope line
in the logo / wavy paths), MorphSVG, Flip (article filter transitions), ScrollSmoother, MotionPath.
Candidates for inner pages.

### Motion principles
- **Progressive enhancement**: `.js` class gates the hidden-then-revealed state. No JS / GSAP fails →
  everything visible (the reveal-prep CSS only hides when `.js` is present).
- **`prefers-reduced-motion`**: hard bail — all elements shown, transitions killed.
- Easing: `power3.out` for entrances; single coral underline/`→` micro-interactions on hover.

## Accessibility / performance

- Semantic landmarks, one H1, skip-link, visible focus (coral ring).
- `lang="el"`, descriptive alt text.
- Mobile menu with `aria-expanded`; dropdown works on hover + focus-within.
- Below-fold images `loading="lazy"`; portrait eager.
- No third-party JS except the Adobe Fonts CSS.

## Open / TODO
- Enable Greek subset in Adobe Fonts kit (blocker for correct rendering).
- Real clinic photos per location (currently `iatreio1` = Ζωγράφου, `iatreio10` = Βριλήσσια — guess; confirm with client, PLAN open Q6).
- Newer/approved doctor portrait if available (PLAN open Q7).
- Article slugs link to pages not built yet.
