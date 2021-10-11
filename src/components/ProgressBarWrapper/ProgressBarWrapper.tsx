import React, {ReactElement, useEffect, useState} from 'react';
import LinearProgress from '@mui/material/LinearProgress';

export default function ProgressBarWrapper({}: {}): ReactElement {
  const [progress, setProgress] = useState<any>();
  const [currentRoute] = useState<any>(localStorage.getItem('route'));

  useEffect(() => {
    const progress = (currentRoute / 40) * 100;
    setProgress(progress);
  }, [currentRoute]);

  return <LinearProgress variant="determinate" value={progress} />;
}
