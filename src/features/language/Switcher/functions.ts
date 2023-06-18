import languages from 'features/language/languages';
import { Language } from '../types';

export const changeLanguage = (key: Language) => languages[key].key;

export const isButtonActive = (key: Language, langId: Language) => key === languages[langId]?.key;
