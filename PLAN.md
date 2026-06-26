# Redesign Plan

## Scope

Rebuild `detsis-paidiatros.gr` as a static website using plain `HTML`, `CSS`, and small progressive-enhancement `JS`.

This is not the visual design phase. The plan defines information architecture, page responsibilities, content migration, SEO, static implementation constraints, and unresolved client decisions.

## Source Priority

Use sources in this order:

1. `site-mirror/detsis-paidiatros.gr/wp-json/wp/v2/*.json` for clean page/post titles, slugs, dates, and rendered content.
2. Mirror HTML pages when JSON is missing or when layout context/testimonials/embedded assets are needed.
3. `Detsis_Website_Audit.md` for redesign goals and communication priorities.
4. New copy only where needed for navigation, CTAs, short summaries, or FAQ framing. Do not invent medical claims.

Main audit takeaways to preserve:

- Strong professional profile is underused.
- Homepage must quickly explain who the doctor is, who he helps, why parents should trust him, and how to book.
- Services need their own clear hub instead of being buried in the biography.
- Appointment/contact paths need to be visible on every page.
- Ζωγράφου and Βριλήσσια need separate location treatment.
- Articles should be preserved and reorganized for readable SEO, without keyword stuffing.

## Static-Site Rules

- No WordPress, CMS, framework, bundler, or server-side templating.
- Core content, header, footer, navigation, and CTAs must exist in the HTML source of every page.
- JavaScript may enhance menus, accordions, galleries, map loading, active nav states, and filters.
- The site must work acceptably with JavaScript disabled.
- Contact forms cannot submit unless a static-form endpoint is chosen later. Until then, use `tel:`, `mailto:`, and optional client-approved WhatsApp/Viber links.
- Third-party embeds such as Google Maps should be click-to-load or consent-aware to reduce privacy and performance cost.

## Final Sitemap

Core pages:

| Page | Path | Role |
|---|---|---|
| Αρχική | `/index.html` | Trust, services preview, locations preview, direct appointment path |
| Ο Ιατρός | `/o-iatros/index.html` | Biography, training, scientific profile, philosophy |
| Υπηρεσίες | `/ypiresies/index.html` | Clear service hub for parents |
| Ιατρείο Ζωγράφου | `/iatreio-zografou/index.html` | Local page for Ζωγράφου clinic |
| Ιατρείο Βριλησσίων | `/iatreio-vrilission/index.html` | Local page for Βριλήσσια clinic |
| Άρθρα | `/arthra/index.html` | Article index and topic discovery |
| Article pages | `/arthra/<slug>/index.html` | Migrated article content |
| Συχνές Ερωτήσεις | `/sychnes-erotiseis/index.html` | Parent questions derived from existing content |
| Ραντεβού | `/rantevou/index.html` | Fast booking path |
| Επικοινωνία | `/epikoinonia/index.html` | Full contact details for both clinics |
| Πολιτική Cookies | `/cookies-policy/index.html` | Existing legal/privacy content if still required |

### Header navigation (≠ full page list)

Keep the menu to 7 items; do NOT list all pages. `Ραντεβού` is a persistent **button**, not a menu item.

`Αρχική · Ο Ιατρός · Υπηρεσίες · Ιατρεία · Άρθρα · Συχνές Ερωτήσεις · Επικοινωνία`  + **[Ραντεβού]** button

- `Ιατρεία` is a dropdown → `Ιατρείο Ζωγράφου`, `Ιατρείο Βριλησσίων` (the two clinic pages still exist; just grouped in nav).
- Πολιτική Cookies lives in the footer, not the header.

Optional pages only if the client wants more separation:

- `/epistimoniko-ergo/index.html` for publications, conference participation, and media mentions.
- `/synergasies/index.html` for memberships/collaborations.

Default recommendation: merge these into `Ο Ιατρός` as structured sections unless the content becomes too long.

## Page Blueprints

### Αρχική

Purpose: immediately establish trust and make booking easy.

Sections:

1. Hero
   - H1: `Μάριος Δέτσης, Παιδίατρος`
   - Short positioning: pediatric care in Ζωγράφου and Βριλήσσια, with scientific background in public health, prevention, infections, and breastfeeding support.
   - Primary CTA: `Κλείστε Ραντεβού`
   - Secondary CTA: `Καλέστε τώρα` or `Δείτε τα ιατρεία`
   - Use doctor portrait if quality is acceptable.

