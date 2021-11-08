import React, {ReactElement} from 'react';
import {useHistory} from 'react-router-dom';
import './halfGuaranteedSolutionAdvantages.css';

export default function HalfGuaranteedSolutionAdvantages(): ReactElement {
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/solution-mi-garantie-mi-rendement');
  };

  return (
    <div className="half_guaranteed_advantages">
      <div className="main_content">
        <div className="half_guaranteed_advantages_title title">
          Quels sont les avantages ?
        </div>

        <div className="half_guaranteed_advantages_text">
          Vous bénéficiez d’une performance plus élevée que sur un compte
          épargne classique. Ceci, grâce à des taux de rendement moyens sur la
          partie en fonds entre 3% et 7 % (selon les performances historiques).
        </div>
        <div className="half_guaranteed_advantages_text">
          Vous avez la possibilité de composer le mélange entre fonds et capital
          garanti vous-même, selon votre situation et vos projets.
        </div>
        <div className="half_guaranteed_advantages_text">
          Finalement, comme pour les autres solutions, la prime est déductible à
          100% de votre revenu imposable jusqu’à CHF 6'883 par an.
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
