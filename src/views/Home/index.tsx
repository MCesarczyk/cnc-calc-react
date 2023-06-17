import { useContext } from 'react';
import styled from 'styled-components';

import LanguageContext from 'features/language/context';
import languages from 'assets/fixtures/languages';
import { MobileNavWrapper, Navigation } from 'features/navigation/Navigation';

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

export const HomeTitle = styled.h2`
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;

export default Home;
