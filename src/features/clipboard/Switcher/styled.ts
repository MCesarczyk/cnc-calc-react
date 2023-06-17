import styled, { css } from 'styled-components';

export const SwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const SwitcherLabel = styled.label`
  font-variant: small-caps;
  font-weight: 700;
  margin-right: 1rem;
  cursor: pointer;
`;

export const Switcher = styled.button`
  width: 3rem;
  height: 2rem;
  background-color: #d9d9d9;
  border: 2px solid #525252;
  border-radius: 1rem;
`;

export const SwitcherIndicator = styled.div<{ $memorymode?: boolean }>`
  width: 2rem;
  height: 2rem;
  border: 2px solid #525252;
  border-radius: 1rem;
  background-color: #d9d9d9;
  position: relative;
  left: -0.5rem;
  top: -3px;
  transition: all 0.3s ease-in-out;

  ${({ $memorymode }) =>
    $memorymode &&
    css`
      transform: translateX(1.2rem);
      background-color: #1e3246;
    `}
`;
