import React, {ReactElement} from 'react';
import {useHistory} from 'react-router-dom';
import './guaranteesSolutionAdvantages.css';

export default function GuaranteesSolutionAdvantages(): ReactElement {
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/solution-epargne');
  };

  return (
    <div className="solution_advantages">
      <div className="main_content">
        <div className="solution_advantages_title title">
          Quels sont les avantages ?
        </div>

        <div className="solution_advantages_text">
          C’est la solution qui offre le plus de sécurité, de stabilité et de
          prédictibilité, car le rendement et le capital peuvent être garantis.
        </div>

        <div className="solution_advantages_text">
          Comme pour les autres solutions, la prime est déductible à 100% de
          votre revenu imposable jusqu’à CHF 6'883 par an ou jusqu’à CHF 34'416
          pour un indépendant.
        </div>
      </div>

      <div className="footer_content">
        <button onClick={handleSubmit} className="next_button button_position">
          C'est compris
        </button>
        <div className="empty_space"></div>
      </div>
    </div>
  );
}
