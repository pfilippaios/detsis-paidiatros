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

Logo blue grounds the system; a wider playful spectrum (yellow, mint, **rose, lilac**)
echoes the doctor's Facebook social-post grid (`ref1.jpeg`/`ref2.jpeg` — navy + mustard +
pink + lavender + sky + sage). Hex are the actual token values in
[assets/css/tokens.css](assets/css/tokens.css).

| Token | Hex | Use |
|---|---|---|
| `--navy-900` | `#12324A` | footer, dark panels, deepest grounds |
| `--navy-700` | `#1F5C7F` | primary logo blue, headlines |
| `--steel-500` | `#5D8CA5` | secondary text/icons |
| `--dusty-300` / `--sky-200` | `#9DCCDB` / `#D3EDEC` | curves, soft fills, tags |
| `--mist-100` | `#EDF7F7` | alternating section tint |
| `--coral-500` | `#2A91AD` | **primary CTA + headline accent word** (logo teal) |
| `--sun-400` | `#F5C45A` | yellow glow accents |
| `--mint-300` | `#A7D8C8` | green playful accents |
| `--rose-500` | `#E0789F` | pink accents — service card, review mark, hero circle |
| `--lilac-500` | `#8E78C9` | purple accents — article tag, review mark, section blob |

Each accent hue ships a `-100` tint for card backgrounds / soft blobs. Accents rotate so no
two adjacent service cards, article tags, or review marks repeat a colour — coral/teal stays
the single CTA colour (the persona-detstvo "warm button on cool ground" move).

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
- All interior pages + 22 articles built (ypiresies, clinics, arthra, FAQ, rantevou, epikoinonia, cookies). Generator: `scratchpad/build.py`.
- Appointment form has no backend — `mailto:` fallback for now (PLAN open Q4).
