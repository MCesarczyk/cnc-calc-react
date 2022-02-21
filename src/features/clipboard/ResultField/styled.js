import styled, { css } from "styled-components";

export const ResultWrapper = styled.div`
  display: flex;
  flex-basis: 16rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    flex-basis: unset;
    width: 100%;
  }
`

export const Result = styled.div`
    min-width: 10rem;
    border: solid 1px ${({ theme }) => theme.color.primary};
    border-radius: 5px;
    padding: 5px;
    color: ${({ theme }) => theme.color.primaryText};
    flex-grow: 1;

    ${({ placeholder }) => placeholder && css`
      color: ${({ theme }) => theme.color.placeholder};
    `}
`;

export const ResultCopyButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.color.copyButtonFont};
  margin-left: 0.5rem;

  &:hover {
    filter: brightness(1.5);
  }

  &:active {
    filter: brightness(0.5);
  }
`