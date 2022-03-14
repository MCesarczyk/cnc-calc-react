import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useLocalStorageState } from "./assets/utils/uselocalStorageState";
import SurfaceSpeedForm from "./views/SurfaceSpeed";
import ToolRotationForm from "./views/ToolRotation";
import LinearFeedForm from "./views/LinearFeed";
import TappingFeedForm from "./views/TappingFeed";
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
  const [langId, setLangId] = useLocalStorageState("langId", 0);
  const [memoryMode, setMemoryMode] = useLocalStorageState("memoryMode", false);
  const [values, setValues] = useState(undefined);
  const [open, setOpen] = useState(false);

  return (
    <LanguageProvider value={{ langId, setLangId }} >
      <NavigationProvider value={{ open, setOpen }}>
        <ClipboardProvider value={{ values, setValues, memoryMode, setMemoryMode }} >
          <HashRouter >
            <Sidebar />
            <Header />
            
            <Wrapper>
              <NavigationWrapper>
                <Navigation />
                <ClipboardSwitcher />
              </NavigationWrapper>

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
                  element={<LinearFeedForm />}
                />
                <Route
                  path="tapping-feed"
                  element={<TappingFeedForm />}
                />
              </Routes>
            </Wrapper>

            <Footer />

          </HashRouter>
        </ClipboardProvider>
      </NavigationProvider>
    </LanguageProvider>
  )
}
export default App;