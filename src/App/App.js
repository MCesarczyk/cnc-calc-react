import Header from "./Header";
import Footer from "./Footer";
import { useLanguage } from './useLanguage';
import Switcher from "./Switcher";
import Form1 from "./Forms/Form1";
import Form2 from "./Forms/Form2";
import Form3 from "./Forms/Form3";
import Form4 from "./Forms/Form4";
import Container from "./Container";
import Section from "./Section";
import languages from "./languages";

function App() {

  const { langId, setLangId } = useLanguage();

  const changeLanguage = (key) => {
    setLangId(languages.findIndex(language => language.key === key));
  };

  return (
    <div>
      <Header title={languages[langId].mainTitle} />
      <Switcher
            languages={languages}
            changeLanguage={changeLanguage}
          />

      <Container>
        <Section
          title={languages[langId].section1Title}
          body={
            <>
              <Form1
                legend={languages[langId].form1Legend}
              />

              <Form2
                legend={languages[langId].form2Legend}
              />

              <Form3
                legend={languages[langId].form3Legend}
              />
            </>
          }
        />

        <Section
          title={languages[langId].section2Title}
          body={
            <>
              <Form4
                legend={languages[langId].form4Legend}
              />
            </>
          }
        />

      </Container>

      <Footer
        content="&copy; 2021 by Michał Cesarczyk"
      />
    </div>
  )
}
export default App;
