import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useLanguage } from './assets/utils/useLanguage';
import { ADDRESS, DATE, NAME } from "./assets/fixtures/author";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./features/Navigation";
import Home from "./views/Home";
import SurfaceSpeedForm from "./views/SurfaceSpeed";
import ToolRotationForm from "./views/ToolRotation";
import LinearFeedrateForm from "./views/LinearFeedrate";
import TappingFeedrateForm from "./views/TappingFeedrate";
import { Wrapper } from "./components/Wrapper/styled";
import { NavigationWrapper } from "./features/Navigation/styled";

const App = () => {

  const { langId, setLangId } = useLanguage();

  return (
    <BrowserRouter>
      <Header
        langId={langId}
        setLangId={setLangId}
      />

      <Wrapper>
        <NavigationWrapper>
          <Navigation
            langId={langId}
          />
        </NavigationWrapper>

        <main>
          <Routes>
            <Route
              path="/"
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