2. Trust strip
   - Δημόσια Υγεία
   - Πανεπιστημιακό / διδακτικό έργο
   - Επιστημονικές δημοσιεύσεις
   - Εμβολιασμοί και λοιμώδη νοσήματα
   - Πιστοποίηση / εκπαίδευση στον μητρικό θηλασμό

3. Services preview
   - Παρακολούθηση βρεφών και παιδιών
   - Εμβολιασμοί
   - Μητρικός θηλασμός
   - Αλλεργίες
   - Παιδιατρικές λοιμώξεις
   - Συμβουλευτική γονέων

4. Clinics preview
   - Two compact location blocks with address, phone, hours, and link to detail page.

5. Articles preview
   - Latest or most useful 3-6 articles.
   - Prefer evergreen parent topics over only COVID-era content.

6. Testimonials / parent reviews
   - Reuse only real reviews from the mirror.
   - Keep short and factual.

7. Final CTA band
   - Phone, appointment email, and location choice.

### Ο Ιατρός

Source content:

- `site-mirror/detsis-paidiatros.gr/viografiko/index.html`
- `site-mirror/detsis-paidiatros.gr/wp-json/wp/v2/pages/849.json`
- Optional supporting sections from publications, conferences, collaborations, and media pages.

Sections:

- Intro summary
- Education and specialty training
- Professional experience
- Scientific interests
- Breastfeeding support / certification
- Publications and academic activity
- Care philosophy

Known facts to retain:

- Born in Athens in 1982.
- Medical School of the National and Kapodistrian University of Athens, graduated in 2007.
- Master’s degree in Public Health from the National School of Public Health in 2009.
- Worked at the Center for Disease Control and Prevention from 2009-2012.
- Pediatric specialty training at `Νοσοκομείο Παίδων "Αγία Σοφία"` from 2012-2016.
- Clinical experience at Brown University / Hasbro Children’s Hospital.
- Research interests: public health, epidemiology, prevention, infectious diseases.
- Certified breastfeeding instructor/trainer.
- Vaccine-related expertise/collaboration referenced in source content should be worded carefully and verified before publishing.

### Υπηρεσίες

Purpose: answer “Can this doctor help with my child’s situation?” quickly.

Recommended services:

- Βρεφική και παιδιατρική παρακολούθηση
- Εμβολιασμοί και πρόληψη
- Μητρικός θηλασμός
- Παιδιατρικές λοιμώξεις
- Αλλεργίες
- Συμβουλευτική γονέων
- Ύπνος και καθημερινή φροντίδα
- Παιδικός σταθμός / σχολείο

For each service:

- One short parent-friendly explanation.
- When to contact the doctor.
- Link to relevant articles when available.
- CTA to appointment.

Avoid overpromising. Keep medical copy informational and conservative.

### Ιατρείο Ζωγράφου

Source:

- `site-mirror/detsis-paidiatros.gr/epikoinonia/index.html`
- `site-mirror/detsis-paidiatros.gr/ta-iatreia/index.html`

Content:

- Address: `Ευδήλου 9 - 11, Πλ. Ελευθερίας, Ζωγράφου`
- Phones: `+30 2103007410`, `+30 6937000410`
- Appointment email: `grammateia@detsis-paidiatros.gr`
- Doctor email: `paidiatros@detsis-paidiatros.gr`
- Appointment hours: `Δευτέρα - Παρασκευή 10:00-13:00 και 17:00-20:00`
- Clinic photo gallery if the `iatreio*.jpg` assets correspond to this location.
- Map placeholder with click-to-load Google Map.

### Ιατρείο Βριλησσίων

Source:

- `site-mirror/detsis-paidiatros.gr/epikoinonia/index.html`
- `site-mirror/detsis-paidiatros.gr/ta-iatreia/index.html`

Content:

- Address: `Γράμμου 23, Βριλήσσια`
- Phone: `+30 6944442947`
- Appointment email: `grammateia@detsis-paidiatros.gr`
- Doctor email: `paidiatros@detsis-paidiatros.gr`
- Appointment hours: `Δευτέρα - Παρασκευή 10:00-13:00 και 17:00-20:00`
- Clinic photo gallery if the `iatreio*.jpg` assets correspond to this location.
- Map placeholder with click-to-load Google Map.

