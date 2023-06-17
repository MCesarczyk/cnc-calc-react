import { useLocation } from 'react-router-dom';
import { ReactComponent as MenuThumbnail } from "../../../assets/images/hamburger-menu.svg";
import { MenuIconWrapper } from './styled';

interface MenuIconProps {
  onClick: () => void;
}

const MenuIcon = ({ onClick }: MenuIconProps) => {
  const { pathname } = useLocation();

  return (
    <MenuIconWrapper onClick={onClick} disabled={pathname === '/'}>
      <MenuThumbnail />
    </MenuIconWrapper>
  );
};

export default MenuIcon;
