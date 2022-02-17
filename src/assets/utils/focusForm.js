import { checkIfItsTouchDevice } from "./checkDeviceType";

const isTouchDevice = checkIfItsTouchDevice();

export const focusForm = inputRef => {
  !isTouchDevice && inputRef.current?.focus();
};