### Άρθρα

Purpose: preserve the existing content value and improve discoverability.

Structure:

- Intro explaining that articles are informational and do not replace medical advice.
- Article grid.
- Topic filters as progressive JS enhancement:
  - Ύπνος
  - Εμβολιασμοί
  - Λοιμώξεις
  - COVID-19
  - Διατροφή / βρέφος
  - Αλλεργίες
  - Καθημερινή φροντίδα
- Serverless static fallback: all article cards visible if JS is disabled.

Article cards:

- Title
- Date
- Topic label
- Short excerpt from JSON/rendered content
- Thumbnail if available

### Συχνές Ερωτήσεις

Purpose: help parents self-orient and reduce friction before contacting the clinic.

Seed topics from existing articles and services:

- Πότε να καλέσω τον παιδίατρο;
- Τι ισχύει για εμβολιασμούς και γρίπη;
- Πώς αντιμετωπίζονται οι κοινές ιώσεις;
- Πότε ξεκινά το παιδί παιδικό σταθμό;
- Τι προσέχω με αλλεργίες;
- Τι να γνωρίζω για τον ύπνο του παιδιού;
- Θηλασμός ή ξένο γάλα;
- Πώς προλαμβάνουμε ψείρες;
- Πότε ανησυχούμε για αφυδάτωση ή υγρά;

FAQ answers must be drafted conservatively from existing article content and approved by the client.

### Ραντεβού

**Decision: appointment-request FORM is the primary mechanism** (client confirmed). Not real-time
online scheduling — it sends a request the secretariat handles. Page = fastest path to action.

Sections:

- Short intro + reassurance (response time, what happens next).
- Appointment-request form. Fields (extend old Contact Form 7 set `your-name/your-email/your-subject/your-message`):
  - Όνομα γονέα *
  - Τηλέφωνο * (add — old form lacked it; needed for callback)
  - Email *
  - Ιατρείο * (Ζωγράφου / Βριλήσσια) — radio/select
  - Όνομα & ηλικία παιδιού (optional)
  - Προτιμώμενη ημέρα/ώρα (optional — `<input type="date">` + time, native, no picker lib)
  - Μήνυμα / λόγος επίσκεψης
- Fallback CTAs: call buttons per clinic, appointment email, hours reminder.
- WhatsApp / Viber link if confirmed by client.

Static-form submit target (no backend) — **open question**: Netlify Forms, Formspree, or
`mailto:` to `grammateia@detsis-paidiatros.gr`. Add spam protection (honeypot + reCAPTCHA, as the old site used).
"Ραντεβού" button is also persistent in the header and the sticky contact bar.

### Επικοινωνία

Sections:

- Two clinic blocks.
- Phones and emails.
- Appointment hours.
- Map placeholders.
- Facebook link if confirmed from source.
- Legal/privacy links.

## Article Migration Inventory

Create each migrated article at `/arthra/<slug>/index.html`.

Use `wp-json/wp/v2/posts/*.json` as the migration source. The table below reflects the supplied JSON files.

