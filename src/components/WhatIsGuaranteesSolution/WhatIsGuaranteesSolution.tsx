import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import "./whatIsGuaranteesSolution.css";

export default function WhatIsGuaranteesSolution(): ReactElement {
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/guarantee-saving-solution");
  };

  return (
    <div className="what_is_solution">
      <div className="what_is_solution_title title">Qu'est-ce que c'est ?</div>

      <div className="what_is_solution_text">
        Cette solution est la plus simple et sécurisée. Elle fonctionne comme
        compte épargne traditionnel. Il faut savoir que les intérêts tournent
        autour des 0% (entre 0 et 0.25%). Chaque mois ou année, vous pouvez
        verser vos cotisations sur un compte en banque.
      </div>
      <div className="what_is_solution_text">
        Vous pouvez aussi le faire en assurance où un taux d’intérêt est fixé
        pour la durée du contrat et qui peut vous garantir votre capital à la
        retraite.
      </div>
      <div className="what_is_solution_text">
        Quand les assurances performent, elles redistribuent une partie du
        résultat positif sur votre 3ème pilier.
      </div>

      <button onClick={handleSubmit} className="next_button">
        C'est compris
      </button>
    </div>
  );
};
