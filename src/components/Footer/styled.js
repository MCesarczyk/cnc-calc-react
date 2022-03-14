import styled from "styled-components";

export const FooterWrapper = styled.footer`
  text-align: center;
  margin: 0;
`;

export const FooterContent = styled.p`
  color: ${({ theme }) => theme.color.primary};
  padding: 0 25px;
  font-size: 14px;
`;

export const FooterLink = styled.a`
  color: inherit;
  transition: 0.5s ease-out;

  &:hover {
    color: crimson;
  }
`