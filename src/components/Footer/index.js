import Link from "../Link";
import { FooterWrapper, FooterContent } from "./styled";

const Footer = ({ date, address, name }) => (
  <FooterWrapper>
    <FooterContent>
      Copyright &copy; {date} by&nbsp;
      <Link
        adress={address}
        text={name}
      />
    </FooterContent>
  </FooterWrapper>
);

export default Footer;