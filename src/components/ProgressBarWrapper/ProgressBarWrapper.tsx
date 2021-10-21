import React, {ReactElement, useContext, useEffect, useState} from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import {makeStyles} from '@material-ui/styles';
import {ProgressContext} from '../../context/progressContext';
import {Stepper, Step, StepLabel, StepButton} from '@mui/material';
import {Link, useHistory, useLocation} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#29220A !important',
  },
  barColorPrimary: {
    backgroundColor: '#eac28c !important',
  },
});

const useStylesStepper = makeStyles({
  label: {
    color: 'white !important',
  },
  active: {
    color: '#eac28c !important',
  },
  completed: {
    color: '#eac28c !important',
  },
});

const stepsNames = [
  {stepTitle: 'Âge', location: '/user-data-birth'},
  {stepTitle: 'Avantages', location: '/advantages'},
  {stepTitle: 'Emploi', location: '/occupation'},
  {stepTitle: 'Choix des solutions', location: '/choose-solution'},
  {stepTitle: 'Résumé', location: '/resume'},
  {stepTitle: 'Informations personnelles', location: '/user-address-info'},
];

export default function ProgressBarWrapper(): ReactElement {
  const [hovered, setHovered] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const currentLocation = location.pathname;
    const activePathIndex = stepsNames.findIndex(
      step => step.location === currentLocation,
    );
    if (activePathIndex >= 0) {
      setActiveStep(activePathIndex);
    }
  }, [location]);

  const toggleHover = () => {
    setHovered(!hovered);
  };

  const classes = useStyles();

  const classesStepper = useStylesStepper();

  const {progress, setProgress} = useContext(ProgressContext);

  const handleStep = (step: string) => {
    history.push(step);
  };

  const percent = Math.ceil((progress / 30) * 100);

  return (
    <div
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      className="progress_change">
      <LinearProgress
        color="primary"
        className={classes.root}
        classes={{
          barColorPrimary: classes.barColorPrimary,
        }}
        variant="determinate"
        value={percent}
      />
      {hovered ? (
        <div className="stepper">
          <Stepper activeStep={activeStep} alternativeLabel>
            {stepsNames.map((label, idx) => (
              <Step
                classes={{
                  completed: classesStepper.completed,
                }}
                key={label.stepTitle}>
                {idx <= activeStep && (
                  <StepButton
                    onClick={() => {
                      handleStep(label.location);
                    }}>
                    {label.stepTitle}
                  </StepButton>
                )}
              </Step>
            ))}
          </Stepper>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
