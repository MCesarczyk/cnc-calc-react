import { useContext } from 'react';

import languages from 'assets/fixtures/languages';
import LanguageContext from 'features/language/context';
import ClipboardContext from '../context';
import { Switcher, SwitcherIndicator, SwitcherLabel, SwitcherWrapper } from './styled';

const ClipboardSwitcher = () => {
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

export default ClipboardSwitcher;
