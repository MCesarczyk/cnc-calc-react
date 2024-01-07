import { createContext } from 'react';

export interface NavigationContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType>({ open: false, setOpen: () => {} });

export default NavigationContext;
