// @ts-check
import { defineConfig } from 'astro/config';

// Articles on the old WordPress site lived at the root (/<slug>/); they now live under /arthra/.
const oldArticleSlugs = [
  '4-koines-lanthasmenes-antilipseis-sxetika-me-ton-ilio',
  '7-tips-gia-oneira-glyka',
  'anatropi-ta-paidia-metadidoun-telika-ton-koronoio-nea-meleti-allazei-ta-dedomena',
  'auximeni-drastiriotita-tis-gripis-sti-xora-mas',
  'i-nea-fili-mas-i-iosi',
  'i-stomatiki-ygieini-sevrefi-kai-paidia-sinopsizetai-se-mia-frasi-vourtisma-apo-to-proto-donti',
  'koronaios-kai-sxoleia',
  'koronoios-1sta17-paidia-mporei-na-arrostisoun-sovara',
  'koronoios-pos-tha-kratiso-to-paidi-mou-asfales',
  'mporoun-ta-proviotika-na-voithisoun-sti-therapeia-tin-kolikon',
  'na-kano-to-emvolio-tis-gripis-sto-moro-mou-poioi-prepei-na-emvoliazontai-enantion-tis-gripis',
  'nees-odigies-gia-tin-katanalosi-ygrwn',
  'nosisi-apo-ilara',
  'pos-na-min-kollisei-to-paidi-mou-psires',
  'pos-tha-xaroume-me-ta-paidia-mas-to-xioni-me-asfaleia',
  'poso-sixna-mporo-na-kano-mpanio-to-moro-mou',
  'pote-na-xekinisei-to-paidi-mou-paidiko-stathmo',
  'symptomata-covid-19-sta-paidia-ti-neo-gnorizoume',
  'ta-sympliromata-diatrofis-den-meionoun-ta-symptiptomata-tis-nosou-covid-19',
  'thanatos-apo-pithano-krousma-diftheritidas',
  'thilasmos-i-xeno-gala',
];

export default defineConfig({
  site: 'https://detsis-paidiatros.gr',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // keep Greek quotes and punctuation in articles exactly as written
  markdown: { smartypants: false },
  // old WordPress URLs → new pages, so existing links and search results keep working
  redirects: {
    ...Object.fromEntries(oldArticleSlugs.map((slug) => [`/${slug}/`, `/arthra/${slug}/`])),
    '/εποχιακές-αλλεργίες-στα-παιδιά-τι-πρέ/': '/arthra/epoxiakes-allergies-sta-paidia-ti-pre/',
    '/viografiko/': '/o-iatros/',
    '/melos-synergasies/': '/o-iatros/#synergasies',
    '/dimosieuseis-gia-emas/': '/o-iatros/',
    '/ta-iatreia/': '/iatreia/',
    '/epistimonikes-ergasies-dimosieuseis/': '/epistimoniko-ergo/',
    '/parousia-se-synedria/': '/epistimoniko-ergo/',
  },
});
