import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Switcher from "./Switcher";
import languages from "../assets/fixtures/languages";
import { useLanguage } from '../assets/utils/useLanguage';
import { ADDRESS, DATE, NAME } from "../assets/fixtures/author";
import Form1 from "../views/Form1";
import Form2 from "../views/Form2";
import Form3 from "../views/Form3";
import Form4 from "../views/Form4";
import { Wrapper } from "../components/Wrapper/styled";

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
        <nav>
          <ul>
            <li>
              <Link to="/surface-speed">{languages[langId].form1Legend}</Link>
            </li>
            <li>
              <Link to="/spindle-speed">{languages[langId].form2Legend}</Link>
            </li>
            <li>
              <Link to="/feedrate">{languages[langId].form3Legend}</Link>
            </li>
            <li>
              <Link to="/tapping-feed">{languages[langId].form4Legend}</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route
              path="/surface-speed"
              element={
                <Form1
                  legend={languages[langId].form1Legend}
                  langId={langId}
                />
              }
            />
            <Route
              path="/spindle-speed"
              element={
                <Form2
                  legend={languages[langId].form2Legend}
                  langId={langId}
                />
              }
            />
            <Route
              path="/feedrate"
              element={
                <Form3
                  legend={languages[langId].form3Legend}
                  langId={langId}
                />
              }
            />
            <Route
              path="/tapping-feed"
              element={
                <Form4
                  legend={languages[langId].form4Legend}
                  langId={langId}
                />
              }
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