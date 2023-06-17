import { useContext } from 'react';

import LanguageContext from 'features/language/context';
import NavigationContext from 'features/navigation/context';
import LanguageSwitcher from 'features/language/Switcher';
import languages from 'assets/fixtures/languages';
import MenuIcon from './MenuIcon';
import { AppBar } from './styled';
import Title from './Title';

const Header = () => {
  const { langId } = useContext(LanguageContext);
  const { open, setOpen } = useContext(NavigationContext);

  return (
    <header id="start">
      <AppBar>
        <MenuIcon onClick={() => setOpen(!open)} />
        <Title title={languages[langId]?.mainTitle} />
        <LanguageSwitcher />
      </AppBar>
    </header>
  );
};

export default Header;
