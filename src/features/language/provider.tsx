import { Language } from "./types";
import LanguageContext from "./context";

interface LanguageProviderProps {
  value: {
    langId: Language;
    setLangId: (value: Language) => void;
  };
  children: React.ReactNode;
}

const LanguageProvider = ({ value, children }: LanguageProviderProps) => (
  <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
);

export default LanguageProvider;
