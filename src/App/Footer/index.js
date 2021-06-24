import { FooterStyled, FooterContent } from "./styled";

const Footer = ({ content }) => (
  <FooterStyled>
    <FooterContent>
      {content}
    </FooterContent>
  </FooterStyled>
);

export default Footer;