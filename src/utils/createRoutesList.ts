import { Language } from 'features/language/types';
import languages from 'assets/fixtures/languages';

export const createRoutesList = (langId: Language) => {
  return [
    { id: 1, path: 'surface-speed', testId: 'link-surface-speed', label: languages[langId]?.form1Legend },
    { id: 2, path: 'spindle-speed', testId: 'link-spindle-speed', label: languages[langId]?.form2Legend },
    { id: 3, path: 'feedrate', testId: 'link-feedrate', label: languages[langId]?.form3Legend },
    { id: 4, path: 'tapping-feed', testId: 'link-tapping-feed', label: languages[langId]?.form4Legend },
  ];
};
