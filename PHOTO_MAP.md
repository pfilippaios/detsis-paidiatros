# Photo map — client photos → site images → pages

Source of truth for clinic and doctor photos: `photos-client/` (gitignored, from the client).
The client sorted them into three folders. The folder name **is** the location — never put a
`ΒΡΙΛΗΣΣΙΑ` photo on a Zografou slot or the other way round.

| Client folder | Location | Site folder |
|---|---|---|
| `photos-client/ΒΡΙΛΗΣΣΙΑ/` | Ιατρείο Βριλησσίων, Γράμμου 23 | `public/assets/img/clinics/vrilissia/` |
| `photos-client/ΖΩΓΡΑΦΟΥ/` | Ιατρείο Ζωγράφου, Ευδήλου 9–11 | `public/assets/img/clinics/zografou/` |
| `photos-client/ΜΑΡΙΟΣ ΔΕΤΣΗΣ/` | Portraits of the doctor (location not labelled by the client) | `public/assets/img/doctor/new/` |

Each site image exists in two widths: landscape `-600` / `-1200` (3:2), portrait `-450` / `-900` (3:4).
The mapping below was checked by pixel comparison of every site image against every client photo.

## Ιατρείο Βριλησσίων — `photos-client/ΒΡΙΛΗΣΣΙΑ/` (13 photos)

| Client file | What it shows | Site image (`clinics/vrilissia/`) | Used on |
|---|---|---|---|
| DSC03092 | Doctor in front of the shop window (wide) | — | — |
| DSC03099 | Doctor in front of the shop window (close) | `doctor-storefront` (portrait) | `/iatreio-vrilission/` |
| DSC03115 | Yellow shelf, red flowers, caricature | — | — |
| DSC03119 | Yellow shelf with books and a child's painting | `bookshelf` | `/iatreio-vrilission/`, `/iatreia/` |
| DSC03124 | Exam room cabinets (portrait) | — | — |
| DSC03130 | Exam room, exam bed and cabinets | `exam-room` | `/iatreio-vrilission/`, `/iatreia/` |
| DSC03148 | Exam room with desk and laptop | `exam-room-desk` | `/` (clinic card), `/iatreia/` (clinic card), `/iatreio-vrilission/` |
| DSC03160 | Bookcase and toy workbench (portrait) | — | — |
| DSC03166 | Bookcase close-up (portrait) | — | — |
| DSC03169 | Tiger walker toy | `tiger-toy` (portrait) | `/iatreio-vrilission/` |
| DSC03172 | Waiting room, sofa and coat stand | — | — |
| DSC03176 | Waiting room, sofa, plants, toys | `waiting-room` | `/iatreio-vrilission/`, `/` (gallery), `/iatreia/` |
| DSC03184 | Play corner, bookcase and sofa | `play-corner` | `/iatreio-vrilission/`, `/` (intro collage + gallery) |

## Ιατρείο Ζωγράφου — `photos-client/ΖΩΓΡΑΦΟΥ/` (28 photos)

| Client file | What it shows | Site image (`clinics/zografou/`) | Used on |
|---|---|---|---|
| DSC03212 | Room with teal sofa, teddy bears, rocking horse | `teal-sofa-room` | `/iatreio-zografou/`, `/` (gallery) |
| DSC03215 | Same room, red chair added | — | — |
| DSC03222 | Same room, other angle | — | — |
| DSC03233 | Bookcase with toy dog and doctor kit (portrait) | — | — |
| DSC03234 | Toy bus and ball tower (portrait) | — | — |
| DSC03235 | Toy dog and doctor kit (portrait) | — | — |
| DSC03270 | Two children at the aquarium (portrait) | — | — |
| DSC03274 | Doctor examining a child's back (portrait) | — | — |
| DSC03284 | Doctor examining a child, second child beside | `doctor-two-children` (portrait) | `/iatreio-zografou/` |
| DSC03287 | Doctor examining a child's face (portrait) | `doctor-exam-child` (portrait) | `/` (service card 01) |
| DSC03328 | Exam bed, baby scale, aquarium | `exam-room-aquarium` | `/iatreio-zografou/`, `/` (intro collage + gallery) |
| DSC03331 | Doctor's desk, computer, exam bed | `desk-exam-bed` | `/iatreio-zografou/`, `/iatreia/` |
| DSC03333 | Teepee, sofa, corridor | — | — |
| DSC03334 | Teepee (portrait) | `teepee` (portrait) | `/iatreio-zografou/` |
| DSC03338 | Teepee, swing, white corner sofa | `teepee-sofa` | `/iatreio-zografou/`, `/` (gallery), `/iatreia/` |
| DSC03341 | White sofa, hanging swing, nursing chair | `sofa-swing` | `/iatreio-zografou/` |
| DSC03346 | Play area: table, toys, teepee, swing (wide) | `waiting-room-wide` | `/` (clinic card), `/iatreia/` (clinic card), `/iatreio-zografou/` |
| DSC03347 | Same, almost identical | — | — |
| DSC03351 | Desk with monitor and caricature | — | — |
| DSC03353 | Shelf with stethoscope and art (portrait) | — | — |
| DSC03357 | Heart sculpture on shelf (portrait) | — | — |
| DSC03359 | Framed art and cat picture (portrait) | — | — |
| DSC03362 | Caricature of the doctor on the desk (portrait) | `desk-caricature` (portrait) | `/iatreio-zografou/` |
| DSC03366 | Glass doors and teepee (portrait) | — | — |
| DSC03370 | White sofa, swing, glass doors | `sofa-doors` | `/iatreio-zografou/` |
| DSC03375 | Play table with toys (portrait) | — | — |
| DSC03387 | Swing and sofa (portrait) | — | — |
| DSC03388 | Same, almost identical | — | — |

## Ο Ιατρός — `photos-client/ΜΑΡΙΟΣ ΔΕΤΣΗΣ/` (14 photos)

| Client file | What it shows | Site image (`doctor/new/`) | Used on |
|---|---|---|---|
| DSC02973 | At the desk with laptop | — | — |
| DSC02984, DSC02990 | At the desk, hands folded | — | — |
| DSC02995, DSC02996, DSC03001 | Standing by the teal wall, yellow shelf | — | — |
| DSC03027 | Writing at the desk, parent in foreground | `doctor-consultation` | `/o-iatros/`, `/` (service card 06) |
| DSC03035–DSC03046 | Same scene, other frames | — | — |
| DSC03193 | Blue blazer, white wall | — | — |
| DSC03196 | Blue blazer, teal wall | `doctor-portrait`, `doctor-portrait-square` | `/o-iatros/`, `/epistimoniko-ergo/` |
| DSC03204 | Blue blazer, teal wall, angled | `doctor-portrait-dsc03204` | `/` (intro collage) |

## Not from the client set

These come from the old website. Do **not** use them as clinic photos.

- `public/assets/img/home/web/clinic-*.jpg` and `public/assets/img/home/clinic-*.jpg` — old shoot of the
  Zografou clinic. No longer referenced by any page.
- `public/assets/img/clinics/iatreio*.jpg` — old photos, not referenced by any page.
- `public/assets/img/home/web/detsis-doctor-760.png` — homepage hero cut-out of the doctor (old site).
- `public/assets/img/home/web/doctor-conference-*.jpg` — conference photos on `/epistimoniko-ergo/`.
- `public/assets/img/home/web/article-*.jpg` — stock photos for article cards and service cards 02–05.
