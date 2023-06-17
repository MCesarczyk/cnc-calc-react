import { AUTHOR_PAGE_ADDRESS, AUTHOR_PAGE_LABEL, DATE } from 'assets/fixtures/author';
import styled from 'styled-components';

export const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      Copyright &copy; {DATE} by&nbsp;
      <FooterLink href={AUTHOR_PAGE_ADDRESS}>{AUTHOR_PAGE_LABEL}</FooterLink>
    </FooterContent>
  </FooterWrapper>
);

const FooterWrapper = styled.footer`
  text-align: center;
  margin: 0;
`;

const FooterContent = styled.p`
  color: ${({ theme }) => theme.color.primary};
  padding: 0 25px;
  font-size: 14px;
`;

const FooterLink = styled.a`
  color: inherit;
  transition: 0.5s ease-out;

  &:hover {
    color: crimson;
  }
`;
