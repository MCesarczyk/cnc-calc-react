import { SwitcherWrapper } from "./styled";
import languages from "../../../assets/fixtures/languages";
import Button from "./Button";

const LanguageSwitcher = () => (
    <SwitcherWrapper>
        {languages.map(language => (
            <Button
                key={language.key}
                language={language}
            />
        ))}
    </SwitcherWrapper>
);

export default LanguageSwitcher;