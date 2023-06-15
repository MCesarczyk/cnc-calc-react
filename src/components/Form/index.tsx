import { useContext } from "react";
import { createFormFooterButtons } from "../../assets/utils/createFormFooterButtons";
import LanguageContext from "../../features/language/context";
import FormFooter from "./Footer";
import { FieldsContainer, Fieldset, FormWrapper, Legend } from "./styled";

interface FormProps {
  legend: string;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onReset: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({ legend, children, onSubmit, onReset }: FormProps) => {
  const { langId } = useContext(LanguageContext);
  const buttons = createFormFooterButtons(langId);

  return (
    <FormWrapper onSubmit={onSubmit} onReset={onReset}>
      <Fieldset>
        <Legend>{legend}</Legend>
        <FieldsContainer>{children}</FieldsContainer>
        <FormFooter buttons={buttons} />
      </Fieldset>
    </FormWrapper>
  );
};

export default Form;
