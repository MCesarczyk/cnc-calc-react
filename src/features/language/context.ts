import { createContext } from 'react';
import { Language } from './types';

export interface LanguageContextType {
  langId: Language;
  setLangId: (langId: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({ langId: 'EN', setLangId: () => {} });

export default LanguageContext;
