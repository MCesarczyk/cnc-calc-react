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
import FooterLink from "./Footer/Link";
import languages from "../assets/fixtures/languages";

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
                langId={langId}
              />

              <Form2
                legend={languages[langId].form2Legend}
                langId={langId}
              />

              <Form3
                legend={languages[langId].form3Legend}
                langId={langId}
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
                langId={langId}
              />
            </>
          }
        />

      </Container>

      <Footer>
        {`Copyright \u00a9 ${new Date().getFullYear()} `}
        <FooterLink
          adress="mailto:michal.cesarczyk@gmail.com"
          prefix="by"
          text="Michał&nbsp;Cesarczyk"
        />
      </Footer>
    </div>
  )
}
export default App;