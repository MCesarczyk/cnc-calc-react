import { createContext } from "react";

interface ClipboardContextType {
  memoryMode: boolean;
  setMemoryMode: (memoryMode: boolean) => void;
}

const ClipboardContext = createContext<ClipboardContextType>({ memoryMode: false, setMemoryMode: () => { } });

export default ClipboardContext;