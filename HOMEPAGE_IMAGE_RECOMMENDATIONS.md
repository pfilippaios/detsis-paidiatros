# Homepage Image Recommendations

## Current Homepage Read

The homepage currently has a friendly visual system, but it is doing most of the emotional work through color, shapes, and cards rather than photography.

Image usage today:

- Hero: `assets/img/doctor/portrait.png`
- Clinics: `assets/img/clinics/iatreio1.jpg` and `assets/img/clinics/iatreio10.jpg`
- Articles, services, intro, reviews, and CTA: no photos

Important issue: `assets/img/doctor/portrait.png` is not a portrait of Dr. Marios Detsis. It matches the copied file `assets/img/home/legacy-child-office-header.png`, which is an old header/social graphic showing a child in the office with text overlay. The current `alt="Ο παιδίατρος Μάριος Δέτσης"` is therefore misleading.

## Copied Image Folder

Recommended homepage candidates have been copied into:

`assets/img/home/`

These filenames are semantic and stable enough for implementation. The clinic photos are still large source files, so create resized production derivatives before wiring them into the page.

## Doctor Image For Header

Best available doctor-specific images now copied into the project:

| Priority | Project image | Dimensions | Use |
| --- | --- | ---: | --- |
| 1 | `assets/img/home/doctor-conference-portrait.jpg` | 391x522 | Best temporary doctor image. Vertical podium photo, visible face, can fit an organic portrait frame. |
| 2 | `assets/img/home/doctor-conference-podium.jpg` | 4032x3024 | Stronger resolution, doctor at podium, good for credibility section rather than hero. |
| 3 | `assets/img/home/doctor-conference-colleague.jpg` | 700x481 | Doctor with another person; not ideal for hero because it does not clearly center him alone. |

Recommendation: use `assets/img/home/doctor-conference-portrait.jpg` only if we need a doctor photo immediately. For the real homepage header, we should request or shoot a warm office portrait of the doctor, ideally in one of the clinics, with soft daylight and child-friendly context. The available mirror photos communicate scientific authority, but not the warmth parents expect from the first screen.

If we keep the current header graphic temporarily, change the alt text to describe the actual image, for example: `Παιδί σε φιλικό χώρο ιατρείου`.

## Best Homepage Candidates

### Real Clinic / Practice Photos

These are the safest and strongest assets because they show the real practice environment.

| Project image | Dimensions | Fit |
| --- | ---: | --- |
| `assets/img/home/clinic-waiting-room-wide.jpg` | 5760x3840 | Good wide clinic hero/card image. |
| `assets/img/home/clinic-playroom-wide.jpg` | 5760x3840 | Warm play corner; good for intro or CTA background. |
| `assets/img/home/clinic-child-playing.jpg` | 5654x3769 | Child playing in clinic; very friendly, excellent homepage support image. |
| `assets/img/home/clinic-children-play-corner.jpg` | 5845x3897 | Children sitting in clinic; best image for making the page feel alive. |
| `assets/img/home/clinic-teepee-detail.jpg` | 5266x3511 | Nice detail shot, but less descriptive as the main clinic card. |
| `assets/img/home/clinic-consultation-room.jpg` | 5760x3840 | Useful gallery/support image for the consultation space. |
| `assets/img/home/clinic-exam-aquarium-child.jpg` | 5214x3476 | Child near exam bed/aquarium; strong trust + care moment. |

### Existing Brand / Header Assets

| Project image | Dimensions | Fit |
| --- | ---: | --- |
| `assets/img/home/legacy-child-office-header.png` | 1950x1200 | Old header graphic. Better as background texture/reference, not doctor portrait. |
| `assets/img/home/legacy-social-header.png` | 1200x738 | Social/header image; usable for OG/social fallback. |

### Article / Service Images

These can make article cards and service areas friendlier, but several look like stock. Confirm license before using them beyond the old site context.

| Project image | Dimensions | Best Placement | License Note |
| --- | ---: | --- | --- |
| `assets/img/home/article-pediatric-exam.jpg` | 800x600 | Services: examination/visit card | Looks stock; verify license. |
| `assets/img/home/article-child-with-teddy-mask.jpg` | 800x600 | Articles: child illness/COVID card | Looks stock; verify license. |
| `assets/img/home/article-baby-sleeping.jpg` | 800x600 | Article: sleep tips | EXIF says Shutterstock; use only if licensed. |
| `assets/img/home/article-baby-mother-hug.jpg` | 800x600 | Services: infant care/breastfeeding | EXIF says Shutterstock; use only if licensed. |
| `assets/img/home/article-child-dandelion-allergies.jpg` | 800x600 | Article/service: allergies | Looks stock; verify license. |
| `assets/img/home/article-children-field-allergies.jpg` | 800x600 | Seasonal allergies / children outdoors | EXIF says Shutterstock; use only if licensed. |
| `assets/img/home/article-child-hydration.jpg` | 800x600 | Hydration / child care article | Looks stock; verify license. |
| `assets/img/home/article-children-colds.jpg` | 800x600 | Colds/flu article | Looks stock; verify license. |
| `assets/img/home/article-oral-hygiene-child.jpg` | 1024x768 | Oral hygiene article card | Filename/source indicates Shutterstock; verify license. |

