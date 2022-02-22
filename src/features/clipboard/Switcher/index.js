import { useContext } from "react";
import ClipboardContext from "../context";
import { Switcher, SwitcherIndicator, SwitcherLabel, SwitcherWrapper } from "./styled";

const ClipboardSwitcher = () => {
  const { values, setValues } = useContext(ClipboardContext);

  const switchMemoryMode = () => {
    setValues({
      ...values,
      memoryMode: !values?.memoryMode
    });
  };

  return (
    <SwitcherWrapper>
      <SwitcherLabel>
        Memory mode
      </SwitcherLabel>
      <Switcher
        memoryMode={values?.memoryMode}
        onClick={switchMemoryMode}
      >
        <SwitcherIndicator memoryMode={values?.memoryMode} />
      </Switcher>
    </SwitcherWrapper>
  )
};

export default ClipboardSwitcher;