import { useState } from "react";
import languages from "../../assets/fixtures/languages";
import { AppBar, Headline } from "./styled";
import { MobileNavWrapper } from "../../features/Navigation/styled";
import Navigation from "../../features/Navigation";
import MenuIcon from "./MenuIcon";

const Header = ({ langId }) => {
    const [open, setOpen] = useState(false);

    return (
        <header id="start">
            <AppBar>
                <MenuIcon
                    onClick={() => setOpen(true)}
                />
                <MobileNavWrapper
                    visible={open}
                >
                    <MenuIcon
                        onClick={() => setOpen(false)}
                    />
                    <Navigation
                        langId={langId}
                    />
                </MobileNavWrapper>
                <Headline>
                    {languages[langId]?.mainTitle}
                </Headline>
            </AppBar>
        </header>
    )
};

export default Header;