import { useContext } from "react";
import LanguageContext from "../../features/language/context";
import NavigationContext from "../../features/navigation/context";
import languages from "../../assets/fixtures/languages";
import MenuIcon from "./MenuIcon";
import Switcher from "../../features/language/Switcher";
import { AppBar, Headline, HomeLink } from "./styled";

const Header = () => {
    const { langId } = useContext(LanguageContext);
    const { open, setOpen } = useContext(NavigationContext)

    return (
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
                <Switcher />
            </AppBar>
        </header>
    )
};

export default Header;