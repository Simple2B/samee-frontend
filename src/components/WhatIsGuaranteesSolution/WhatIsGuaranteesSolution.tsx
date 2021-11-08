import React, {ReactElement} from 'react';
import {useHistory} from 'react-router-dom';
import './whatIsGuaranteesSolution.css';

export default function WhatIsGuaranteesSolution(): ReactElement {
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/solution-epargne');
  };

  return (
    <div className="what_is_solution">
      <div className="main_content">
        <div className="what_is_solution_title title">
          Qu'est-ce que c'est ?
        </div>

        <div className="what_is_solution_text">
          C'est la solution la plus populaire, car elle est simple et sécurisée.
          Elle fonctionne comme un compte épargne traditionnel. Il faut savoir
          que les intérêts techniques tournent autour des 0% (entre 0 et 0.25%).
          Chaque mois ou année, vous pouvez verser vos cotisations sur un compte
          en banque.
        </div>
        <div className="what_is_solution_text">
          Si vous le faites en assurance, vous pouvez choisir un intérêt et un
          capital fixe qui vous est garanti à la retraite.
        </div>
        <div className="what_is_solution_text">
          De plus, quand les assurances performent, elles redistribuent une
          partie du résultat positif sur votre 3ème pilier ce qui augmente votre
          capital garanti. C'est ce qu'on appelle les excédents.
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
