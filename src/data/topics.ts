// Article topics in filter-button order, with the CSS class that colours their tag.
export const topics = {
  'Ύπνος': 't-ypnos',
  'Αλλεργίες': 't-allergies',
  'COVID-19': 't-covid',
  'Καθημερινή φροντίδα': 't-fontida',
  'Λοιμώξεις': 't-loimo',
  'Διατροφή': 't-diatrofi',
  'Εμβολιασμοί': 't-emvolia',
} as const;

export type Topic = keyof typeof topics;

const dateFormat = new Intl.DateTimeFormat('el-GR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export const formatDate = (date: Date) => dateFormat.format(date);
export const isoDate = (date: Date) => date.toISOString().slice(0, 10);
