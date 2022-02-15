import FormFooter from "./Footer";
import { FieldsContainer, Fieldset, FormWrapper, Legend } from "./styled";

const Form = ({ legend, children, onSubmit, onReset }) => (
  <FormWrapper onSubmit={onSubmit} onReset={onReset} >
    <Fieldset>
      <Legend>{legend}</Legend>
      <FieldsContainer>
        {children}
      </FieldsContainer>
      <FormFooter />
    </Fieldset>
  </FormWrapper>
);

export default Form;