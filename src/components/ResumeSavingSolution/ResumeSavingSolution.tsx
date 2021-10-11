import React, {ReactElement} from 'react';
import {useEffect} from 'react';
import NumberFormat from 'react-number-format';
import {useHistory} from 'react-router-dom';
import './resumeSavingSolution.css';

const savingsYears: string | null = localStorage.getItem('age');
const period: string | null = localStorage.getItem('period');
const savings: string | null = localStorage.getItem('salary');
const finalCapital: string | null = localStorage.getItem('finalCapital');
const interest: string | null = localStorage.getItem('interest');

const solutions: any = JSON.stringify(localStorage.getItem('solutionChoice'));

export default function ResumeSavingSolution(): ReactElement {
  useEffect(() => {
    const savingsYears: string | null = localStorage.getItem('age');
    const period: string | null = localStorage.getItem('period');
    const savings: string | null = localStorage.getItem('salary');
    const finalCapital: string | null = localStorage.getItem('finalCapital');
    const interest: string | null = localStorage.getItem('interest');
  });
  const history = useHistory();

  const handleSubmit = () => {
    if (solutions.includes('rendement')) {
      history.push('/resume-half-guarantee-solution');
    } else {
      history.push('/user-address-info');
    }
  };

  const handleSubmitModify = () => {
    history.push('/resume-saving-solution-modify');
  };

  return (
    <>
      <div className="resume_saving_solution">
        <div className="resume_saving_solution_text_block">
          <div className="resume_saving_solution_title">
            Résumé: solution épargne
          </div>

          <div className="resume_saving_solution_text">
            Vous cotiserez pendant{' '}
            <span className="gold_text">{savingsYears} ans.</span>
          </div>

          <div className="resume_saving_solution_text">
            Avec un montant <span className="gold_text">{period}</span> de{' '}
            <NumberFormat
              value={savings}
              className="gold_text"
              displayType={'text'}
              thousandSeparator={`'`}
              prefix={'CHF '}
            />
          </div>

          <div className="resume_saving_solution_text">
            Vous auriez donc un capital de{' '}
            <NumberFormat
              value={finalCapital}
              className="gold_text"
              displayType={'text'}
              thousandSeparator={`'`}
              prefix={'CHF '}
            />
          </div>

          <div className="resume_saving_solution_text">
            Avec un gain de{' '}
            <NumberFormat
              value={interest}
              className="gold_text"
              displayType={'text'}
              thousandSeparator={`'`}
              prefix={'CHF '}
            />
          </div>
        </div>

        <div className="resume_saving_solution_number_block">
          <div className="resume_saving_solution_final_text">
            Votre capital final
          </div>
          <div className="resume_saving_solution_final_amount">
            <NumberFormat
              value={finalCapital}
              className="gold_text"
              displayType={'text'}
              thousandSeparator={`'`}
              prefix={'CHF '}
            />
          </div>
        </div>
      </div>

      <div className="buttons_set button_position">
        <button onClick={handleSubmit} className="next_button">
          Continuer
        </button>

        <button onClick={handleSubmitModify} className="button_modify">
          Modifier les paramètres
        </button>
      </div>
    </>
  );
}
