import { useState } from "react";
import { useLocation } from "react-router-dom";
import languages from "../../assets/fixtures/languages";
import { AppBar, Headline, HomeLink } from "./styled";
import { SidebarNavWrapper } from "../../features/Navigation/styled";
import Navigation from "../../features/Navigation";
import MenuIcon from "./MenuIcon";
import Switcher from "../../features/Switcher";

const Header = ({ langId, setLangId }) => {
    const [open, setOpen] = useState(false);

    const { pathname } = useLocation();

    return (
        <header id="start">
            <AppBar>
                <MenuIcon
                    onClick={() => setOpen(!open)}
                />
                <SidebarNavWrapper
                    visible={open && pathname !== "/"}
                >
                    <MenuIcon
                        onClick={() => setOpen(false)}
                    />
                    <Navigation
                        langId={langId}
                        handleClose={() => setOpen(false)}
                    />
                </SidebarNavWrapper>
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
    )
};

export default Header;