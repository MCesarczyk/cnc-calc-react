import styled from 'styled-components';

interface IconButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

export const IconButton = ({ children, disabled, onClick }: IconButtonProps) => (
  <IconButtonWrapper onClick={onClick} disabled={disabled}>
    {children}
  </IconButtonWrapper>
);

const IconButtonWrapper = styled.button<{ disabled?: boolean }>`
  height: 1.5rem;
  margin: 0.5rem;
  margin-right: 1rem;
  background: transparent;
  border: none;
  color: inherit;
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

IconButton.displayName = 'IconButton';
