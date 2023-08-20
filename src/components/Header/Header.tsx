import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import LanguageContext from 'features/language/context';
import NavigationContext from 'features/navigation/context';
import LanguageSwitcher from 'features/language/Switcher';
import languages from 'assets/fixtures/languages';
import { IconButton } from 'ui/atoms/iconButton';
import { Title } from 'ui/atoms/title';
import { ReactComponent as MenuThumbnail } from 'assets/images/hamburger-menu.svg';

export const Header = () => {
  const { pathname } = useLocation();

  const { langId } = useContext(LanguageContext);
  const { open, setOpen } = useContext(NavigationContext);

  return (
    <header id="start">
      <AppBar>
        <IconButton disabled={pathname === '/'} onClick={() => setOpen(!open)}>
          <MenuThumbnail />
        </IconButton>
        <Title url="/" title={languages[langId]?.mainTitle} />
        <LanguageSwitcher />
      </AppBar>
    </header>
  );
};

const AppBar = styled.div`
  color: ${({ theme }) => theme.color.contrastText};
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 1.5rem;
  padding: 0.5rem 1.5rem;
  margin: 0 auto 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    border-radius: 0;
    margin: 0 0 10px 0;
    padding: 0.5rem;
  }
`;
