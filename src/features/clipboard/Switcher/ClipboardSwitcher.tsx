import { useContext } from 'react';
import styled, { css } from 'styled-components';

import languages from 'assets/fixtures/languages';
import LanguageContext from 'features/language/context';
import ClipboardContext from '../context';

export const ClipboardSwitcher = () => {
  const { memoryMode, setMemoryMode } = useContext(ClipboardContext);

  const { langId } = useContext(LanguageContext);

  return (
    <SwitcherWrapper>
      <SwitcherLabel htmlFor="clipboard-switcher">{languages[langId].clibboardSwitcherLabel}</SwitcherLabel>
      <Switcher id="clipboard-switcher" onClick={() => setMemoryMode(!memoryMode)}>
        <SwitcherIndicator $memorymode={memoryMode} />
      </Switcher>
    </SwitcherWrapper>
  );
};

const SwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
`;

const SwitcherLabel = styled.label`
  font-variant: small-caps;
  font-weight: 700;
  margin-right: 1rem;
  cursor: pointer;
`;

const Switcher = styled.button`
  width: 3rem;
  height: 2rem;
  background-color: #d9d9d9;
  border: 2px solid #525252;
  border-radius: 1rem;
`;

const SwitcherIndicator = styled.div<{ $memorymode?: boolean }>`
  width: 2rem;
  height: 2rem;
  border: 2px solid #525252;
  border-radius: 1rem;
  background-color: #d9d9d9;
  position: relative;
  left: -0.5rem;
  top: -3px;
  transition: all 0.3s ease-in-out;

  ${({ $memorymode }) =>
    $memorymode &&
    css`
      transform: translateX(1.2rem);
      background-color: #1e3246;
    `}
`;
