import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useLocalStorageState } from 'assets/utils/uselocalStorageState';
import Home from 'views/Home';
import SurfaceSpeedForm from 'views/SurfaceSpeed';
import ToolRotationForm from 'views/ToolRotation';
import LinearFeedForm from 'views/LinearFeed';
import TappingFeedForm from 'views/TappingFeed';
import { Navigation, NavigationWrapper } from 'features/navigation/Navigation';
import { ClipboardSwitcher } from 'features/clipboard/Switcher';
import { Language } from 'features/language/types';
import { Sidebar } from 'features/navigation/Sidebar';
import LanguageProvider from 'features/language/provider';
import NavigationProvider from 'features/navigation/provider';
import ClipboardProvider from 'features/clipboard/provider';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Wrapper } from 'components/Warpper';

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
            <Header />

            <Wrapper>
              <NavigationWrapper>
                <Navigation />
                <ClipboardSwitcher />
              </NavigationWrapper>

              <Routes>
                <Route index element={<Home />} />
                <Route path="surface-speed" element={<SurfaceSpeedForm />} />
                <Route path="spindle-speed" element={<ToolRotationForm />} />
                <Route path="feedrate" element={<LinearFeedForm />} />
                <Route path="tapping-feed" element={<TappingFeedForm />} />
              </Routes>
            </Wrapper>

            <Footer />
          </HashRouter>
        </ClipboardProvider>
      </NavigationProvider>
    </LanguageProvider>
  );
};
export default App;
