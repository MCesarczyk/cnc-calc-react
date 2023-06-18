import { Language } from 'features/language/types';
import languages from 'features/language/languages';

export const createFormFooterButtons = (langId: Language) => {
  const buttons: {
    id: number;
    type: 'submit' | 'reset';
    label: string;
  }[] = [
    {
      id: 1,
      type: 'submit',
      label: languages[langId]?.buttonLabel.submit,
    },
    {
      id: 2,
      type: 'reset',
      label: languages[langId]?.buttonLabel.reset,
    },
  ];

  return buttons;
};
