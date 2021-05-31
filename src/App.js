import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Field from "./Field";
import Button from "./Button";
import Form from "./Form";
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
            <React.Fragment>
              <Form
                legend="Liniowa prędkość skrawania"
                fields={
                  <React.Fragment>
                    <Field
                      text="D [mm]"
                      input={<input type="number" min="0.0001" step="0.0001"
                        placeholder=" średnica narzędzia " required autofocus className="field__input" />}
                    />
                    <Field
                      text="n [obr/min]"
                      input={<input type="number" min="1" step="1"
                        placeholder=" obroty wrzeciona " required className="field__input" />}
                    />
                    <Field
                      text="Vc [m/min]"
                      input={<input readonly placeholder=" wynik " className="field__input" />}
                    />
                  </React.Fragment>
                }
                buttons={
                  <React.Fragment>
                    <Button name="Oblicz" type="submit" />
                    <Button name="Reset" type="reset" />
                  </React.Fragment>
                }
              />

              <Form
                legend="Prędkość obrotowa narzędzia"
                fields={
                  <React.Fragment>
                    <Field
                      text="D [mm]"
                      input={<input type="number" min="0.0001" step="0.0001"
                        placeholder=" średnica narzędzia " required className="field__input" />}
                    />
                    <Field
                      text="Vc [m/min]"
                      input={<input
                        type="number" min="1" step="1" placeholder=" prędkość liniowa " required
                        className="field__input" />}
                    />
                    <Field
                      text="n_obr. [obr/min]"
                      input={<input
                        readonly placeholder=" wynik " className="field__input" />}
                    />
                  </React.Fragment>
                }
                buttons={
                  <React.Fragment>
                    <Button name="Oblicz" type="submit" />
                    <Button name="Reset" type="reset" />
                  </React.Fragment>
                }
              />

              <Form
                legend="Wielkość posuwu liniowego"
                fields={
                  <React.Fragment>
                    <Field
                      text="n [obr/min]"
                      input={<input type="number" min="1" step="1"
                        placeholder=" obroty wrzeciona " required className="field__input" />}
                    />
                    <Field
                      control={<input type="radio" name="feedType" id="FPR" className="js-rev" checked />}
                      binding="FPR"
                      text="f_obr [mm/obr]"
                      input={<input type="number" min="0.01" step="0.01" required placeholder=" posuw na obrót " className="field__input" />}
                    />
                    <Field
                      control={<input type="radio" name="feedType" id="FPT" className="js-tooth" />}
                      binding="FPT"
                      text="f_z [mm]"
                      input={<input type="number" min="0.01" step="0.01" required disabled placeholder=" posuw na ząb " className="field__input" />}
                    />
                    <Field
                      text="z"
                      input={<input type="number" min="1" step="1" required
                        className="field__input" placeholder=" ilość zębów " disabled />}
                    />
                    <Field
                      text="f [mm/min]"
                      input={<input readonly placeholder=" wynik "
                        className="field__input" />}
                    />
                  </React.Fragment>
                }
                buttons={
                  <React.Fragment>
                    <Button name="Oblicz" type="submit" />
                    <Button name="Reset" type="reset" />
                  </React.Fragment>
                }
              />

              <Form
                legend="Prędkość obrotowa narzędzia w zależności od posuwu liniowego"
                fields={
                  <React.Fragment>
                    <Field
                      text="f [mm/min]"
                      input={<input type="number" min="1" step="1"
                        placeholder=" posuw liniowy " required className="field__input" />}
                    />
                    <Field
                      control={<input type="radio" name="feedType" id="FPR" className="js-rev" checked />}
                      binding="FPR"
                      text="f_obr [mm/obr]"
                      input={<input type="number" min="0.01" step="0.01" required placeholder=" posuw na obrót " className="field__input" />}
                    />
                    <Field
                      control={<input type="radio" name="feedType" id="FPT" className="js-tooth" />}
                      binding="FPT"
                      text="f_z [mm]"
                      input={<input type="number" min="0.01" step="0.01" required disabled placeholder=" posuw na ząb " className="field__input" />}
                    />
                    <Field
                      text="z"
                      input={<input type="number" min="1" step="1" required
                        className="field__input" placeholder=" ilość zębów " disabled />}
                    />
                    <Field
                      text="n [obr/min]"
                      input={<input readonly placeholder=" wynik "
                        className="field__input" />}
                    />
                  </React.Fragment>
                }
                buttons={
                  <React.Fragment>
                    <Button name="Oblicz" type="submit" />
                    <Button name="Reset" type="reset" />
                  </React.Fragment>
                }
              />
            </React.Fragment>
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
