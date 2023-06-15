import ClipboardContext from "./context";

interface ClipboardProviderProps {
  value: {
    memoryMode: boolean;
    setMemoryMode: (value: boolean) => void;
  };
  children: React.ReactNode;
}

const ClipboardProvider = ({ value, children }:ClipboardProviderProps) => (
  <ClipboardContext.Provider value={value}>
    {children}
  </ClipboardContext.Provider>
);

export default ClipboardProvider;