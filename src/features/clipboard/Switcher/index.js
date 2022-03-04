import { useContext } from "react";
import languages from "../../../assets/fixtures/languages";
import LanguageContext from "../../language/context";
import ClipboardContext from "../context";
import { Switcher, SwitcherIndicator, SwitcherLabel, SwitcherWrapper } from "./styled";

const ClipboardSwitcher = () => {
  const { memoryMode, setMemoryMode } = useContext(ClipboardContext);
  const { langId } = useContext(LanguageContext);

  const switchMemoryMode = () => {
    setMemoryMode(!memoryMode);
  };

  return (
    <SwitcherWrapper>
      <SwitcherLabel htmlFor="clipboard-switcher" >
        {languages[langId].clibboardSwitcherLabel}
      </SwitcherLabel>
      <Switcher
        id="clipboard-switcher"
        memoryMode={memoryMode}
        onClick={switchMemoryMode}
      >
        <SwitcherIndicator memoryMode={memoryMode} />
      </Switcher>
    </SwitcherWrapper>
  )
};

export default ClipboardSwitcher;