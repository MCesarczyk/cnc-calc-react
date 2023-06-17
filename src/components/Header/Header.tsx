import { useContext } from 'react';
import styled from 'styled-components';

import LanguageContext from 'features/language/context';
import NavigationContext from 'features/navigation/context';
import LanguageSwitcher from 'features/language/Switcher';
import languages from 'assets/fixtures/languages';
import { MenuIcon } from './MenuIcon';
import { Title } from './Title';

export const Header = () => {
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

const AppBar = styled.div`
  color: ${({ theme }) => theme.color.primaryContrast};
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
