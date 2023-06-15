import { useContext } from "react";
import ClipboardContext from "../context";
import { Switcher, SwitcherIndicator, SwitcherLabel, SwitcherWrapper } from "./styled";

const ClipboardSwitcher = () => {
  const { memoryMode, setMemoryMode } = useContext(ClipboardContext);

  return (
    <SwitcherWrapper>
      <SwitcherLabel htmlFor="clipboard-switcher" >
        {/* {languages[langId].clibboardSwitcherLabel} */}
        "ClipboardSwitcher"
      </SwitcherLabel>
      <Switcher
        id="clipboard-switcher"
        onClick={() => setMemoryMode(!memoryMode)}
      >
        <SwitcherIndicator $memorymode={memoryMode} />
      </Switcher>
    </SwitcherWrapper>
  )
};

export default ClipboardSwitcher;