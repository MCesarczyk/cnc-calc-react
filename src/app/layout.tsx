'use client';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'GlobalStyle';

import { theme } from 'theme';
import { Language } from 'features/language/types';
import { ClipboardSwitcher } from 'features/clipboard/Switcher';
import ClipboardProvider from 'features/clipboard/provider';
import LanguageProvider from 'features/language/provider';
import { Navigation, NavigationWrapper } from 'features/navigation/Navigation';
import { Sidebar } from 'features/navigation/Sidebar';
import NavigationProvider from 'features/navigation/provider';
import { useLocalStorageState } from 'assets/utils/uselocalStorageState';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Wrapper } from 'components/Wrapper';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [langId, setLangId] = useLocalStorageState<Language>('langId', 'EN');
  const [memoryMode, setMemoryMode] = useLocalStorageState('memoryMode', false);
  const [values, setValues] = useState({});
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <LanguageProvider value={{ langId, setLangId }}>
          <NavigationProvider value={{ open, setOpen }}>
            <ClipboardProvider value={{ values, setValues, memoryMode, setMemoryMode }}>
              <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Sidebar />
                <Header />
                <Wrapper>
                  <NavigationWrapper>
                    <Navigation />
                    <ClipboardSwitcher />
                  </NavigationWrapper>
                  {children}
                </Wrapper>
                <Footer />
              </ThemeProvider>
            </ClipboardProvider>
          </NavigationProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
