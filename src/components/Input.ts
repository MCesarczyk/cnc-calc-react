import styled from 'styled-components';

export const Input = styled.input`
  border: solid 1px ${({ theme }) => theme.color.primary};
  border-radius: 5px;
  padding: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    width: 100%;
  }

  &:invalid {
    background-color: ${({ theme }) => theme.color.invalid};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.disabled};
  }
`;
