import styled from 'styled-components';

export const FieldWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    flex-direction: column;
    justify-content: center;
    gap: 0.25rem;
  }
`;
