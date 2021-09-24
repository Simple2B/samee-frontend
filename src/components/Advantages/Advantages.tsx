import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import "./advantages.css";

export default function Advantages(): ReactElement {
  const history = useHistory();

  const handleSubmit = () => {
    return history.push("/tax");
  };
  return (
    <div className="advantages">
      <div className="advantages-title">
        Les avantages de ces deux solutions sont:
      </div>

      <ul className="advantages_list">
        <li className="advantages_list-item">Économie fiscale chaque année</li>
        <li className="advantages_list-item">
          Logement personnel et création d'entreprise
        </li>
        <li className="advantages_list-item">
          Départ à l'étranger et retraite en sécurité
        </li>
      </ul>

      <button onClick={handleSubmit} className="next_button">
        Continuer
      </button>
    </div>
  );
};
