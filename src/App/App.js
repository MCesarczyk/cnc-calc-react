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
      <Header title="Kalkulator obróbki skrawaniem" />
      <Switcher
            languages={languages}
            changeLanguage={changeLanguage}
          />

      <Container>
        <Section
          title="Frezowanie/wiercenie"
          body={
            <>
              <Form1
                legend="Liniowa prędkość skrawania"
              />

              <Form2
                legend="Prędkość obrotowa narzędzia"
              />

              <Form3
                legend="Wielkość posuwu liniowego"
              />
            </>
          }
        />

        <Section
          title="Gwintowanie"
          body={
            <>
              <Form4
                legend="Wielkość posuwu przy gwintowaniu"
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
