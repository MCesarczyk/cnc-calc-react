import { StyledFooter, FooterContent } from "./styled";

const Footer = ({ content }) => (
  <StyledFooter>
    <FooterContent>
      {content}
    </FooterContent>
  </StyledFooter>
);

export default Footer;