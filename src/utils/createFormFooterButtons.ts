import { Language } from 'features/language/types';
import languages from 'assets/fixtures/languages';

export const createFormFooterButtons = (langId: Language) => {
  const buttons: {
    id: number;
    type: 'SUBMIT' | 'RESET';
    label: string;
    testId: string;
  }[] = [
    {
      id: 1,
      type: 'SUBMIT',
      label: languages[langId]?.buttonLabel.submit,
      testId: 'button-submit',
    },
    {
      id: 2,
      type: 'RESET',
      label: languages[langId]?.buttonLabel.reset,
      testId: 'button-reset',
    },
  ];

  return buttons;
};
