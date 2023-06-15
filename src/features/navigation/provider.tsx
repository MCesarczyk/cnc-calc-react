import NavigationContext from "./context";

interface NavigationProviderProps {
  value: {
    open: boolean;
    setOpen: (open: boolean) => void;
  };
  children: React.ReactNode;
}

const NavigationProvider = ({ value, children }: NavigationProviderProps) => (
  <NavigationContext.Provider value={value}>
    {children}
  </NavigationContext.Provider>
);

export default NavigationProvider;
