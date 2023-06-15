import { MutableRefObject } from "react";
import { checkIfItsTouchDevice } from "./checkDeviceType";

const isTouchDevice = checkIfItsTouchDevice();

export const focusForm = (inputRef: MutableRefObject<HTMLInputElement | null>) => {
  !isTouchDevice && inputRef.current?.focus();
};