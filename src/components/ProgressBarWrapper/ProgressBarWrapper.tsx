import React, {ReactElement, useContext, useEffect, useState} from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import {makeStyles} from '@material-ui/styles';
import {ProgressContext} from '../../context/progressContext';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#29220A !important',
  },
  barColorPrimary: {
    backgroundColor: '#eac28c !important',
  },
});

export default function ProgressBarWrapper(): ReactElement {
  const [currentRoute] = useState<any>(localStorage.getItem('route'));
  const [percent, setPercent] = useState(0);

  const classes = useStyles();

  const {progress} = useContext(ProgressContext);

  useEffect(() => {
    const temp = (progress / 29) * 100;
    setPercent(temp);
  }, [progress]);

  return (
    <LinearProgress
      color="primary"
      className={classes.root}
      classes={{
        barColorPrimary: classes.barColorPrimary,
      }}
      variant="determinate"
      value={percent}
    />
  );
}
