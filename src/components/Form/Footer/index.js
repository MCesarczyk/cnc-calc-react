import { useContext } from "react";
import LanguageContext from "../../../features/language/context";
import { createFormFooterButtons } from "../../../assets/utils/createFormFooterButtons";
import { ButtonsContainer, FooterButton } from "./styled";

const FormFooter = () => {
    const { langId } = useContext(LanguageContext);
    const buttons = createFormFooterButtons(langId);

    return (
        <ButtonsContainer>
            {buttons.map(button => (
                <FooterButton key={button.id} type={button.type}>
                    {button.label}
                </FooterButton>
            ))}
        </ButtonsContainer>
    )
};

export default FormFooter;