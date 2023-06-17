export interface Values {
  [key: string]: number | undefined;
}

export interface ClipboardContextType {
  memoryMode: boolean;
  setMemoryMode: (memoryMode: boolean) => void;
  values: Values;
  setValues: (values: Values) => void;
}
