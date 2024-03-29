import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { styled } from 'styled-components';

import { AUTHOR_PAGE_ADDRESS, AUTHOR_PAGE_LABEL, DATE } from 'assets/fixtures/author';
import { Navigation, NavigationWrapper } from 'features/navigation/Navigation';
import { ClipboardSwitcher } from 'features/clipboard/Switcher';
import { Language } from 'features/language/types';
import { Sidebar } from 'features/navigation/Sidebar';
import LanguageProvider from 'features/language/provider';
import NavigationProvider from 'features/navigation/provider';
import ClipboardProvider from 'features/clipboard/provider';
import { useLocalStorageState } from 'utils/uselocalStorageState';
import Home from 'views/Home';
import SurfaceSpeedForm from 'views/SurfaceSpeed';
import ToolRotationForm from 'views/ToolRotation';
import LinearFeedForm from 'views/LinearFeed';
import TappingFeedForm from 'views/TappingFeed';
import { Footer } from 'ui/organisms/footer';
import { Header } from 'ui/organisms/header';

const App = () => {
  const [langId, setLangId] = useLocalStorageState<Language>('langId', 'EN');
  const [memoryMode, setMemoryMode] = useLocalStorageState('memoryMode', false);
  const [values, setValues] = useState({});
  const [open, setOpen] = useState(false);

  return (
    <LanguageProvider value={{ langId, setLangId }}>
      <NavigationProvider value={{ open, setOpen }}>
        <ClipboardProvider value={{ values, setValues, memoryMode, setMemoryMode }}>
          <HashRouter>
            <Sidebar />
            <Header homeUrl='/' />

            <Wrapper>
              <NavigationWrapper>
                <Navigation variant='DEFAULT' />
                <ClipboardSwitcher variant='DEFAULT' />
              </NavigationWrapper>

              <Routes>
                <Route index element={<Home />} />
                <Route path="surface-speed" element={<SurfaceSpeedForm />} />
                <Route path="spindle-speed" element={<ToolRotationForm />} />
                <Route path="feedrate" element={<LinearFeedForm />} />
                <Route path="tapping-feed" element={<TappingFeedForm />} />
              </Routes>
            </Wrapper>

            <Footer date={DATE} url={AUTHOR_PAGE_ADDRESS} label={AUTHOR_PAGE_LABEL} />
          </HashRouter>
        </ClipboardProvider>
      </NavigationProvider>
    </LanguageProvider>
  );
};
export default App;

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  width: 100%;
  min-height: 16rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    grid-template-columns: 1fr;
  }
`;