| Date | Title | Static slug |
|---|---|---|
| 2019-09-12 | Πότε να ξεκινήσει το παιδί μου παιδικό σταθμό; | `pote-na-xekinisei-to-paidi-mou-paidiko-stathmo` |
| 2019-09-24 | Πώς να μην κολλήσει το παιδί μου ψείρες; Να χρησιμοποιήσω κάποιο από τα προϊόντα πρόληψης που κυκλοφορούν; | `pos-na-min-kollisei-to-paidi-mou-psires` |
| 2019-10-01 | Να κάνω το εμβόλιο της γρίπης στο μωρό μου; Ποιοι πρέπει να εμβολιάζονται εναντίον της γρίπης; | `na-kano-to-emvolio-tis-gripis-sto-moro-mou-poioi-prepei-na-emvoliazontai-enantion-tis-gripis` |
| 2019-10-20 | 4 κοινές λανθασμένες αντιλήψεις σχετικά με τον ήλιο | `4-koines-lanthasmenes-antilipseis-sxetika-me-ton-ilio` |
| 2019-11-04 | Νέες οδηγίες για την κατανάλωση υγρών από τα παιδιά | `nees-odigies-gia-tin-katanalosi-ygrwn` |
| 2019-11-11 | Η νόσηση από Ιλαρά μπορεί να «διαγράψει» το ανοσοποιητικό σύστημα | `nosisi-apo-ilara` |
| 2019-11-20 | Η νέα φίλη μας η ίωση - Συνέντευξη στο Ladylike.gr | `i-nea-fili-mas-i-iosi` |
| 2019-11-29 | Θάνατος από πιθανό κρούσμα διφθερίτιδας στην Ελλάδα | `thanatos-apo-pithano-krousma-diftheritidas` |
| 2019-12-06 | Μπορούν τα προβιοτικά να βοηθήσουν στη θεραπεία των κολικών; | `mporoun-ta-proviotika-na-voithisoun-sti-therapeia-tin-kolikon` |
| 2020-01-17 | Θηλασμός ή «ξένο γάλα»; Τι πρέπει να κάνω στο μαιευτήριο; | `thilasmos-i-xeno-gala` |
| 2020-01-30 | Πόσο συχνά μπορώ να κάνω μπάνιο το μωρό μου; | `poso-sixna-mporo-na-kano-mpanio-to-moro-mou` |
| 2020-01-31 | Γρίπη! Πώς θα προφυλάξουμε το παιδί μας | `auximeni-drastiriotita-tis-gripis-sti-xora-mas` |
| 2020-03-11 | Κορωνοϊός - πώς θα κρατήσω το παιδί μου ασφαλές! | `koronoios-pos-tha-kratiso-to-paidi-mou-asfales` |
| 2020-03-18 | Κορωνοϊός - 1 στα 17 παιδιά μπορεί να αρρωστήσει σοβαρά! | `koronoios-1sta17-paidia-mporei-na-arrostisoun-sovara` |
| 2020-04-30 | Κορωνοϊός και σχολεία | `koronaios-kai-sxoleia` |
| 2020-09-14 | Ανατροπή, τα παιδιά μεταδίδουν τελικά τον κορωνοϊό | `anatropi-ta-paidia-metadidoun-telika-ton-koronoio-nea-meleti-allazei-ta-dedomena` |
| 2020-09-29 | Στοματική υγιεινή σε βρέφη και παιδιά | `i-stomatiki-ygieini-sevrefi-kai-paidia-sinopsizetai-se-mia-frasi-vourtisma-apo-to-proto-donti` |
| 2021-02-16 | Πώς θα χαρούμε με τα παιδιά μας το χιόνι με ασφάλεια! | `pos-tha-xaroume-me-ta-paidia-mas-to-xioni-me-asfaleia` |
| 2021-02-23 | Τα συμπληρώματα διατροφής δε μειώνουν τα συμπτώματα της νόσου COVID-19 | `ta-sympliromata-diatrofis-den-meionoun-ta-symptiptomata-tis-nosou-covid-19` |
| 2021-03-02 | Συμπτώματα COVID-19 στα παιδιά: Τι νέο γνωρίζουμε | `symptomata-covid-19-sta-paidia-ti-neo-gnorizoume` |
| 2022-04-13 | Εποχιακές αλλεργίες στα παιδιά. Τι πρέπει να γνωρίζουν οι γονείς; | `epoxiakes-allergies-sta-paidia-ti-pre` |
| 2022-05-30 | 7 tips για... όνειρα γλυκά! | `7-tips-gia-oneira-glyka` |

Note on the allergies article:

- The WordPress JSON slug is percent-encoded Greek and truncated.
- Use the readable static slug `epoxiakes-allergies-sta-paidia-ti-pre`.
- If preserving old URLs matters, create a static compatibility page or host-level redirect from the current Greek URL.

## Asset Inventory

Likely reusable assets:

- Portrait: `site-mirror/detsis-paidiatros.gr/wp-content/uploads/2016/11/MariosDetsis_Photo2.png`
- Header logo: `site-mirror/detsis-paidiatros.gr/wp-content/uploads/2019/10/MariosDetsis_-LogoHEADER.png`
- Mobile logo: `site-mirror/detsis-paidiatros.gr/wp-content/uploads/2019/10/MariosDetsis_-LogoHEADER-mobile.png`
- Footer logo: `site-mirror/detsis-paidiatros.gr/wp-content/uploads/2019/10/MariosDetsis_-LogoFOOTER.png`
- Favicon files: `MariosDetsis_Favicon*.png`
- Clinic photos: `wp-content/uploads/2019/10/iatreio*.jpg`
- Collaboration logos: `Synergates-*.png`, `ESPID.png`, `EKΠ.png`
- Article thumbnails from dated upload folders.

