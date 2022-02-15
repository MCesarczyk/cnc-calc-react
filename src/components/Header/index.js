import languages from "../../assets/fixtures/languages";
import { AppBar, Headline, HomeLink } from "./styled";
import MenuIcon from "./MenuIcon";
import Switcher from "../../features/Switcher";

const Header = ({ langId, setLangId, open, setOpen }) => (
    <header id="start">
        <AppBar>
            <MenuIcon
                onClick={() => setOpen(!open)}
            />
            <HomeLink to="/">
                <Headline>
                    {languages[langId]?.mainTitle}
                </Headline>
            </HomeLink>
            <Switcher
                setLangId={setLangId}
            />
        </AppBar>
    </header>
);

export default Header;