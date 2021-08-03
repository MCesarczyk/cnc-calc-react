import styled from "styled-components";

export const StyledFooter = styled.footer`
  margin: 30px 0px;
`;

export const FooterContent = styled.p`
  color: ${({ theme }) => theme.color.primary};
  padding: 0 25px;
  font-size: 14px;
`;