Migration recommendation:

- Copy approved assets into clean project paths under `assets/img/`.
- Keep original filenames only where useful.
- Use responsive image sizes manually where needed.
- Do not reference assets directly from deep `site-mirror` paths in final HTML.

## Proposed File Structure

```text
/
  index.html
  o-iatros/
    index.html
  ypiresies/
    index.html
  iatreio-zografou/
    index.html
  iatreio-vrilission/
    index.html
  arthra/
    index.html
    <slug>/
      index.html
  sychnes-erotiseis/
    index.html
  rantevou/
    index.html
  epikoinonia/
    index.html
  cookies-policy/
    index.html
  assets/
    css/
      main.css
    js/
      main.js
    img/
      brand/
      doctor/
      clinics/
      articles/
      collaborations/
```

## Shared Layout Strategy

**Decision: tiny build step with includes.** Keep `header.html` / `footer.html` as single source
files plus per-page content; a ~20-line script (Node or any templating) stitches them into each
page and writes plain static HTML to a `dist/` (or in-place) output. Publish the generated HTML.

Why this over the alternatives:

- vs hand-duplicating into ~30 files: one edit (phone, menu item) updates every page — no drift, no missed file.
- vs runtime `fetch('/partials/header.html')`: published pages are plain HTML, so full SEO, works with JS disabled, no flash of missing nav.
- Cost: one trivial script, no framework, no dependencies beyond Node (already present).

Build = single source of truth + full static-HTML output. Do NOT use runtime fetch for core nav.

## Global UI Requirements

These are structural requirements, not visual design.

- Sticky or persistent header on desktop if the future design supports it.
- Mobile navigation button with accessible expanded/collapsed state.
- Persistent mobile contact bar:
  - Call
  - Appointment email
  - WhatsApp/Viber only after confirmed by client
- Every page should have a visible appointment/contact CTA near the top and near the bottom.
- Footer must include both clinics, phones, emails, hours, Facebook link if confirmed, and legal links.

## SEO Plan

Global rules:

- One `h1` per page.
- Natural copy, no hidden keyword lists, no repeated location stuffing.
- Unique `<title>` and meta description per page.
- Canonical URL per page.
- Human-readable internal links.
- Descriptive image alt text.
- Open Graph tags for important pages.
- Generate `sitemap.xml` and `robots.txt` at the end.

Suggested page SEO:

| Page | Title direction | H1 |
|---|---|---|
| Home | `Παιδίατρος Μάριος Δέτσης | Ζωγράφου & Βριλήσσια` | `Μάριος Δέτσης, Παιδίατρος` |
| Ο Ιατρός | `Ο Ιατρός | Μάριος Δέτσης` | `Ο Ιατρός` |
| Υπηρεσίες | `Υπηρεσίες Παιδιάτρου | Μάριος Δέτσης` | `Υπηρεσίες` |
| Ζωγράφου | `Παιδίατρος Ζωγράφου | Ιατρείο Μάριου Δέτση` | `Ιατρείο Ζωγράφου` |
| Βριλήσσια | `Παιδίατρος Βριλήσσια | Ιατρείο Μάριου Δέτση` | `Ιατρείο Βριλησσίων` |
| Άρθρα | `Άρθρα Παιδιάτρου | Μάριος Δέτσης` | `Άρθρα` |
| FAQ | `Συχνές Ερωτήσεις | Παιδίατρος Μάριος Δέτσης` | `Συχνές Ερωτήσεις` |
| Ραντεβού | `Ραντεβού | Μάριος Δέτσης, Παιδίατρος` | `Ραντεβού` |
| Επικοινωνία | `Επικοινωνία | Μάριος Δέτσης, Παιδίατρος` | `Επικοινωνία` |

Structured data:

- Home and contact/location pages: `Physician` plus `MedicalClinic` or `LocalBusiness` entries for both clinics.
- FAQ page: `FAQPage`, only after final FAQ text is approved.
- Article pages: `Article` with date, title, image, author, and canonical URL.
- Breadcrumbs: `BreadcrumbList` on inner pages and articles.

