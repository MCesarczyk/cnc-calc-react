import { FeedOption } from 'types';
import languages from 'assets/fixtures/languages';
import { Language } from 'features/language/types';

export const createFeedOptions = (langId: Language) => {
  const feedOptions: FeedOption[] = [
    {
      id: 'FPR',
      name: languages[langId]?.feedPerRev.name,
      sub: languages[langId]?.feedPerRev.sub,
      unit: languages[langId]?.feedPerRev.unit,
      placeholder: languages[langId]?.feedPerRev.placeholder,
      disabled: true,
    },
    {
      id: 'FPT',
      name: languages[langId]?.feedPerTooth.name,
      sub: languages[langId]?.feedPerTooth.sub,
      unit: languages[langId]?.feedPerTooth.unit,
      placeholder: languages[langId]?.feedPerTooth.placeholder,
      disabled: false,
    },
  ];

  return feedOptions;
};
