import { ButtonsContainer, FooterButton } from "./styled";

const FormFooter = ({ buttons }) => (
    <ButtonsContainer>
        {buttons.map(button => (
            <FooterButton key={button.id} type={button.type}>
                {button.label}
            </FooterButton>
        ))}
    </ButtonsContainer>
);

export default FormFooter;