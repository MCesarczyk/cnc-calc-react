import styled from "styled-components";

export const MenuIconWrapper = styled.button`
  height: 1.5rem;
  margin: 0.5rem;
  margin-right: 1rem;
  background: transparent;
  border: none;
  color: inherit;
  display: none;
  z-index: 25;

  &:hover {
    filter: brightness(0.8);
  }

  &:active {
    filter: unset;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: unset;
    filter: unset;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: block;
    margin: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    margin: 0;
  }
`;