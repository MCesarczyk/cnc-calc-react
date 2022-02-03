import { StyledFooter, FooterContent } from "./styled";

const Footer = ({ children }) => (
  <StyledFooter>
    <FooterContent>
      {children}
    </FooterContent>
  </StyledFooter>
);

export default Footer;