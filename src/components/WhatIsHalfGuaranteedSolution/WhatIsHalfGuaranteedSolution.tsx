import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import "./whatIsHalfGuaranteedSolution.css";

export default function WhatIsHalfGuaranteedSolution(): ReactElement {
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/half-guarantee-saving-solution");
  };

  return (
    <div className="what_is_half-guaranteed-solution">
      <div className="what_is_half-guaranteed-solution_title title">
        Qu'est-ce que c'est ?
      </div>

      <div className="what_is_half-guaranteed-solution_text">
        C’est la solution de 3ème pilier la plus populaire. Elle consiste en une
        partie en épargne garantie et une partie en fonds de placement gérés par
        les compagnies.
      </div>
      <div className="what_is_half-guaranteed-solution_text">
        Par exemple, vous pouvez choisir 80 ou 70% en épargne garantie, qui vous
        permet de réduire le risque et 20 ou 30% en fonds de placement afin
        d’augmenter le rendement.
      </div>
      <div className="what_is_half-guaranteed-solution_text">
        Les fonds de prévoyance sont composés d’actions, d’obligations, de fonds
        immobiliers, de devises, etc. Le plus souvent, les produits de
        placements sont bien diversifiés pour assurer un risque bas. Il est même
        possible d’avoir des fonds pour les investisseurs soucieux d’écologie
        (ESG), de nouvelles technologies et différents thèmes.
      </div>
      <div className="what_is_half-guaranteed-solution_text">
        Pendant la durée du contrat, vous avez la possibilité de modifier votre
        stratégie d’investissement dans la plupart des compagnies, pour
        augmenter votre rendement ou pour sécuriser votre épargne.
      </div>

      <button onClick={handleSubmit} className="next_button">
        C'est compris
      </button>
    </div>
  );
};
