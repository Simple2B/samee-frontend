import React, {ReactElement} from 'react';
import {useHistory} from 'react-router-dom';
import './halfGuaranteedSolutionForWhom.css';

export default function HalfGuaranteedSolutionForWhom(): ReactElement {
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/solution-mi-garantie-mi-rendement');
  };

  return (
    <div className="half_guaranteed_for_whom">
      <div className="main_content">
        <div className="half_guaranteed_for_whom_title title">
          À qui est-elle destinée ?
        </div>

        <div className="half_guaranteed_for_whom_text">
          {/* Cette solution s’adresse à des personnes à risque contrôlé, désireuse
          d’obtenir un rendement supérieur à un compte épargne, mais sans
          toutefois prendre trop de risque. */}
          Cette solution s’adresse à des personnes à risque contrôlé, désireuses
          d’obtenir un rendement supérieur à un compte épargne, mais sans
          toutefois prendre trop de risques.
        </div>
        <div className="half_guaranteed_for_whom_text">
          Cette formule est idéale sur le moyen – long terme, mais plus la durée
          est longue plus les chances de rendement augmentent et plus la
          volatilité diminue.
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