## Accessibility and Performance

Minimum checks:

- Valid semantic landmarks: `header`, `nav`, `main`, `footer`.
- Keyboard-accessible mobile menu, filters, accordions, and map placeholders.
- Visible focus states.
- No text embedded in images when HTML text can be used.
- Proper Greek language attribute: `lang="el"`.
- Responsive layout from mobile to desktop.
- Avoid loading old Avada/Fusion CSS/JS.
- Use local fonts or a system font stack; do not depend on Google Fonts unless approved.
- Optimize/copy only needed images.
- Lazy-load below-fold images.
- Avoid third-party scripts by default.

## URL Migration / Redirects

Every page slug changes (`/viografiko` → `/o-iatros`, etc.), so 301-redirect old URLs to preserve
existing SEO ranking and inbound links. Article slugs are mostly kept (only the percent-encoded
αλλεργίες one changes → `epoxiakes-allergies-sta-paidia-ti-pre`).

- Implementation depends on host: Netlify/Vercel `_redirects` or `vercel.json`; Apache `.htaccess`; Nginx `location`.
- Build a redirect map old→new for: `/viografiko`, `/ta-iatreia`, `/epikoinonia`, `/arthra`,
  `/epistimonikes-ergasies-dimosieuseis`, `/dimosieuseis-gia-emas`, `/parousia-se-synedria`,
  `/melos-synergasies`, the αλλεργίες article, and any others surfaced from the mirror.
- Add a `sitemap.xml` + `robots.txt` and submit to Google Search Console after launch.

## Implementation Phases

1. Content extraction
   - Parse JSON/HTML into plain reusable content.
   - Confirm contact details and article list.
   - Map images to pages/articles.

2. Static skeleton
   - Create folders and base HTML pages.
   - Add shared CSS and JS.
   - Set up the header/footer include build step (see Shared Layout Strategy).

3. Content migration
   - Build core pages first.
   - Migrate article index and article detail pages.
   - Add cookie/legal page if required.

4. Progressive JS
   - Mobile menu.
   - FAQ accordions.
   - Article filters.
   - Click-to-load maps.
   - Sticky contact behavior.

5. SEO and QA
   - Metadata, canonical URLs, schema, sitemap, robots.
   - Link check.
   - Responsive review.
   - Accessibility smoke test.
   - Performance pass.

6. Design application
   - Apply the later visual design without changing the information architecture unless the design brief requires it.

## Open Questions

1. Which number is the primary homepage CTA?
   - Ζωγράφου landline: `+30 2103007410`
   - Mobile: `+30 6937000410`
   - Βριλήσσια mobile: `+30 6944442947`

2. Should WhatsApp and Viber be included?
   - If yes, which number should each use?

3. Should both emails stay visible?
   - `grammateia@detsis-paidiatros.gr`
   - `paidiatros@detsis-paidiatros.gr`

4. ~~Should contact forms exist?~~ **DECIDED: yes — appointment-request form is primary.**
   Still open: which endpoint receives submissions (Netlify Forms / Formspree / `mailto:`)?

5. Should publications, media mentions, conferences, and collaborations live under `Ο Ιατρός`, or get separate pages?

6. Which clinic photos correspond to each location?

7. Are there newer approved doctor/clinic photos outside the scrape?

8. Should all 22 articles be migrated immediately, or should the first version launch with an article index plus selected high-value articles?

9. Does the client want to preserve old URLs via redirects/compatibility pages?

10. Is the existing Facebook page still the only official social profile?

## Source Notes

Primary files reviewed:

- `Detsis_Website_Audit.md`
- `site-mirror/detsis-paidiatros.gr/index.html`
- `site-mirror/detsis-paidiatros.gr/wp-json/wp/v2/pages/*.json`
- `site-mirror/detsis-paidiatros.gr/wp-json/wp/v2/posts/*.json`
- `site-mirror/detsis-paidiatros.gr/viografiko/index.html`
- `site-mirror/detsis-paidiatros.gr/ta-iatreia/index.html`
- `site-mirror/detsis-paidiatros.gr/epikoinonia/index.html`
- `site-mirror/detsis-paidiatros.gr/arthra/index.html`

