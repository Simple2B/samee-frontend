import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import "./investmentSolutionAdvantages.css";

export default function InvestmentSolutionAdvantages(): ReactElement {
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/investment-solution");
  };

  return (
    <div className="investment-solution_advantages">
      <div className="investment-solution_advantages_title title">
        Quels sont les avantages ?
      </div>

      <div className="investment-solution_advantages_text">
        Les performances de cette solution sont plus élevées que tout autre type
        de contrat. Vous pouvez vous attendre à un taux de rendement moyen entre
        3 et 7 % (selon les performances déjà réalisées), même s’il est
        impossible de prévoir le futur.
      </div>
      <div className="investment-solution_advantages_text">
        Sur le long terme, cette solution est intéressante, car vous atténuez le
        risque de volatilité. Celui-ci est absorbé par l’horizon de temps et sur
        une très longue période, la majorité des indices boursiers a connu une
        croissance significative.
      </div>
      <div className="investment-solution_advantages_text">
        Finalement, comme pour les autres solutions, vos primes sont déductibles
        à 100% de votre revenu imposable jusqu’à CHF 6'883 par an.
      </div>

      <button onClick={handleSubmit} className="next_button">
        C'est compris
      </button>
    </div>
  );
};
