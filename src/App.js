import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Switcher from "./features/Switcher";
import languages from "./assets/fixtures/languages";
import { useLanguage } from './assets/utils/useLanguage';
import { ADDRESS, DATE, NAME } from "./assets/fixtures/author";
import SurfaceSpeedForm from "./views/SurfaceSpeed";
import ToolRotationForm from "./views/ToolRotation";
import LinearFeedrateForm from "./views/LinearFeedrate";
import TappingFeedrateForm from "./views/TappingFeedrate";
import { Wrapper } from "./components/Wrapper/styled";
import Navigation from "./features/Navigation";

const App = () => {

  const { langId, setLangId } = useLanguage();

  const changeLanguage = (key) => {
    setLangId(languages.findIndex(language => language.key === key));
  };

  return (
    <BrowserRouter>
      <Header title={languages[langId].mainTitle} />
      <Switcher
        languages={languages}
        changeLanguage={changeLanguage}
      />

      <Wrapper>
        <Navigation
          languages={languages}
          langId={langId}
        />

        <main>
          <Routes>
            <Route
              path="/surface-speed"
              element={<SurfaceSpeedForm langId={langId} />}
            />
            <Route
              path="/spindle-speed"
              element={<ToolRotationForm langId={langId} />}
            />
            <Route
              path="/feedrate"
              element={<LinearFeedrateForm langId={langId} />}
            />
            <Route
              path="/tapping-feed"
              element={<TappingFeedrateForm langId={langId} />}
            />
            <Route
              path="/"
              element={<Navigate replace to="/surface-speed" />}
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