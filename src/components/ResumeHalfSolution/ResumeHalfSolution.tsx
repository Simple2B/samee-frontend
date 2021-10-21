import React, {ReactElement, useContext, useEffect} from 'react';
import NumberFormat from 'react-number-format';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './resumeHalfSolution.css';
import {ProgressContext} from '../../context/progressContext';

export default function ResumeHalfSolution(): ReactElement {
  const [savingYears, setSavingYears] = useState(localStorage.getItem('age'));
  const [period, setPeriod] = useState(localStorage.getItem('period'));
  const [savings, setSavings] = useState(localStorage.getItem('salary'));
  const [savingsAmount, setSavingsAmount] = useState(
    localStorage.getItem('savings'),
  );
  const [savingsPercent, setSavingsPercent] = useState(
    localStorage.getItem('savingsPercent'),
  );
  const [fondsPercent, setFondsPercent] = useState(
    localStorage.getItem('fondsPercent'),
  );

  const [scenarioRealistic, setScenarioRealistic] = useState(
    localStorage.getItem('scenarioRealistic'),
  );
  const [scenarioOptimistic, setScenarioOptimistic] = useState(
    localStorage.getItem('scenarioOptimistic'),
  );
  const [scenarioPessimistic, setScenarioPessimistic] = useState(
    localStorage.getItem('scenarioPessimistic'),
  );

  const history = useHistory();

  const {setProgress} = useContext(ProgressContext);

  useEffect(() => {
    setProgress(25);
  }, []);

  const handleSubmit = () => {
    history.push('/user-address-info');
  };

  const handleSubmitModify = () => {
    history.push('/resume-half-guarantee-solution-modify');
  };

  return (
    <div className="resume_wrapper">
      <div className="main_content">
        <div className="resume_half_solution">
          <div className="resume_half_solution_text_block">
            <div className="resume_half_solution_title title">
              Résumé: solution mi-garantie/mi-rendement
            </div>

            <div className="resume_half_solution_text">
              Vous cotiserez pendant{' '}
              <span className="gold_text">{savingYears} ans.</span>
            </div>

            <div className="resume_half_solution_text">
              Avec un montant <span className="gold_text">{period}</span> de{' '}
              <NumberFormat
                value={savings}
                className="gold_text"
                displayType={'text'}
                thousandSeparator={`'`}
                prefix={'CHF '}
              />
            </div>

            <div className="resume_half_solution_text">
              Vous auriez donc un capital de{' '}
              <NumberFormat
                value={savingsAmount}
                className="gold_text"
                displayType={'text'}
                thousandSeparator={`'`}
                prefix={'CHF '}
              />
            </div>

            <div className="resume_half_solution_text">
              Avec <span className="gold_text"> {savingsPercent}%</span> en
              épargne et <span className="gold_text"> {fondsPercent}%</span> en
              fonds
            </div>
          </div>

          <div className="resume_half_solution_number_block">
            <div className="resume_half_solution_main_circle">
              <div className="scenario">Scénario réaliste</div>
              <NumberFormat
                value={scenarioRealistic}
                className="gold_text scenario_text"
                displayType={'text'}
                thousandSeparator={`'`}
                prefix={'CHF '}
              />
            </div>
            <div className="resume_half_solution_secondary_circles">
              <div className="resume_half_solution_optimist">
                <div className="scenario-opt">Scénario optimiste</div>
                <NumberFormat
                  value={scenarioOptimistic}
                  className="gold_text"
                  displayType={'text'}
                  thousandSeparator={`'`}
                  prefix={'CHF '}
                />
              </div>
              <div className="resume_half_solution_pessimist">
                <div className="scenario-pess">Scénario pessimiste</div>
                <NumberFormat
                  value={scenarioPessimistic}
                  className="gold_text"
                  displayType={'text'}
                  thousandSeparator={`'`}
                  prefix={'CHF '}
                />
              </div>
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
      </div>
    </div>
  );
}
