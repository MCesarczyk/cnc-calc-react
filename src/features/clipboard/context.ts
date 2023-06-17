import { createContext } from 'react';
import { ClipboardContextType } from './types';

const initialValues = {
  rotationSpeed: undefined,
  feedType: undefined,
  toothNumber: undefined,
  feedPerRevolution: undefined,
  feedPerTooth: undefined,
  diameter: undefined,
  tapDiameter: undefined,
  pitch: undefined,
  cutSpeed: undefined,
  feedrate: undefined,
  teethNumber: undefined,
};

const ClipboardContext = createContext<ClipboardContextType>({
  memoryMode: false,
  setMemoryMode: () => {},
  values: initialValues,
  setValues: () => initialValues,
});

export default ClipboardContext;
