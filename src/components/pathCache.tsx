import React, {ReactElement, useEffect} from 'react';

interface Props {
  path: string;
  children: React.ReactNode;
}

export default function PathCache({path, children}: Props): ReactElement {
  useEffect(() => {
    console.log('path cache');

    if (path !== '/') {
      localStorage.setItem('currentPath', path);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
}
