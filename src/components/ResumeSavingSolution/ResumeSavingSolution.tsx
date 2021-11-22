import React, {ReactElement, useContext} from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import NumberFormat from 'react-number-format';
import {useHistory} from 'react-router-dom';
import {ProgressContext} from '../../context/progressContext';
import './resumeSavingSolution.css';

// const savingsYears: string | null = localStorage.getItem('age');
// const period: string | null = localStorage.getItem('period');
// const savings: string | null = localStorage.getItem('salary');
// const finalCapital: string | null = localStorage.getItem('finalCapital');
// const interest: string | null = localStorage.getItem('interest');

// const solutions: any = JSON.stringify(localStorage.getItem('solutionChoice'));

export default function ResumeSavingSolution(): ReactElement {
  const history = useHistory();
  const [solutions, setSolutions] = useState(
    JSON.stringify(localStorage.getItem('solutionChoice')),
  );
  const [savingsYears] = useState(localStorage.getItem('age'));
  const [period] = useState(localStorage.getItem('period'));
  const [savings] = useState(localStorage.getItem('salary'));
  const [finalCapital] = useState(localStorage.getItem('finalCapital'));
  const [interest] = useState(localStorage.getItem('interest'));

  const {setProgress} = useContext(ProgressContext);

  useEffect(() => {
    setProgress(24);
  }, []);

  const handleSubmit = () => {
    if (solutions.includes('rendement')) {
      history.push('/resume-mi-garantie-mi-rendement');
    } else {
      history.push('/informations-adresse');
    }
  };

  const handleSubmitModify = () => {
    history.push('/resume-epargne-recalcul');
  };

  return (
    <div className="resume_wrapper">
      <div className="main_content">
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
      </div>

      <div className="footer_content">
        <div className="buttons_set button_position">
          <button onClick={handleSubmit} className="next_button">
            Continuer
          </button>

          <button onClick={handleSubmitModify} className="button_modify">
            Modifier les paramètres
          </button>
        </div>
        <div className="empty_space"></div>
      </div>
    </div>
  );
}
