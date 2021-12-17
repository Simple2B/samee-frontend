import React, {useState} from 'react';
import {ProgressContext} from './progressContext';

type Props = {
  children: React.ReactNode;
};

export const ProgressContextProvider = ({children}: Props) => {
  const [progress, setProgress] = useState(0);

  return (
    <ProgressContext.Provider value={{progress, setProgress}}>
      {children}
    </ProgressContext.Provider>
  );
};
