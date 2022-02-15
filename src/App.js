import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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

const App = () => {
  const { langId, setLangId } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <LanguageProvider value={{ langId, setLangId }} >
      <BrowserRouter >
        <Sidebar
          open={open}
          setOpen={setOpen}
        />
        <Header
          open={open}
          setOpen={setOpen}
        />

        <Wrapper>
          <NavigationWrapper>
            <Navigation
              baseUrl="cnc-calc-react/"
            />
          </NavigationWrapper>

          <Routes>
            <Route
              path="/"
              element={<Navigate to="cnc-calc-react" />}
            />
            <Route
              path="cnc-calc-react"
            >
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
            </Route>
          </Routes>
        </Wrapper>

        <Footer
          date={DATE}
          address={ADDRESS}
          name={NAME}
        />
      </BrowserRouter>
    </LanguageProvider>
  )
}
export default App;