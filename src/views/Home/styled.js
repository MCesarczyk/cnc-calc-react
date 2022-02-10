import styled from "styled-components";

export const HomeTitle = styled.h2`
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;