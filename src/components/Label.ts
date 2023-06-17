import styled from 'styled-components';

export const Label = styled.label`
  text-align: right;

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    align-self: flex-start;
  }
`;
