import { AUTHOR_PAGE_ADDRESS, AUTHOR_PAGE_LABEL, DATE } from "../../assets/fixtures/author";
import { FooterWrapper, FooterContent, FooterLink } from "./styled";

const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      Copyright &copy; {DATE} by&nbsp;
      <FooterLink
        href={AUTHOR_PAGE_ADDRESS}
      >
        {AUTHOR_PAGE_LABEL}
      </FooterLink>
    </FooterContent>
  </FooterWrapper>
);

export default Footer;