import { usePathname } from 'next/navigation';
import styled from 'styled-components';

import { ReactComponent as MenuThumbnail } from './hamburger-menu.svg';

interface MenuIconProps {
  onClick: () => void;
}

export const MenuIcon = ({ onClick }: MenuIconProps) => {
  const pathname = usePathname();

  return (
    <MenuIconWrapper onClick={onClick} disabled={pathname === '/'}>
      <Thumbnail />
    </MenuIconWrapper>
  );
};

const Thumbnail = styled(MenuThumbnail)`
  width: 36px;
  margin: -14px 0 0 -14px;
`;

export const MenuIconWrapper = styled.button`
  height: 1.5rem;
  margin: 0.5rem;
  margin-right: 1rem;
  background: transparent;
  border: none;
  color: inherit;
  display: none;
  z-index: 25;
  padding: 20px;

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
