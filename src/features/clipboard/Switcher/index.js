import { useContext } from "react";
import ClipboardContext from "../context";
import { Switcher, SwitcherIndicator, SwitcherLabel, SwitcherWrapper } from "./styled";

const ClipboardSwitcher = () => {
  const { memoryMode, setMemoryMode } = useContext(ClipboardContext);

  const switchMemoryMode = () => {
    setMemoryMode(!memoryMode);
  };

  return (
    <SwitcherWrapper>
      <SwitcherLabel>
        Memory mode
      </SwitcherLabel>
      <Switcher
        memoryMode={memoryMode}
        onClick={switchMemoryMode}
      >
        <SwitcherIndicator memoryMode={memoryMode} />
      </Switcher>
    </SwitcherWrapper>
  )
};

export default ClipboardSwitcher;