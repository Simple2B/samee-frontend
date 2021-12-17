import React, {ReactElement, useContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import Popup from 'reactjs-popup';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import './employee.css';
import {makeStyles} from '@material-ui/styles';
import {Slider} from '@mui/material';
import {ProgressContext} from '../../context/progressContext';

const useStyles = makeStyles({
  root: {
    color: 'white !important',
    fontSize: '1em !important',
    fontFamily: '"Archivo Narrow" !important',
    borderBottom: '1px solid white !important',
    minWidth: '80px',
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

export default function Employee(): ReactElement {
  const [salary, setSalary] = useState<any>(0);
  const [period, setPeriod] = useState<any>('mensuel');
  const [error, setError] = useState('');

  const {setProgress} = useContext(ProgressContext);

  const history = useHistory();

  const classes = useStyles();

  useEffect(() => {
    setProgress(11);
  }, []);

  const handleSalary = (e: {target: {value: any}}) => {
    setSalary(e.target.value);
  };

  const handlePeriod = (e: {target: {value: any}}) => {
    setPeriod(e.target.value);
    const newSalary =
      e.target.value === 'annuel'
        ? Math.floor(salary * 12)
        : Math.floor(salary / 12);

    setSalary(newSalary);
  };

  const handleSalaryRange = (
    event: Event,
    value: number | number[],
    activeThumb: number,
  ) => {
    setSalary(value);
  };

  const handleSubmit = () => {
    if (period === 'mensuel' && (salary < 100 || salary > 573)) {
      setError('Choissisez un montant entre CHF 100 to CHF 573');
    } else if (period === 'annuel' && (salary < 1200 || salary > 6883)) {
      setError("Choissisez un montant entre CHF 1'200 to CHF 6883");
    } else {
      setError('');
      localStorage.setItem('salary', salary);
      localStorage.setItem('period', period);
      history.push('/economies');
    }
  };

  return (
    <div className="employee">
      <div className="main_content">
        <div className="employee_title">
          Vous êtes <span className="gold_text">salarié</span>
        </div>
        <div className="employee_list_title">
          Grâce au troisième pilier, vous pouvez donc :
        </div>
        <ul className="employee_list">
          <li className="employee_list-item">
            cotiser cette année jusqu'à{' '}
            <span className="gold_text">CHF 6'883 (CHF 573 par mois)</span>
          </li>
          <li className="employee_list-item">
            économiser jusqu'à <span className="gold_text">CHF 2'500</span> sur
            vos impôts (avec un revenu annuel de 84'000.-)
          </li>
        </ul>
        <div className="employee_inputs_set">
          <span className="employee_text">Choisir le montant </span>
          <FormControl variant="standard" sx={{m: 1, minWidth: 80}}>
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
              max="573"
              onChange={handleSalary}
              value={salary}
              type="number"
              className="employee_salary"
            />
          ) : (
            <input
              min="1200"
              max="6883"
              onChange={handleSalary}
              value={salary}
              type="number"
              className="employee_salary"
            />
          )}
        </div>
        {period === 'mensuel' ? (
          <Slider
            defaultValue={0}
            color="secondary"
            value={salary}
            onChange={handleSalaryRange}
            className={classes.colorPrimary}
            step={1}
            min={100}
            max={573}
          />
        ) : (
          <Slider
            defaultValue={0}
            color="secondary"
            value={salary}
            onChange={handleSalaryRange}
            className={classes.colorPrimary}
            step={1}
            min={1200}
            max={6883}
          />
        )}
      </div>

      <div className="containerButtonPosition">
        <div className="footer_content">
          <div className="error"> {error}</div>

          <button
            disabled={salary === '' || period === '' || salary === 0}
            onClick={handleSubmit}
            className="next_button button_position">
            Continuer
          </button>

          <Popup
            modal
            trigger={
              <div className="pop_up_triger">
                Comment fonctionne l'économie d'impôts ?
              </div>
            }>
            {(
              close:
                | ((
                    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
                  ) => void)
                | undefined,
            ) => (
              <>
                <button className="close" onClick={close}></button>
                <div className="pop_up">
                  <div className="pop_up_title">
                    Comment fonctionne l'économie d'impôts ?
                  </div>
                  <div className="pop_up_text">
                    Vous pouvez déduire de votre revenu imposable l’intégralité
                    des versements au 3ème pilier. Plus vous cotisez, plus vos
                    économies seront importantes.
                  </div>
                  <div className="pop_up_text">
                    Le montant maximal annuel est actuellement de 6'883 CHF pour
                    un salarié et de 34'416 CHF ou de maximum 20% de son salaire
                    AVS pour un indépendant. De plus, votre épargne au 3ème
                    pilier est exonérée d'impôts jusqu'à la retraite. Le montant
                    minimum que vous pouvez investir est de 1'200 CHF par an.
                  </div>
                  <div className="pop_up_text">
                    Il est important de savoir que lors du retrait de votre 3ème
                    pilier, vous serez imposés entre 5% et 10% selon les
                    différents cantons. Toutefois, l’économie d’impôts annuelle
                    (entre 20% et 40% des montants investis sont récupérés sous
                    forme de réduction fiscale) est fortement supérieure à
                    l’impôt prélevé à l’échéance.
                  </div>
                  <div className="pop_up_text">
                    Pour éviter de subir une imposition trop lourde, vous avez
                    la possibilité de diviser votre 3e pilier en plusieurs
                    comptes afin de les retirer progressivement entre 60 et 65
                    ans.
                  </div>
                </div>
              </>
            )}
          </Popup>
        </div>
      </div>
    </div>
  );
}
