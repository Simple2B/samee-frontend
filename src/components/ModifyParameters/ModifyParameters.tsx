import {FormControl, Select, MenuItem} from '@mui/material';
import {makeStyles} from '@material-ui/styles';
import {CircleSlider} from 'react-circle-slider';
import React, {ReactElement, useState} from 'react';
import {useHistory} from 'react-router-dom';
import './modifyParameters.css';
import {useEffect} from 'react';

const useStyles = makeStyles({
  root: {
    color: 'white !important',
    fontSize: '24px !important',
    fontFamily: '"Archivo Narrow" !important',
    borderBottom: '1px solid white !important',
  },
  select: {
    borderColor: 'white !important',
  },
  nativeInput: {
    color: '#fff !important',
  },
  icon: {
    color: 'white !important',
  },
  colorPrimary: {
    color: '#eac28c !important',
  },
});

export default function ModifyParameters(): ReactElement {
  const [period, setPeriod] = useState<any>(localStorage.getItem('period'));
  const [salaryFromLocal, setSalaryFromLocal] = useState<any>(
    localStorage.getItem('salary'),
  );
  const [sliderValue, setSliderValue] = useState(10);
  const [error, setError] = useState('');
  const [occupation] = useState(localStorage.getItem('occupation'));
  const [errorAmount, setErrorAmount] = useState('');

  const history = useHistory();

  const classes = useStyles();

  useEffect(() => {
    if (100 - sliderValue >= 60) {
      setError(
        'Attention, Vous avez un pourcentage en fonds risqué. La partie en fond peut être perdue.',
      );
    } else {
      setError('');
    }
  }, [sliderValue]);

  const handleSalary = (e: {target: {value: any}}) => {
    setSalaryFromLocal(e.target.value);
  };

  const handlePeriod = (e: {target: {value: any}}) => {
    setPeriod(e.target.value);
    if (period === 'annuel') {
      setSalaryFromLocal(salaryFromLocal / 12);
      localStorage.setItem('salary', salaryFromLocal);
    }

    if (period === 'mensuel') {
      setSalaryFromLocal(salaryFromLocal * 12);
      localStorage.setItem('salary', salaryFromLocal);
    }
  };

  const handleSliderChange = (e: number) => {
    console.log(e);
    setSliderValue(e);
  };

  const handleRecalculate = () => {
    if (
      occupation === 'Salarié' &&
      period === 'mensuel' &&
      (salaryFromLocal < 100 || salaryFromLocal > 573)
    ) {
      setErrorAmount('Choissisez un montant entre CHF 100 to CHF 573');
    } else if (
      occupation === 'Salarié' &&
      period === 'annuel' &&
      (salaryFromLocal < 1200 || salaryFromLocal > 6883)
    ) {
      setErrorAmount('Choissisez un montant entre CHF 1200 to CHF 6883');
    } else if (
      occupation === 'Indépendant' &&
      period === 'mensuel' &&
      (salaryFromLocal < 100 || salaryFromLocal > 2868)
    ) {
      setErrorAmount('Choissisez un montant entre CHF 100 to CHF 2868');
    } else if (
      occupation === 'Indépendant' &&
      period === 'annuel' &&
      (salaryFromLocal < 1200 || salaryFromLocal > 34416)
    ) {
      setErrorAmount('Choissisez un montant entre CHF 1200 to CHF 34416');
    } else {
      localStorage.setItem('savingsPercent', JSON.stringify(sliderValue));
      localStorage.setItem('fondsPercent', JSON.stringify(100 - sliderValue));
      localStorage.setItem('salary', salaryFromLocal);
      localStorage.setItem('period', period);
      history.push('./scenario-calculation');
    }
  };

  return (
    <div className="modify_parameters">
      <div className="main_content">
        <div className="modify_parameters_text">
          Vous pouvez essayer avec un autre montant d'épargne
          <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={period}
              onChange={handlePeriod}
              label="salary"
              className={classes.root}
              classes={{
                nativeInput: classes.nativeInput,
              }}
              inputProps={{
                classes: {
                  icon: classes.icon,
                },
              }}>
              <MenuItem value="mensuel">mensuel</MenuItem>
              <MenuItem value="annuel">annuel</MenuItem>
            </Select>
          </FormControl>
          {period === 'mensuel' ? (
            <input
              min="100"
              onChange={handleSalary}
              value={salaryFromLocal}
              type="number"
              className="employee_salary"
            />
          ) : (
            <input
              min="1200"
              onChange={handleSalary}
              value={salaryFromLocal}
              type="number"
              className="employee_salary"
            />
          )}
        </div>

        <div className="modify_parameters_text">
          et avec une répartition différente
        </div>

        <div className="half-optimal-proportion_percents">
          <div className="proportion_percent">
            <div className="percent gold_text">{`${sliderValue}%`}</div>
            <div className="percent-desc">Epargne</div>
          </div>

          <div className="circle_button">
            <CircleSlider
              size={260}
              min={10}
              max={90}
              progressWidth={10}
              circleWidth={10}
              progressColor={'white'}
              stepSize={10}
              value={sliderValue}
              onChange={handleSliderChange}
            />

            <div className="circle"></div>
          </div>

          <div className="proportion_percent">
            <div className="percent gold_text">{`${100 - sliderValue}%`}</div>
            <div className="percent-desc">Fonds</div>
          </div>
        </div>

        {error && (
          <div className="error_block_position">
            <img src="/image/error.png" className="error_img" alt="error" />
            {error}{' '}
          </div>
        )}
      </div>

      <div className="footer_content">
        <div className="buttons_set button_position">
          <div className="error">{errorAmount}</div>
          <button onClick={handleRecalculate} className="next_button ">
            Recalculer
          </button>
        </div>
      </div>
    </div>
  );
}
