import React, {ReactElement, useEffect, useState} from 'react';
import NumberFormat from 'react-number-format';
import {useHistory} from 'react-router-dom';
import {useCountUp} from 'react-countup';
import {makeStyles} from '@material-ui/styles';
import {taxCoefficient} from '../../helpers/consts';
import './resumeSavingSolutionModify.css';
import {FormControl, Select, MenuItem} from '@mui/material';

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

export default function ResumeSavingSolutionModify(): ReactElement {
  const [interest, setInterest] = useState<any>(
    localStorage.getItem('interest'),
  );
  // const [period, setPeriod] = useState<any>(localStorage.getItem('period'));
  const [tax, setTax] = useState<any>();
  const [amount, setAmount] = useState<any>();
  const [finalAmount, setFinalAmount] = useState<any>(
    localStorage.getItem('finalCapital'),
  );
  const [solutions, setSolutions] = useState(
    JSON.stringify(localStorage.getItem('solutionChoice')),
  );

  const [savingYears, setSavingYears] = useState<any>(
    localStorage.getItem('age'),
  );
  const [periodFromLocal, setPeriodFromLocal] = useState<any>(
    localStorage.getItem('period'),
  );
  const [salaryFromLocal, setSalaryFromLocal] = useState<any>(
    localStorage.getItem('salary'),
  );
  const [taxFromLocal, setTaxFromLocal] = useState<any>(
    localStorage.getItem('savingsTax'),
  );

  const [recalculate, setRecalculate] = useState<boolean>(true);
  const [occupation] = useState(localStorage.getItem('occupation'));
  const [errorAmount, setErrorAmount] = useState('');

  const countUpRef = React.useRef(null);
  const {start, update} = useCountUp({
    ref: countUpRef,
    start: 0,
    end: finalAmount,
    duration: 1,
    separator: "'",
    decimal: "'",
    prefix: 'CHF ',
  });

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    savingCalc();
    taxCalc();
    interestCalc();
  }, []);

  useEffect(() => {
    savingCalc();
    taxCalc();
    interestCalc();
  }, [recalculate]);

  useEffect(() => {
    finalCalc();
  }, [interest, amount]);

  useEffect(() => {
    update(finalAmount);
    // start()
  }, [finalAmount]);

  const history = useHistory();

  const classes = useStyles();

  const savingCalc = () => {
    console.log('savingCalc');
    console.log('salaryFromLocal', salaryFromLocal);
    console.log('savingYears', savingYears);

    let amount: any;
    if (periodFromLocal === 'mensuel') {
      amount = savingYears * (salaryFromLocal * 12);
      console.log(amount);
      setAmount(amount);
    } else if (periodFromLocal === 'annuel') {
      console.log(savingYears);

      amount = savingYears * salaryFromLocal;
      console.log(amount);
      setAmount(amount);
    }
    localStorage.setItem('savings', amount);
  };

  const taxCalc = () => {
    console.log('taxCalc');
    const tax = savingYears * taxCoefficient;
    setTax(tax);
  };

  const interestCalc = () => {
    console.log('interestCalc');
    let interest: any;
    if (periodFromLocal === 'annuel') {
      interest = Math.floor(
        salaryFromLocal * (((1 + 0.001) ** savingYears - 1) / (0.001 / 1)) -
          salaryFromLocal * savingYears,
      );

      setInterest(interest);
    } else if (periodFromLocal === 'mensuel') {
      interest = Math.floor(
        salaryFromLocal *
          (((1 + 0.001 / 12) ** (savingYears * 12) - 1) / (0.001 / 12)) -
          salaryFromLocal * 12 * savingYears,
      );

      setInterest(interest);
    }
    localStorage.setItem('interest', interest);
  };

  const finalCalc = () => {
    console.log('finalCalc');
    let finalCalc;
    if (periodFromLocal === 'annuel') {
      finalCalc = Math.floor(
        salaryFromLocal * (((1 + 0.001) ** savingYears - 1) / (0.001 / 1)),
      );

      setFinalAmount(finalCalc);
    } else if (periodFromLocal === 'mensuel') {
      finalCalc = Math.floor(
        salaryFromLocal *
          (((1 + 0.001 / 12) ** (savingYears * 12) - 1) / (0.001 / 12)),
      );

      setFinalAmount(finalCalc);
    }
    localStorage.setItem('finalCapital', String(finalCalc));
  };

  // ----------
  const handleSalary = (e: {target: {value: any}}) => {
    localStorage.setItem('salary', e.target.value);
    setSalaryFromLocal(e.target.value);
  };

  const handlePeriod = (e: {target: {value: any}}) => {
    localStorage.setItem('period', e.target.value);
    setPeriodFromLocal(e.target.value);
    const newSalary =
      e.target.value === 'annuel'
        ? Math.floor(salaryFromLocal * 12)
        : Math.floor(salaryFromLocal / 12);

    setSalaryFromLocal(newSalary);
    localStorage.setItem('salary', newSalary.toString());
  };

  const handleRecalculate = () => {
    if (
      occupation === 'Salari??' &&
      periodFromLocal === 'mensuel' &&
      (salaryFromLocal < 100 || salaryFromLocal > 573)
    ) {
      setErrorAmount('Choissisez un montant entre CHF 100 to CHF 573');
    } else if (
      occupation === 'Salari??' &&
      periodFromLocal === 'annuel' &&
      (salaryFromLocal < 1200 || salaryFromLocal > 6883)
    ) {
      setErrorAmount('Choissisez un montant entre CHF 1200 to CHF 6883');
    } else if (
      occupation === 'Ind??pendant' &&
      periodFromLocal === 'mensuel' &&
      (salaryFromLocal < 100 || salaryFromLocal > 2868)
    ) {
      setErrorAmount('Choissisez un montant entre CHF 100 to CHF 2868');
    } else if (
      occupation === 'Ind??pendant' &&
      periodFromLocal === 'annuel' &&
      (salaryFromLocal < 1200 || salaryFromLocal > 34416)
    ) {
      setErrorAmount('Choissisez un montant entre CHF 1200 to CHF 34416');
    } else {
      setRecalculate(state => !state);
    }
    // localStorage.setItem('savings', amount);
    // localStorage.setItem('savingsTax', tax);
    // localStorage.setItem('interest', interest);
    // localStorage.setItem('finalCapital', finalAmount);
  };

  const handleSubmit = () => {
    localStorage.setItem('salary', salaryFromLocal);
    if (solutions.includes('rendement')) {
      history.push('/resume-mi-garantie-mi-rendement');
    } else {
      history.push('/informations-adresse');
    }
  };
  return (
    <div className="resume_wrapper">
      <div className="main_content">
        <div className="resume_saving_solution_modify">
          <div className="resume_saving_solution_modify_text_block">
            <div className="resume_saving_solution_modify_title">
              R??sum??: solution ??pargne
            </div>

            <div className="resume_saving_solution_modify_text">
              Vous cotiserez pendant{' '}
              <span className="gold_text">{savingYears} ans.</span>
            </div>

            <div className="resume_saving_solution_modify_text">
              Avec un montant{' '}
              <span className="gold_text">{periodFromLocal}</span> de{' '}
              <NumberFormat
                value={salaryFromLocal}
                className="gold_text"
                displayType={'text'}
                thousandSeparator={`'`}
                prefix={'CHF '}
              />
            </div>

            <div className="resume_saving_solution_modify_text">
              Vous auriez donc un capital de{' '}
              <NumberFormat
                value={finalAmount}
                className="gold_text"
                displayType={'text'}
                thousandSeparator={`'`}
                prefix={'CHF '}
              />
            </div>

            <div className="resume_saving_solution_modify_text">
              Avec un gain de{' '}
              <NumberFormat
                value={interest}
                className="gold_text"
                displayType={'text'}
                thousandSeparator={`'`}
                prefix={'CHF '}
              />{' '}
              gr??ce aux int??r??ts
            </div>

            <div className="resume_saving_solution_modify_text margins">
              Vous pouvez essayer avec un autre montant
              <div className="wrapper">
                d'??pargne
                <FormControl variant="standard" sx={{m: 1, minWidth: 80}}>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={periodFromLocal}
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
                {periodFromLocal === 'mensuel' ? (
                  <input
                    min="100"
                    max="573"
                    onChange={handleSalary}
                    value={salaryFromLocal}
                    type="number"
                    className="employee_salary"
                  />
                ) : (
                  <input
                    min="1200"
                    max="6883"
                    onChange={handleSalary}
                    value={salaryFromLocal}
                    type="number"
                    className="employee_salary"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="resume_saving_solution_modify_number_block">
            <div className="resume_saving_solution_modify_final_text">
              Votre capital final
            </div>
            <div className="resume_saving_solution_modify_final_amount">
              <div className="gold_text" ref={countUpRef} />
            </div>
          </div>
        </div>
      </div>

      <div className="footer_content">
        <div className="buttons_set button_position">
          <div className="error">{errorAmount}</div>
          <button onClick={handleSubmit} className="next_button">
            Continuer
          </button>

          <button onClick={handleRecalculate} className="button_modify">
            Recalculer
          </button>
        </div>
        <div className="empty_space"></div>
      </div>
    </div>
  );
}
