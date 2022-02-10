import { ReactComponent as MenuThumbnail } from "../../assets/images/hamburger-menu.svg";
import { AppBar, Headline } from "./styled";
import { MenuIcon } from "./MenuIcon";

const Header = ({ title }) => (
    <header id="start">
        <AppBar>
            <MenuIcon 
            onClick={()=>console.log("menu clicked!")}
            >
                <MenuThumbnail />
            </MenuIcon>
            <Headline>
                {title}
            </Headline>
        </AppBar>
    </header>
);

export default Header;