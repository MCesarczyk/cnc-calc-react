import { useContext } from "react";
import LanguageContext from "../../../features/language/context";
import languages from "../../../assets/fixtures/languages";
import { ButtonsContainer, FooterButton } from "./styled";

const FormFooter = () => {
    const { langId } = useContext(LanguageContext);

    return (
        <ButtonsContainer>
            <FooterButton type="submit">
                {languages[langId]?.buttonLabel.submit}
            </FooterButton>
            <FooterButton type="reset">
                {languages[langId]?.buttonLabel.reset}
            </FooterButton>
        </ButtonsContainer>
    )
};

export default FormFooter;