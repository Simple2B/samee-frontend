import React, {ReactElement, useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Player} from '@lottiefiles/react-lottie-player';
import Popup from 'reactjs-popup';
import './abroad.css';
import {ProgressContext} from '../../context/progressContext';

export default function Abroad(): ReactElement {
  const history = useHistory();
  const {setProgress} = useContext(ProgressContext);

  useEffect(() => {
    setProgress(8);
  }, []);

  const handleSubmit = () => {
    //  garanties -> differences-assurance-banque
    return history.push('/differences-assurance-banque');
  };

  return (
    <div className="wrapper_abroad">
      <div className="main_content">
        <div className="abroad">
          <div className="abroad_text">
            <div className="abroad_title">
              Départ à l'étranger et retraite en sécurité
            </div>
            <ol className="abroad_list">
              <li className="abroad_list-item">
                Arrivé à la retraite, vous devez retirer votre capital ainsi que
                les intérêts et éventuels excédents (uniquement en assurance).
              </li>
              <li className="abroad_list-item">
                Vous avez la possibilité de partir en retraite anticipée dès
                l'âge de 60 ans pour un homme et de 59 ans pour une femme.{' '}
              </li>
              <li className="abroad_list-item">
                {' '}
                {/* Vous devez retirer votre capital afin de vous installer ailleurs
                en Europe d'une manière définitive ou pour le travail. */}
                Vous pouvez, en tout temps, retirer votre capital afin de vous
                installer ailleurs en Europe d'une manière définitive ou pour
                votre emploi.
              </li>
            </ol>
          </div>
          <div className="abroad_animation">
            <Player
              autoplay
              loop
              src="/animations/13598-pensjonisten.json"
              style={{height: '300px', width: '300px'}}></Player>
          </div>
        </div>
      </div>

      <div className="containerButtonPosition">
        <div className="footer_content">
          <button
            onClick={handleSubmit}
            className="next_button button_position">
            Continuer
          </button>
          <Popup
            modal
            trigger={
              <div className="pop_up_triger">
                En savoir plus sur cet avantage
              </div>
            }>
            {(
              close:
                | ((
                    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
                  ) => void)
                | undefined,
            ) => (
              <>
                <button className="close" onClick={close}></button>
                <div className="pop_up">
                  <div className="pop_up_title">
                    En savoir plus sur cet avantage
                  </div>
                  <div className="pop_up_text">
                    On entend souvent dire que le troisième pilier nous assure
                    une retraite plus confortable face à un avenir incertain.
                    Même si cela peut nous paraitre très lointain, il est
                    important de le garder dans un coin de sa tête.
                  </div>
                  <div className="pop_up_text">
                    En contractant un troisième pilier en assurance, le montant
                    que vous souhaitez obtenir à la retraite peut être garanti
                    lors de la conclusion du contrat dès la signature. Et ce,
                    même si vous devenez invalide et ne devez plus cotiser.
                  </div>
                  <div className="pop_up_text">
                    Légalement, vous avez le droit de retirer votre 3ème pilier
                    dans une période de 5 ans avant ou après cette date butoir.
                    Si vous souscrivez un troisième pilier en assurance, vous
                    devez inscrire la date d’échéance dans le contrat.
                  </div>
                  <div className="pop_up_text">
                    Si vous envisagez un départ définitif à l’étranger, vous
                    avez également le droit de retirer le capital de votre 3ème
                    pilier. Afin de vous projeter plus précisément, pensez
                    toutefois à demander la valeur de rachat de votre 3ème
                    pilier à la compagnie et renseignez-vous auprès de votre
                    conseiller.
                  </div>
                </div>
              </>
            )}
          </Popup>
        </div>
      </div>
    </div>
  );
}
