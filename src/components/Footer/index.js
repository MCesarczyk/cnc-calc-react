import Link from "../Link";
import { StyledFooter, FooterContent } from "./styled";

const Footer = () => (
  <StyledFooter>
    <FooterContent>
      Copyright &copy; {new Date().getFullYear()} by&nbsp;
      <Link
        adress={"mailto:michal.cesarczyk@gmail.com"}
        text="Michał&nbsp;Cesarczyk"
      />
    </FooterContent>
  </StyledFooter>
);

export default Footer;