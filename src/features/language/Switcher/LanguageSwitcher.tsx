import styled from 'styled-components';

import languages from 'features/language/languages';
import { SwitcherButton } from './SwitcherButton';
import { Language } from '../types';

export const LanguageSwitcher = () => (
  <SwitcherWrapper>
    {Object.values(languages).map((language) => (
      <SwitcherButton key={language.key} language={language as { key: Language; flag: string }} />
    ))}
  </SwitcherWrapper>
);

export const SwitcherWrapper = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    flex-direction: column;
  }
`;
