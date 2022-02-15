import NavigationContext from "./context";

const NavigationProvider = ({value,children})=> (
  <NavigationContext.Provider value={value}>
    {children}
  </NavigationContext.Provider>
);

export default NavigationProvider;