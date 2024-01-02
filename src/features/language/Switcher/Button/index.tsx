import { useContext } from 'react';

import LanguageContext from 'features/language/context';
import { Language } from 'features/language/types';
import { changeLanguage, isButtonActive } from '../functions';
import { SwitcherButton } from './styled';

interface ButtonProps {
  language: {
    key: Language;
    flag: string;
  };
}

const Button = ({ language }: ButtonProps) => {
  const { langId, setLangId } = useContext(LanguageContext);

  const onLanguageChange = (key: Language) => setLangId(changeLanguage(key) as Language);

  return (
    <SwitcherButton
      onClick={() => onLanguageChange(language.key)}
      style={{ backgroundImage: `url(/src/${language.flag})` }}
      $active={isButtonActive(language.key, langId) ? 'active' : undefined}
    >
      {language.key}
    </SwitcherButton>
  );
};

export default Button;
