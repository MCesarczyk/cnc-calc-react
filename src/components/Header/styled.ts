import styled from 'styled-components';

export const AppBar = styled.div`
  color: ${({ theme }) => theme.color.primaryContrast};
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 1.5rem;
  padding: 0.5rem 1.5rem;
  margin: 0 auto 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    border-radius: 0;
    margin: 0 0 10px 0;
    padding: 0.5rem;
  }
`;
