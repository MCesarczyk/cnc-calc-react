import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as MenuThumbnail } from "assets/images/hamburger-menu.svg";

interface MenuIconProps {
  onClick: () => void;
}

export const MenuIcon = ({ onClick }: MenuIconProps) => {
  const { pathname } = useLocation();

  return (
    <MenuIconWrapper onClick={onClick} disabled={pathname === '/'}>
      <MenuThumbnail />
    </MenuIconWrapper>
  );
};

const MenuIconWrapper = styled.button`
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
