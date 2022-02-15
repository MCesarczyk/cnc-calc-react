import { SwitcherButton, SwitcherWrapper } from "./styled";
import flagPL from "../../../assets/images/flagPL.png";
import flagEN from "../../../assets/images/flagUS.png";
import languages from "../../../assets/fixtures/languages";

const Switcher = ({ setLangId }) => {
    const changeLanguage = (key) => {
        setLangId(languages.findIndex(language => language.key === key));
    };

    return (
        <SwitcherWrapper>
            {languages.map(language => (
                <SwitcherButton
                    key={language.key}
                    onClick={() => changeLanguage(language.key)}
                    style={{
                        backgroundImage: `url(${language.key === 'EN' ? flagEN : flagPL})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover'
                    }}
                >
                    {language.key}
                </SwitcherButton>
            ))}
        </SwitcherWrapper>
    )
};

export default Switcher;