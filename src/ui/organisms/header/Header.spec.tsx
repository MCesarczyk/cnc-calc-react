// import { render, screen } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';

// import { theme } from 'theme';
// import LanguageContext, { LanguageContextType } from 'features/language/context';
// import NavigationContext, { NavigationContextType } from 'features/navigation/context';
// import { Header } from './Header';
// import { Language } from 'features/language/types';

// const setup = (langId: Language, open: boolean) =>
//   render(
//     <ThemeProvider theme={theme}>
//       <LanguageContext.Provider value={{ langId } as LanguageContextType}>
//         <NavigationContext.Provider value={{ open } as NavigationContextType}>
//           <BrowserRouter>
//             <Header homeUrl="/" />
//           </BrowserRouter>
//         </NavigationContext.Provider>
//       </LanguageContext.Provider>
//     </ThemeProvider>,
//   );

test.todo('Temporarily disabled Header tests');

// test('Title leads to root location', () => {
//   const langId = 'EN';
//   const open = false;

//   setup(langId, open);

//   const title = screen.getByRole('link');
//   expect(title).toHaveAttribute('href', '/');
// });
