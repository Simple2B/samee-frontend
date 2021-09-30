import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import "./investmentSolutionForWhom.css";

export default function InvestmentSolutionForWhom(): ReactElement {
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/investment-solution");
  };

  return (
    <div className="investment-solution_for_whom">
      <div className="investment-solution_for_whom_title title">
        À qui est-elle destinée ?
      </div>

      <div className="investment-solution_for_whom_text">
        Cette solution s’adresse aux personnes à fort goût de risque avec de
        bonnes connaissances des marchés financiers, car le risque y est plus
        important.
      </div>
      <div className="investment-solution_for_whom_text">
        Cette formule ne convient pas à un horizon d’investissement court terme,
        car c’est la plus volatile.
      </div>

      <button onClick={handleSubmit} className="next_button button_position">
        C'est compris
      </button>
    </div>
  );
};
