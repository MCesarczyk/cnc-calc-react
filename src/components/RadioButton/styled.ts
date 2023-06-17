import styled from 'styled-components';

export const RadioButtonWrapper = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    align-self: flex-start;
  }
`;
