import { useContext } from 'react';

import LanguageContext from 'features/language/context';
import languages from 'assets/fixtures/languages';
import Navigation from 'features/navigation/Navigation';
import { MobileNavWrapper } from 'features/navigation/Navigation/styled';
import { HomeTitle } from './styled';

const Home = () => {
  const { langId } = useContext(LanguageContext);

  return (
    <>
      <HomeTitle>{languages[langId]?.welcomeTitle}</HomeTitle>
      <MobileNavWrapper>
        <Navigation />
      </MobileNavWrapper>
    </>
  );
};

export default Home;
