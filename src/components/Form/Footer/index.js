import languages from "../../../assets/fixtures/languages";
import { ButtonsContainer } from "./styled";
import { FormButton } from "../Button";

const FormFooter = ({ langId }) => (
    <ButtonsContainer>
        <FormButton type="submit">
            {languages[langId]?.buttonLabel.submit}
        </FormButton>
        <FormButton type="reset">
            {languages[langId]?.buttonLabel.reset}
        </FormButton>
    </ButtonsContainer>
);

export default FormFooter;