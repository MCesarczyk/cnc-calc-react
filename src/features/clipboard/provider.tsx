import { ReactNode } from "react";

import ClipboardContext from "./context";
import { ClipboardContextType } from "./types";

interface ClipboardProviderProps {
  value: ClipboardContextType;
  children: ReactNode;
}

const ClipboardProvider = ({ value, children }:ClipboardProviderProps) => (
  <ClipboardContext.Provider value={value}>
    {children}
  </ClipboardContext.Provider>
);

export default ClipboardProvider;