import LanguageContext from "./context";

const LanguageProvider = ({ value, children }) => (
  <LanguageContext.Provider value={value}>
    {children}
  </LanguageContext.Provider>
);

export default LanguageProvider;