import styled, { css } from 'styled-components';

export const SwitcherButton = styled.button<{ $active?: string }>`
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.primaryContrast};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 2px;

  ${({ $active }) =>
    $active === 'active' &&
    css`
      border-color: ${({ theme }) => theme.color.primaryContrast};
    `}

  &:hover {
    filter: brightness(125%);
  }

  &:active {
    filter: brightness(150%);
  }
`;
