import { FieldsContainer, Fieldset, FormWrapper, Legend } from "./styled";

const Form = ({
  legend,
  children,
  footerContent,
  onSubmit,
  onReset
}) => (
  <FormWrapper onSubmit={onSubmit} onReset={onReset} >
    <Fieldset>
      <Legend>{legend}</Legend>
      <FieldsContainer>
        {children}
      </FieldsContainer>
      {footerContent}
    </Fieldset>
  </FormWrapper>
);

export default Form;