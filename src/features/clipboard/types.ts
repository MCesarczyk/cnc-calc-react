export interface Values {
  [key: string]: string;
}

export interface ClipboardContextType {
  memoryMode: boolean;
  setMemoryMode: (memoryMode: boolean) => void;
  values: Values;
  setValues: (values: Values) => void;
}
