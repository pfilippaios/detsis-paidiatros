# detsis-paidiatros

Rebuild of detsis-paidiatros.gr (Dr Marios Detsis, pediatrician) as a static site built with
Astro (output is plain HTML/CSS/JS in `dist/`, no server).

## Source of truth: the client sitemap doc

`photos-client/Marios Detsis Sitemap (2).docx` is the **source of truth and the latest info**.
It overrides the old website, `_ref/`, and anything older. Read it with
`textutil -convert txt -stdout "photos-client/Marios Detsis Sitemap (2).docx"`.

What it fixes:

- **Menu:** Αρχική · Ο Ιατρός · Υπηρεσίες · Τα Ιατρεία (Βριλησσίων & Ζωγράφου) · Άρθρα ·
  Συχνές Ερωτήσεις · Ραντεβού & Επικοινωνία.
- **Ο Ιατρός:** the new bio text, verbatim, in four parts (Βιογραφικό, Εκπαίδευση & Επιστημονική
  Κατάρτιση, Επαγγελματική & Ερευνητική Εμπειρία, Επιστημονικές Εργασίες / Δημοσιεύσεις).
  Μέλος / Συνεργασίες sits under the bio, not as a separate subpage. Drop "Δημοσιεύσεις για εμάς"
  and "Παρουσία σε συνέδρια".
- **Publications:** same list as the old site (`/epistimonikes-ergasies-dimosieuseis/`), shown at
  `/epistimoniko-ergo/`.
- **Υπηρεσίες:** the client's four paragraphs, verbatim.
- **Τα Ιατρεία:** Βριλήσσια, Γράμμου 23 and Ζωγράφου, Ευδήλου 9–11. Phone **210 300 7410 for both**;
  hours "κατόπιν ραντεβού". New clinic photos come from `photos-client/`.
- **Άρθρα:** the same 22 articles as the old site, no new ones.
- **Συχνές Ερωτήσεις:** the client's 17 questions in 4 groups (Θηλασμός, Ύπνος, Άλλα θέματα του
  νεογνού, Μεγαλύτερα βρέφη). No answers yet — show a placeholder.
- **Ραντεβού & Επικοινωνία:** same contact details as the old site's `/epikoinonia/`, except the
  phone rule above. The old 694 444 2947 number is not used.

**Photos:** `PHOTO_MAP.md` maps every client photo (`photos-client/ΒΡΙΛΗΣΣΙΑ`, `ΖΩΓΡΑΦΟΥ`, `ΜΑΡΙΟΣ ΔΕΤΣΗΣ`)
to its site image and the pages that use it. A clinic photo must come from that clinic's folder.

Never write new copy, stats or facts that are not in the doc or on the old site. Missing content → ask.
URLs are unchanged from the earlier static build.

## Commands

```bash
npm run dev       # dev server, http://localhost:4321
npm run build     # static build into dist/ (34 pages)
npm run preview   # serve dist/ on http://localhost:4322
```

`.claude/launch.json` has `dev` and `preview` configs for the browser pane.

## Structure

- `src/layouts/BaseLayout.astro` — `<head>`, meta/OG/JSON-LD props, CSS imports, bundles `src/scripts/main.js`.
- `src/components/` — `SiteHeader`, `SiteFooter`, `CtaBand` (shared by every page).
- `src/data/site.ts` (clinics, phones, emails), `src/data/topics.ts` (article topic → tag class, Greek date format).
- `src/pages/**/index.astro` — one file per page; URLs keep the trailing slash (`trailingSlash: 'always'`).
- **Articles are Markdown** in `src/content/articles/<slug>.md` (schema in `src/content.config.ts`),
  rendered by `src/pages/arthra/[slug].astro`. The `/arthra/` index builds cards + topic filters from
  the collection — add an article by adding one `.md` file.
- `src/styles/` — `tokens.css`, `base.css`, `layout.css`, `components.css`, `sections.css`, `pages.css`,
  imported in that order by BaseLayout. Order matters for the cascade.
- `src/scripts/main.js` — ES module: menu, filters, click-to-load maps, appointment mailto, motion.
  GSAP comes from npm (`gsap`) and is **dynamically imported only on desktop (>920px) with motion
  allowed**; mobile / reduced-motion never download it.
- `public/` — images (`public/assets/img/…`), `robots.txt`, `sitemap.xml`; served at the same URLs as before.

`_ref/` (gitignored) = all reference / old-website / scratch material. Notably
`_ref/site-mirror/` = full httrack copy of the old WordPress site (content + images source).

## Running Codex (gpt-5.5, high effort)

The `ask-codex` wrapper hardcodes a small model + read-only sandbox — do NOT use it when you
need 5.5/high or file writes. Call `codex exec` directly:

```bash
# read-only consult (model/effort are also the config.toml defaults, flags shown for clarity)
codex exec -m gpt-5.5 -c model_reasoning_effort="high" "PROMPT"

# let codex write files
codex exec -m gpt-5.5 -c model_reasoning_effort="high" -s workspace-write "PROMPT"
```

For bulk file reading where 5.5/high isn't needed, `ask-codex --paths <files> --question "..."` is fine.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
