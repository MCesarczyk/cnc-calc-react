import ClipboardContext from "./context";

const ClipboardProvider = ({ value, children }) => (
  <ClipboardContext.Provider value={value}>
    {children}
  </ClipboardContext.Provider>
);

export default ClipboardProvider;