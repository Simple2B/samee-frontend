import React, {ReactElement, useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {ProgressContext} from '../../context/progressContext';
import './finalStep.css';

export default function FinalStep(): ReactElement {
  const history = useHistory();

  const {setProgress} = useContext(ProgressContext);

  useEffect(() => {
    setProgress(30);
  }, []);

  const handleSubmit = () => {
    setProgress(1);
    history.push('/');
  };
  return (
    <div className="final_step">
      <div className="main_content">
        <div className="final_step_title">Merci beaucoup !</div>

        <div className="final_step_text">
          Votre formulaire est terminé. Vous recevrez sous peu un comparatif
          complet, adapté aux informations que vous nous avez transmises,
          proposé par un consultant en assurance.
        </div>

        <div className="final_step_text">
          Il sera à votre disposition pour toutes questions ou conseils
          supplémentaires soit par téléphone, soit lors d'une rencontre.
        </div>

        <div className="final_step_text">
          Nous mettons l'accent sur la transparence, la rapidité et la
          simplicité.
        </div>
      </div>

      <div className="footer_content">
        <button onClick={handleSubmit} className="next_button button_position">
          Quitter
        </button>
      </div>
    </div>
  );
}
