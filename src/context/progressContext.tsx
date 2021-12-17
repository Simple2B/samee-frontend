import React, {createContext} from 'react';

interface IProgressContextType {
  progress: number;
  setProgress: (value: number) => void;
}

export const ProgressContext = createContext<IProgressContextType>({
  progress: 0,
  setProgress: () => {},
});
