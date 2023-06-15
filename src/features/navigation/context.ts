import { createContext } from "react";

interface NavigationContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType>({open: false, setOpen: () => {}});

export default NavigationContext;