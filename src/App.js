import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
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
                // fields={
                //   <>
                //     <Field
                //       text="n [obr/min]"
                //       input={<input type="number" min="1" step="1"
                //         placeholder=" obroty wrzeciona " required className="field__input" />}
                //     />
                //     <Field
                //       control={<input type="radio" name="feedType" id="FPR" className="js-rev" checked />}
                //       binding="FPR"
                //       text="f_obr [mm/obr]"
                //       input={<input type="number" min="0.01" step="0.01" required placeholder=" posuw na obrót " className="field__input" />}
                //     />
                //     <Field
                //       control={<input type="radio" name="feedType" id="FPT" className="js-tooth" />}
                //       binding="FPT"
                //       text="f_z [mm]"
                //       input={<input type="number" min="0.01" step="0.01" required disabled placeholder=" posuw na ząb " className="field__input" />}
                //     />
                //     <Field
                //       text="z"
                //       input={<input type="number" min="1" step="1" required
                //         className="field__input" placeholder=" ilość zębów " disabled />}
                //     />
                //     <Field
                //       text="f [mm/min]"
                //       input={<input readonly placeholder=" wynik "
                //         className="field__input" />}
                //     />
                //   </>
                // }
                // buttons={
                //   <>
                //     <Button name="Oblicz" type="submit" />
                //     <Button name="Reset" type="reset" />
                //   </>
                // }
              />

              {/* <Form
                legend="Prędkość obrotowa narzędzia w zależności od posuwu liniowego"
                fields={
                  <>
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
                  </>
                }
                buttons={
                  <>
                    <Button name="Oblicz" type="submit" />
                    <Button name="Reset" type="reset" />
                  </>
                }
              /> */}
            </>
          }
        />

        {/* <Section
          title="Gwintowanie"
          body={
            <>
              <Form
                legend="Prędkość obrotowa narzędzia"
                fields={
                  <>
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
                  </>
                }
                buttons={
                  <>
                    <Button name="Oblicz" type="submit" />
                    <Button name="Reset" type="reset" />
                  </>
                }
              />

              <Form
                legend="Wielkość posuwu przy gwintowaniu"
                fields={
                  <>
                    <Field
                      text="n [obr/min]"
                      input={<input type="number" min="1" step="1"
                        placeholder=" obroty wrzeciona " required className="field__input" />}
                    />
                    <Button name="Wstaw z sekcji powyżej" />
                    <Field
                      text="Średnica narzędzia [mm]"
                      input={<select className="field__select" name="tapDiameter"></select>}
                    />
                    <Field
                      text="Skok gwintu [mm]"
                      input={<input readonly placeholder=" skok gwintu " className="field__input" />}
                    />
                    <Field
                      text="f [mm/min]"
                      input={<input readonly placeholder=" wynik " className="field__input" />}
                    />
                  </>
                }
                buttons={
                  <>
                    <Button name="Oblicz" type="submit" />
                    <Button name="Reset" type="reset" />
                  </>
                }
              />
            </>
          }
        /> */}

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
