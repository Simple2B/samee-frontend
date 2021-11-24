import React, {ReactElement, useContext, useEffect} from 'react';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {ProgressContext} from '../../context/progressContext';
import './resume.css';

// const solutions: any = JSON.stringify(localStorage.getItem('solutionChoice'));

export default function Resume(): ReactElement {
  const history = useHistory();
  const [solutions, setSolutions] = useState(
    JSON.stringify(localStorage.getItem('solutionChoice')),
  );

  const {setProgress} = useContext(ProgressContext);

  useEffect(() => {
    setProgress(23);
  }, []);

  const handleSubmit = () => {
    // garanties -> differences-assurance-banque
    if (solutions.includes('differences-assurance-banque')) {
      history.push('/resume-epargne');
    } else if (solutions.includes('rendement')) {
      history.push('/resume-mi-garantie-mi-rendement');
    }
  };
  return (
    <div className="resume">
      <div className="main_content">
        <div className="resume_text">
          Nous espérons sincèrement que grâce à ce formulaire vous en savez plus
          sur la stratégie que vous essayez d'adopter pour votre troisième
          pilier.
        </div>

        <div className="resume_text">
          Dans la prochaine étape, vous obtiendrez un résumé des solutions qui
          vous intéressent.
        </div>

        <div className="resume_text">
          Vous pourrez modifier vos montants et la répartition de votre capital,
          jusqu'à ce que les montants vous conviennent.
        </div>
      </div>

      <div className="containerButtonPosition">
        <div className="footer_content">
          <button
            onClick={handleSubmit}
            className="next_button button_position">
            Continuer
          </button>
          <div className="empty_space"></div>
        </div>
      </div>
    </div>
  );
}
