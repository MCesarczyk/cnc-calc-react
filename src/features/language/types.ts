export type Language = 'EN' | 'PL';

export interface LanguageData { key: Language, flag: string }

export interface LanguageState { langId: Language; setLangId: (langId: Language) => void }
