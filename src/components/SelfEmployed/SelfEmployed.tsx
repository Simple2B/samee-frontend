import React, {ReactElement, useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import Popup from 'reactjs-popup';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import Select, {SelectChangeEvent} from '@mui/material/Select';
import './selfEmployed.css';
import {makeStyles} from '@material-ui/styles';
import {Slider} from '@mui/material';
import {ProgressContext} from '../../context/progressContext';
import {useEffect} from 'react';

const useStyles = makeStyles({
  root: {
    color: 'white !important',
    fontSize: '1em !important',
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

export default function SelfEmployed(): ReactElement {
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
    if (period === 'mensuel' && (salary < 100 || salary > 2868)) {
      setError('Choissisez un montant entre CHF 100 to CHF 2868');
    } else if (period === 'annuel' && (salary < 1200 || salary > 34416)) {
      setError("Choissisez un montant entre CHF 1'200  to CHF 34416");
    } else {
      setError('');
      localStorage.setItem('salary', salary);
      localStorage.setItem('period', period);
      history.push('/economies');
    }
  };

  return (
    <div className="self-employed">
      <div className="main_content">
        <div className="self-employed_title">
          Vous ??tes <span className="gold_text">ind??pendant</span>
        </div>
        <div className="self-employed_list_title">
          Gr??ce au troisi??me pilier, vous pouvez donc :
        </div>
        <ul className="self-employed_list">
          <li className="self-employed_list-item">
            cotiser cette ann??e jusqu'??{' '}
            <span className="gold_text">CHF 34'416 (CHF 2'868 par mois)</span>
          </li>
          <li className="self-employed_list-item">
            ??conomiser jusqu'?? <span className="gold_text">CHF 11'964</span> sur
            vos imp??ts (avec un revenu annuel de 150'000.-)
          </li>
        </ul>
        <div className="self-employed_inputs_set">
          <span className="self-employed_text">Choisir le montant </span>
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
              max="2868"
              onChange={handleSalary}
              value={salary}
              type="number"
              className="self-employed_salary"
            />
          ) : (
            <input
              min="1200"
              max="34416"
              onChange={handleSalary}
              value={salary}
              type="number"
              className="self-employed_salary"
            />
          )}
        </div>
        {period === 'mensuel' ? (
          <Slider
            defaultValue={0}
            // color="secondary"
            value={salary}
            onChange={handleSalaryRange}
            className={classes.colorPrimary}
            step={1}
            min={100}
            max={2868}
          />
        ) : (
          <Slider
            defaultValue={0}
            // color="secondary"
            value={salary}
            onChange={handleSalaryRange}
            className={classes.colorPrimary}
            step={1}
            min={1200}
            max={34416}
          />
        )}
      </div>

      <div className="containerButtonPosition">
        <div className="footer_content">
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
                Comment fonctionne l'??conomie d'imp??ts ?
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
                    Comment fonctionne l'??conomie d'imp??ts ?
                  </div>
                  <div className="pop_up_text">
                    Vous pouvez d??duire de votre revenu imposable l???int??gralit??
                    des versements au 3??me pilier. Plus vous cotisez, plus vos
                    ??conomies seront importantes.
                  </div>
                  <div className="pop_up_text">
                    Le montant maximal annuel est actuellement de 6'883 CHF pour
                    un salari?? et de 34'416 CHF ou de maximum 20% de son salaire
                    AVS pour un ind??pendant. De plus, votre ??pargne au 3??me
                    pilier est exon??r??e d'imp??ts jusqu'?? la retraite. Le montant
                    minimum que vous pouvez investir est de 1'200 CHF par an.
                  </div>
                  <div className="pop_up_text">
                    Il est important de savoir que lors du retrait de votre 3??me
                    pilier, vous serez impos??s entre 5% et 10% selon les
                    diff??rents cantons. Toutefois, l?????conomie d???imp??ts annuelle
                    (entre 20% et 40% des montants investis sont r??cup??r??s sous
                    forme de r??duction fiscale) est fortement sup??rieure ??
                    l???imp??t pr??lev?? ?? l?????ch??ance.
                  </div>
                  <div className="pop_up_text">
                    Pour ??viter de subir une imposition trop lourde, vous avez
                    la possibilit?? de diviser votre 3e pilier en plusieurs
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
