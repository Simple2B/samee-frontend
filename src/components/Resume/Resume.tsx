import React, {ReactElement} from 'react';
import {useHistory} from 'react-router-dom';
import './resume.css';

const solutions: any = JSON.stringify(localStorage.getItem('solutionChoice'));

export default function Resume(): ReactElement {
  const history = useHistory();

  const handleSubmit = () => {
    if (solutions.includes('garanties')) {
      history.push('/resume-saving-solution');
    } else if (solutions.includes('rendement')) {
      history.push('/resume-half-guarantee-solution');
    }
  };
  return (
    <div className="resume">
      <div className="resume_text">
        Nous espérons sincèrement que grâce à ce formulaire vous en savez plus
        sur la stratégie que vous essayez d'adopter pour votre troisième pilier.
      </div>

      <div className="resume_text">
        Dans la prochaine étape, vous obtiendrez un résumé des solutions qui
        vous intéressent.
      </div>

      <div className="resume_text">
        Vous pourrez modifier vos montants et la répartition de votre capital,
        jusqu'à ce que les montants vous conviennent.
      </div>

      <button onClick={handleSubmit} className="next_button button_position">
        Continuer
      </button>
    </div>
  );
}