import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Label from "./Label";
import Button from "./Button";
import Labels from "./Labels";
import Buttons from "./Buttons";
import Legend from "./Legend";
import Fieldset from "./Fieldset";
import Form from "./Form";
import Subheader from "./Subheader";
import Section from "./Section";
import Main from "./Main";

function App() {
  return (
    <div>
      <Header title="Kalkulator obróbki skrawaniem" />

      <Main>
        <Section>
          <Subheader title="Frezowanie/wiercenie" />

          <Form>
            <Fieldset>
              <Legend title="Liniowa prędkość skrawania" />
              <Labels>
                <Label
                  text="D [mm]"
                  input={<input type="number" min="0.0001" step="0.0001"
                    placeholder=" średnica narzędzia " required autofocus className="label__input" />}
                />
                <Label
                  text="n [obr/min]"
                  input={<input type="number" min="1" step="1"
                    placeholder=" obroty wrzeciona " required className="label__input" />}
                />
                <Label
                  text="Vc [m/min]"
                  input={<input readonly placeholder=" wynik " className="label__input" />}
                />
              </Labels>
              <Buttons>
                <Button name="Oblicz" type="submit" />
                <Button name="Reset" type="reset" />
              </Buttons>
            </Fieldset>
          </Form>

          <Form>
            <Fieldset>
              <Legend title="Prędkość obrotowa narzędzia" />
              <Labels>
                <Label
                  text="D [mm]"
                  input={<input type="number" min="0.0001" step="0.0001"
                    placeholder=" średnica narzędzia " required className="label__input" />}
                />
                <Label
                  text="Vc [m/min]"
                  input={<input
                    type="number" min="1" step="1" placeholder=" prędkość liniowa " required
                    className="label__input" />}
                />
                <Label
                  text="n_obr. [obr/min]"
                  input={<input
                    readonly placeholder=" wynik " className="label__input" />}
                />
              </Labels>
              <Buttons>
                <Button name="Oblicz" type="submit" />
                <Button name="Reset" type="reset" />
              </Buttons>
            </Fieldset>
          </Form>

          <Form>
            <Fieldset>
              <Legend title="Wielkość posuwu liniowego" />
              <Labels>
                <Label
                  text="n [obr/min]"
                  input={<input type="number" min="1" step="1"
                    placeholder=" obroty wrzeciona " required className="label__input" />}
                />
                <Label
                  control={<input type="radio" name="feedType" id="FPR" className="js-rev" checked />}
                  binding="FPR"
                  text="f_obr [mm/obr]"
                  input={<input type="number" min="0.01" step="0.01" required placeholder=" posuw na obrót " className="label__input" />}
                />
                <Label
                  control={<input type="radio" name="feedType" id="FPT" className="js-tooth" />}
                  binding="FPT"
                  text="f_z [mm]"
                  input={<input type="number" min="0.01" step="0.01" required disabled placeholder=" posuw na ząb " className="label__input" />}
                />
                <Label
                  text="z"
                  input={<input type="number" min="1" step="1" required
                    className="label__input" placeholder=" ilość zębów " disabled />}
                />
                <Label
                  text="f [mm/min]"
                  input={<input readonly placeholder=" wynik "
                    className="label__input" />}
                />
              </Labels>
              <Buttons>
                <Button name="Oblicz" type="submit" />
                <Button name="Reset" type="reset" />
              </Buttons>
            </Fieldset>
          </Form>
        </Section>
      </Main>

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
