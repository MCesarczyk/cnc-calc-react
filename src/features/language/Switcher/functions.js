import languages from "../../../assets/fixtures/languages";

export const changeLanguage = key => languages.findIndex(language => language.key === key);

export const isButtonActive = (key, langId) => key === languages[langId]?.key;