import { useContext } from "react";
import { createFormFooterButtons } from "../../assets/utils/createFormFooterButtons";
import LanguageContext from "../../features/language/context";
import FormFooter from "./Footer";
import { FieldsContainer, Fieldset, FormWrapper, Legend } from "./styled";

const Form = ({ legend, children, onSubmit, onReset }) => {
  const { langId } = useContext(LanguageContext);
  const buttons = createFormFooterButtons(langId);

  return (
    <FormWrapper onSubmit={onSubmit} onReset={onReset} >
      <Fieldset>
        <Legend>{legend}</Legend>
        <FieldsContainer>
          {children}
        </FieldsContainer>
        <FormFooter buttons={buttons} />
      </Fieldset>
    </FormWrapper>
  )
};

export default Form;