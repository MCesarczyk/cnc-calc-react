import Header from "./Header";
import Footer from "./Footer";
import Form1 from "./Forms/Form1";
import Form2 from "./Forms/Form2";
import Form3 from "./Forms/Form3";
import Form4 from "./Forms/Form4";
import Container from "./Container";
import Section from "./Section";

function App() {

  return (
    <div>
      <Header title="Kalkulator obróbki skrawaniem" />

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
        content="&copy; by Michał Cesarczyk"
        annotation="2021 Powered by"
        link={
          <a className="footer__link" href="https://youcode.pl/" target="_blank" rel="noreferrer noopener">
            you<span className="footer__linkFeature">code</span>.pl
          </a>
        }
      />
    </div>
  )
}
export default App;
