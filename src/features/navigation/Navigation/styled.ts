import styled from 'styled-components';

export const NavigationWrapper = styled.div`
  align-self: flex-start;
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;

export const MobileNavWrapper = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: block;
  }
`;
