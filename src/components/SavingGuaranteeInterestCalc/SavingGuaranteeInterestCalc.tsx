import React, {ReactElement, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {taxCoefficient} from '../../helpers/consts';
import {makeStyles} from '@material-ui/styles';
import {useCountUp} from 'react-countup';
import NumberFormat from 'react-number-format';
import {FormControl, Select, MenuItem} from '@mui/material';
import Popup from 'reactjs-popup';
import './savingGuaranteeInterestCalc.css';

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

// const solutions: any = JSON.stringify(localStorage.getItem('solutionChoice'));

export default function SavingGuaranteeInterestCalc(): ReactElement {
  const [interest, setInterest] = useState<any>(0);
  const [period, setPeriod] = useState<any>('mensuel');
  const [tax, setTax] = useState<any>();
  const [amount, setAmount] = useState<any>();
  const [finalAmount, setFinalAmount] = useState<any>();

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
  const [error, setError] = useState('');

  const [solutions, setSolutions] = useState(
    JSON.stringify(localStorage.getItem('solutionChoice')),
  );

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
      localStorage.setItem('interest', interest);
    }
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
  };

  // ----------
  const handleSalary = (e: {target: {value: any}}) => {
    localStorage.setItem('salary', e.target.value);
    setSalaryFromLocal(e.target.value);
  };

  const handlePeriod = (e: {target: {value: any}}) => {
    localStorage.setItem('period', e.target.value);
    setPeriod(e.target.value);
  };

  const handleRecalculate = () => {
    if (
      occupation === 'Salarié' &&
      period === 'mensuel' &&
      (salaryFromLocal < 100 || salaryFromLocal > 573)
    ) {
      setError('Choissisez un montant entre CHF 100 to CHF 573');
    } else if (
      occupation === 'Salarié' &&
      period === 'annuel' &&
      (salaryFromLocal < 1200 || salaryFromLocal > 6883)
    ) {
      setError('Choissisez un montant entre CHF 1200 to CHF 6883');
    } else if (
      occupation === 'Indépendant' &&
      period === 'mensuel' &&
      (salaryFromLocal < 100 || salaryFromLocal > 2868)
    ) {
      setError('Choissisez un montant entre CHF 100 to CHF 2868');
    } else if (
      occupation === 'Indépendant' &&
      period === 'annuel' &&
      (salaryFromLocal < 1200 || salaryFromLocal > 34416)
    ) {
      setError('Choissisez un montant entre CHF 1200 to CHF 34416');
    } else {
      setError('');
      localStorage.setItem('savings', amount);
      localStorage.setItem('savingsTax', tax);
      localStorage.setItem('interest', interest);
      setRecalculate(state => !state);
    }
  };

  const handleSubmit = () => {
    localStorage.setItem('finalCapital', finalAmount);
    if (solutions.includes('rendement')) {
      history.push('/half-guarantee-interest');
    } else {
      history.push('/resume');
    }
  };

  return (
    <div className="interest_wrapper">
      <div className="main_content">
        <div className="saving_interest_calc">
          <div className="saving_interest_calc-text-block">
            <div className="saving_interest_calc_title">
              Dans <span className="gold_text">{savingYears} ans</span>, vous
              aurez:
            </div>

            <ul className="saving_interest_calc_list">
              <li className="saving_interest_calc_list-item">
                épargné{' '}
                <NumberFormat
                  value={amount}
                  className="gold_text"
                  displayType={'text'}
                  thousandSeparator={`'`}
                  prefix={' CHF '}
                />
                ;
              </li>
              <li className="saving_interest_calc_list-item">
                gagné{' '}
                <NumberFormat
                  value={interest}
                  className="gold_text"
                  displayType={'text'}
                  thousandSeparator={`'`}
                  prefix={'CHF '}
                />{' '}
                en intérêts (taux de 0.1%)
              </li>
            </ul>

            <div className="saving_interest_calc_list-text-1">
              En plus, vous aurez réalisé jusqu'à{' '}
              <NumberFormat
                value={taxFromLocal}
                className="gold_text"
                displayType={'text'}
                thousandSeparator={`'`}
                prefix={'CHF '}
              />{' '}
              d'économie sur vos impôts.
            </div>

            <div className="saving_interest_calc_list-text">
              Vous pouvez essayer avec un autre montant
              <div className="wrapper">
                d'épargne
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
            </div>
          </div>

          <div className="saving_interest_calc-final-calc">
            <div className="saving_interest_calc-final-calc-text">
              Votre capital final
            </div>
            <div className="countup_text" ref={countUpRef} />
          </div>
        </div>
      </div>

      <div className="footer_content">
        <div className="buttons_set button_position">
          <div className="error">{error}</div>
          <button onClick={handleSubmit} className="next_button">
            Continuer
          </button>
          <button onClick={handleRecalculate} className="button_recalc">
            Recalculer
          </button>
        </div>

        <Popup
          modal
          trigger={
            <div className="pop_up_triger">
              Plus d'explications sur le résultat
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
              <button className="close" onClick={close}>
                X
              </button>
              <div className="pop_up">
                <div className="pop_up_title">
                  Comment obtenons-nous ce résultat ?
                </div>
                <div className="pop_up_text">
                  Le montant entouré correspond au capital total épargné à l’âge
                  de la retraite en fonction de votre investissement mensuel ou
                  annuel et de la durée mentionnée. Il comprend les montants
                  cotisés chaque année et les intérêts obtenus grâce à votre
                  épargne. Le taux de 0.1% est indicatif et dépend du type de
                  produit, de la compagnie d'assurance ou de la banque et des
                  conditions de marché.
                </div>
                <div className="pop_up_text">
                  Si vous avez choisi un 3ème pilier en assurance, le taux
                  d’intérêt minimum sera fixé dans votre contrat et si la
                  compagnie performe bien, vous recevrez des excédents.
                </div>

                <div className="pop_up_text">
                  Si vous optez pour un 3ème pilier en banque, le taux d’intérêt
                  ne sera que légèrement supérieur à celui d’un compte épargne
                  et aucun montant ne pourra être garanti à l’échéance. Si vous
                  avez un objectif précis en tête, il peut être intéressant de
                  recalculer avec un montant d’épargne mensuel différent.
                </div>
              </div>
            </>
          )}
        </Popup>
      </div>
    </div>
  );
}
