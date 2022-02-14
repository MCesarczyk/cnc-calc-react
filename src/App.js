import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useLanguage } from './assets/utils/useLanguage';
import { ADDRESS, DATE, NAME } from "./assets/fixtures/author";
import SurfaceSpeedForm from "./views/SurfaceSpeed";
import ToolRotationForm from "./views/ToolRotation";
import LinearFeedrateForm from "./views/LinearFeedrate";
import TappingFeedrateForm from "./views/TappingFeedrate";
import Home from "./views/Home";
import Navigation from "./features/Navigation";
import Sidebar from "./features/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Wrapper } from "./components/Wrapper/styled";
import { NavigationWrapper } from "./features/Navigation/styled";

const App = () => {
  const { langId, setLangId } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter >
      <Sidebar
        langId={langId}
        open={open}
        setOpen={setOpen}
      />
      <Header
        langId={langId}
        setLangId={setLangId}
        open={open}
        setOpen={setOpen}
      />

      <Wrapper>
        <main>
          <NavigationWrapper>
            <Navigation
              langId={langId}
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
                element={<Home langId={langId} />}
              />
              <Route
                path="surface-speed"
                element={<SurfaceSpeedForm langId={langId} />}
              />
              <Route
                path="spindle-speed"
                element={<ToolRotationForm langId={langId} />}
              />
              <Route
                path="feedrate"
                element={<LinearFeedrateForm langId={langId} />}
              />
              <Route
                path="tapping-feed"
                element={<TappingFeedrateForm langId={langId} />}
              />
            </Route>
          </Routes>
        </main>
      </Wrapper>

      <Footer
        date={DATE}
        address={ADDRESS}
        name={NAME}
      />
    </BrowserRouter>
  )
}
export default App;