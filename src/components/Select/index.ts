import styled from 'styled-components';

export const Select = styled.select`
  min-width: 16rem;
  border: solid 1px ${({ theme }) => theme.color.primary};
  border-radius: 5px;
  padding: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    width: 100%;
  }
`;
