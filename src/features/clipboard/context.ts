import { createContext } from 'react';
import { ClipboardContextType } from './types';

const initialValues = {
  rotationSpeed: '',
  feedType: '',
  toothNumber: '',
  feedPerRevolution: '',
  feedPerTooth: '',
  diameter: '',
  tapDiameter: '',
  pitch: '',
  cutSpeed: '',
  feedrate: '',
  teethNumber: '',
};

const ClipboardContext = createContext<ClipboardContextType>({
  memoryMode: false,
  setMemoryMode: () => {},
  values: initialValues,
  setValues: () => initialValues,
});

export default ClipboardContext;