## Recommended Homepage Incorporation

### 1. Hero

Replace the misleading `assets/img/doctor/portrait.png` hero use.

Preferred approach:

- Use a real doctor portrait when available.
- If we must use available assets now, crop `assets/img/home/doctor-conference-portrait.jpg` inside the existing `.portrait-blob`.
- Add 2-3 small overlapping clinic thumbnails beside/under the portrait blob using `assets/img/home/clinic-child-playing.jpg`, `assets/img/home/clinic-children-play-corner.jpg`, and `assets/img/home/clinic-exam-aquarium-child.jpg`.

This keeps the current playful structure but makes the first screen feel more human and real.

### 2. Bio Intro

The intro is currently a large text block. Add a right-side image collage on desktop and a single image below the text on mobile.

Best image:

- `assets/img/home/clinic-children-play-corner.jpg`

Design direction:

- One large rounded image, 4:3 or 5:4.
- One small overlapping detail crop from `assets/img/home/clinic-exam-aquarium-child.jpg`.
- Keep it unframed or lightly rounded; avoid making it feel like another card.

### 3. Services

The service cards are friendly but abstract. Add small image accents without turning every service into a heavy photo card.

Suggested mapping:

- Παρακολούθηση ανάπτυξης: `assets/img/home/clinic-exam-aquarium-child.jpg`
- Εμβολιασμοί: `assets/img/home/article-pediatric-exam.jpg` if licensed, otherwise use a clinic detail crop.
- Μητρικός θηλασμός: `assets/img/home/article-baby-mother-hug.jpg` only if licensed.
- Αλλεργίες παιδιών: `assets/img/home/article-child-dandelion-allergies.jpg` or `assets/img/home/article-children-field-allergies.jpg` only if licensed.
- Παιδιατρικές λοιμώξεις: `assets/img/home/article-child-with-teddy-mask.jpg` only if licensed.
- Συμβουλευτική γονέων: `assets/img/home/clinic-child-playing.jpg` or `assets/img/home/clinic-children-play-corner.jpg`.

Implementation style:

- Add a small circular or rounded-square thumbnail in the top-left of each service card.
- Keep the existing card colors and numbers.
- Avoid full-bleed images on all six cards; it would make the section noisy.

### 4. Clinics

The clinic cards are already the strongest image section. Make them richer by adding a small gallery strip below the two large cards.

Use:

- `assets/img/home/clinic-playroom-wide.jpg`
- `assets/img/home/clinic-child-playing.jpg`
- `assets/img/home/clinic-children-play-corner.jpg`
- `assets/img/home/clinic-consultation-room.jpg`
- `assets/img/home/clinic-exam-aquarium-child.jpg`

Design direction:

- 5-image horizontal strip on desktop.
- 2-column compact grid on mobile.
- Keep captions minimal, e.g. `Χώρος αναμονής`, `Παιδική γωνιά`, `Εξέταση`.

### 5. Articles Preview

The article preview currently has no thumbnails, so it reads like a utility list. Add article images to the three cards.

Suggested images:

- Sleep: `assets/img/home/article-baby-sleeping.jpg` if licensed.
- Allergies: `assets/img/home/article-child-dandelion-allergies.jpg` or `assets/img/home/article-children-field-allergies.jpg` if licensed.
- Oral hygiene: `assets/img/home/article-oral-hygiene-child.jpg` if licensed.

If licensing is unclear, use clinic photos instead and keep the topics as colored tags.

### 6. Reviews

Do not add one image per review. It would compete with the quotes. Instead, add a soft background/photo accent before or after the reviews.

Best option:

- `assets/img/home/clinic-playroom-wide.jpg` as a wide, low-contrast band crop.

### 7. Final CTA

The CTA is currently a solid coral panel. Add a real clinic image as a subtle split or background treatment.

Best options:

- `assets/img/home/clinic-child-playing.jpg` for a child-friendly care moment.
- `assets/img/home/clinic-children-play-corner.jpg` for warmth and liveliness.

Use a dark/brand overlay so the white CTA text stays readable.

## Asset Handling Notes

Before implementation:

- Keep `assets/img/home/` as the source/planning folder for these selected assets.
- Export responsive production sizes rather than shipping the 5-6.5 MB clinic originals directly.
- Add `width` and `height` attributes on images to reduce layout shift.
- Use `loading="lazy"` except for the main hero image.
- Use `srcset` for any large image that appears above 600px wide.
- Do not use Shutterstock-tagged assets unless the license is confirmed.

## Recommended Shortlist

Use these first:

1. Header temporary doctor image: `assets/img/home/doctor-conference-portrait.jpg`
2. Hero/support warmth: `assets/img/home/clinic-children-play-corner.jpg`
3. Bio/CTA: `assets/img/home/clinic-child-playing.jpg`
4. Clinic gallery: `assets/img/home/clinic-playroom-wide.jpg`
5. Care/exam moment: `assets/img/home/clinic-exam-aquarium-child.jpg`
6. Article thumbnails, license permitting: `assets/img/home/article-baby-sleeping.jpg`, `assets/img/home/article-child-dandelion-allergies.jpg`, `assets/img/home/article-pediatric-exam.jpg`
