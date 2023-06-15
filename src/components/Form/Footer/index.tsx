import { ButtonsContainer, FooterButton } from "./styled";

interface FormFooterProps {
  buttons: {
    id: number;
    label: string;
    type: "submit" | "reset";
  }[];
}

const FormFooter = ({ buttons }: FormFooterProps) => (
  <ButtonsContainer>
    {buttons.map((button) => (
      <FooterButton key={button.id} type={button.type}>
        {button.label}
      </FooterButton>
    ))}
  </ButtonsContainer>
);

export default FormFooter;
