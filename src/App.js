import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useLanguage } from './assets/utils/useLanguage';
import { ADDRESS, DATE, NAME } from "./assets/fixtures/author";
import SurfaceSpeedForm from "./views/SurfaceSpeed";
import ToolRotationForm from "./views/ToolRotation";
import LinearFeedrateForm from "./views/LinearFeedrate";
import TappingFeedrateForm from "./views/TappingFeedrate";
import Home from "./views/Home";
import Navigation from "./features/navigation/Navigation";
import Sidebar from "./features/navigation/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Wrapper } from "./components/Wrapper/styled";
import { NavigationWrapper } from "./features/navigation/Navigation/styled";
import LanguageProvider from "./features/language/provider";
import NavigationProvider from "./features/navigation/provider";
import ClipboardProvider from "./features/clipboard/provider";
import ClipboardSwitcher from "./features/clipboard/Switcher";

const App = () => {
  const { langId, setLangId } = useLanguage();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(undefined);

  useEffect(() => {
    console.log(`MemoryMode: ${values?.memoryMode}`);
    console.log(values);
  }, [values]);

  return (
    <LanguageProvider value={{ langId, setLangId }} >
      <NavigationProvider value={{ open, setOpen }}>
        <ClipboardProvider value={{ values, setValues }} >
          <HashRouter >
            <Sidebar />
            <Header />
            <Wrapper>
              <div>
                <NavigationWrapper>
                  <Navigation />
                  <ClipboardSwitcher />
                </NavigationWrapper>
              </div>

              <Routes>
                <Route
                  index
                  element={<Home />}
                />
                <Route
                  path="surface-speed"
                  element={<SurfaceSpeedForm />}
                />
                <Route
                  path="spindle-speed"
                  element={<ToolRotationForm />}
                />
                <Route
                  path="feedrate"
                  element={<LinearFeedrateForm />}
                />
                <Route
                  path="tapping-feed"
                  element={<TappingFeedrateForm />}
                />
              </Routes>
            </Wrapper>

            <Footer
              date={DATE}
              address={ADDRESS}
              name={NAME}
            />
          </HashRouter>
        </ClipboardProvider>
      </NavigationProvider>
    </LanguageProvider>
  )
}
export default App;