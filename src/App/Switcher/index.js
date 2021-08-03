import { SwitcherButton, SwitcherWrapper } from "./styled";

  
const Switcher = ({ languages, changeLanguage }) => (
    <SwitcherWrapper>
        {languages.map(language => (
            <SwitcherButton
                key={language.key}
                onClick={() => changeLanguage(language.key)}
            >
                {language.key}
            </SwitcherButton>
        ))}
    </SwitcherWrapper>
);

export default Switcher;