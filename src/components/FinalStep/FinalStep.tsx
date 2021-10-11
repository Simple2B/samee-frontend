import React, {ReactElement} from 'react';
import {useHistory} from 'react-router-dom';
import './finalStep.css';

export default function FinalStep(): ReactElement {
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/');
  };
  return (
    <div className="final_step">
      <div className="final_step_title">Merci beaucoup !</div>

      <div className="final_step_text">
        Votre formulaire est terminé. Vous recevrez sous peu un comparatif
        complet, adapté aux informations que vous nous avez transmises, proposé
        par un consultant en assurance.
      </div>

      <div className="final_step_text">
        Il sera à votre disposition pour toutes questions ou conseils
        supplémentaires soit par téléphone, soit lors d'une rencontre.
      </div>

      <div className="final_step_text">
        Nous mettons l'accent sur la transparence, la rapidité et la simplicité.
      </div>

      <button onClick={handleSubmit} className="next_button button_position">
        Quitter
      </button>
    </div>
  );
}
