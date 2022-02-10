import { ReactComponent as MenuThumbnail } from "../../../assets/images/hamburger-menu.svg";
import { MenuIconWrapper } from "./styled";

const MenuIcon = ({ onClick }) => (
  <MenuIconWrapper
    onClick={onClick}
  >
    <MenuThumbnail />
  </MenuIconWrapper>

);

export default MenuIcon;