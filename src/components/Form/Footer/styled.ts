import styled, { css } from 'styled-components';

export const ButtonsContainer = styled.div`
  max-width: 30rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 0.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const FooterButton = styled.button`
  display: flex;
  min-width: 12rem;
  width: 100%;
  justify-content: center;
  color: ${({ theme }) => theme.color.primaryContrast};
  background-color: ${({ theme }) => theme.color.primary};
  border: solid ${({ theme }) => theme.color.primary};
  padding: 0.25rem;
  border-radius: 1.5rem;

  &:hover {
    filter: brightness(150%);
  }

  &:active {
    filter: brightness(200%);
    border-color: currentColor;
  }

  ${({ type }) =>
    type === 'submit' &&
    css`
      color: ${({ theme }) => theme.color.submitButtonFont};
    `}

  ${({ type }) =>
    type === 'reset' &&
    css`
      color: ${({ theme }) => theme.color.resetButtonFont};
    `}
`;
