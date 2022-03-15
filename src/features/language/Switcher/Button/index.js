import { useContext } from "react";
import LanguageContext from "../../context";
import { changeLanguage, isButtonActive } from "../functions";
import { SwitcherButton } from "./styled";

const Button = ({ language }) => {
  const { langId, setLangId } = useContext(LanguageContext);

  const onLanguageChange = (key) => setLangId(changeLanguage(key));

  return (
    <SwitcherButton
      onClick={() => onLanguageChange(language.key)}
      style={{ backgroundImage: `url(${language.flag})` }}
      active={isButtonActive(language.key, langId)}
    >
      {language.key}
    </SwitcherButton>
  )
};

export default Button;