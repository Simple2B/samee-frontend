import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import { Player } from '@lottiefiles/react-lottie-player';
import Popup from "reactjs-popup";
import "./housing.css";

export default function Housing(): ReactElement {
  const history = useHistory();

  const handleSubmit = () => {
    return history.push("/abroad");
  };

  return (
    <>
      <div className="housing">
        <div className="housing_text">
          <div className="housing_title">
            Logement personnel et création d'entreprise
          </div>
          <ol className="housing_list">
            <li className="housing_list-item">
              Vous pouvez utiliser le 3ème pilier pour financer les travaux de
              rénovation de votre résidence principale.{" "}
            </li>
            <li className="housing_list-item">
              Vous pouvez également l'utiliser pour acquérir votre logement à
              usage personnel.{" "}
            </li>
            <li className="housing_list-item">
              Vous avez la possibilité de le retirer pour créer votre entreprise
              en tant qu'indépendant.{" "}
            </li>
          </ol>
        </div>
        <div className="housing_animation">
          <Player
            autoplay
            loop
            src="/animations/59875-home.json"
            style={{ height: '300px', width: '300px' }}
          >
          </Player>
        </div>
      </div>
      <button onClick={handleSubmit} className="next_button">
        Continuer
      </button>
      <Popup
        modal
        trigger={
          <div className="pop_up_triger">En savoir plus sur cet avantage</div>
        }
      >
        {(
          close:
            | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
            | undefined
        ) => (
          <>
            <button className="close" onClick={close}>
              X
            </button>
            <div className="pop_up">
              <div className="pop_up_title">
                Utiliser son 3ème pilier pour son logement principal ou pour
                créer une entreprise
              </div>
              <div className="pop_up_text">
                Hormis vous assurer une retraite plus confortable et vous
                permettre de réduire vos impôts, le troisième pilier peut
                représenter une opportunité intéressante pour les investisseurs
                immobiliers ou les entrepreneurs qui souhaitent lancer leur
                projet.
              </div>
              <div className="pop_up_text">
                En effet, selon la loi, vous avez le droit de retirer vos avoirs
                dans 3 cas précis :
              </div>
              <div className="pop_up_text">
                a. Financer des travaux de rénovation de votre résidence
                principale, tels que le revêtement de sols, le ravalement de
                façade ou la réfection d’une cuisine par exemple. Le retrait de
                votre 3ème pilier pour la construction d’une piscine, d’un
                hammam ou d’un garage ne sont pas autorisés.
              </div>
              <div className="pop_up_text">
                b. Pour devenir propriétaire d’une propriété de logement à usage
                personnel. En effet, vous pouvez retirer le capital de votre
                3ème pilier pour l’utiliser comme fonds propres de ce bien
                immobilier ou pour le remboursement d’un prêt hypothécaire.
              </div>
              <div className="pop_up_text">
                c. Vous créez votre entreprise en tant qu’indépendant ou vous
                êtes inscrit en tant que travailleur indépendant à l’AVS.
              </div>
            </div>
          </>
        )}
      </Popup>
    </>
  );
};
