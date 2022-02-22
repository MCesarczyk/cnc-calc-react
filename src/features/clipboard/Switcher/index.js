import { useContext } from "react";
import { SwitcherWrapper } from "../../language/Switcher/styled";
import ClipboardContext from "../context";
import { Switcher, SwitcherIndicator, SwitcherLabel } from "./styled";

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
        {values?.memoryMode === true ? "ON" : "OFF"}
      </Switcher>
    </SwitcherWrapper>
  )
};

export default ClipboardSwitcher;