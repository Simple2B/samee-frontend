import React, {ReactElement, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {Player} from '@lottiefiles/react-lottie-player';
import Popup from 'reactjs-popup';
import './housing.css';
import {ProgressContext} from '../../context/progressContext';

export default function Housing(): ReactElement {
  const history = useHistory();
  const {setProgress} = useContext(ProgressContext);

  const handleSubmit = () => {
    setProgress(7);
    return history.push('/abroad');
  };

  return (
    <div className="wrapper_house">
      <div className="main_content">
        <div className="housing">
          <div className="housing_text">
            <div className="housing_title">
              Logement personnel et création d'entreprise
            </div>
            <ol className="housing_list">
              <li className="housing_list-item">
                Vous pouvez utiliser le 3ème pilier pour financer les travaux de
                rénovation de votre résidence principale.{' '}
              </li>
              <li className="housing_list-item">
                Vous pouvez également l'utiliser pour acquérir votre logement à
                usage personnel.{' '}
              </li>
              <li className="housing_list-item">
                Vous avez la possibilité de le retirer pour créer votre
                entreprise en tant qu'indépendant.{' '}
              </li>
            </ol>
          </div>
          <div className="housing_animation">
            <Player
              autoplay
              loop
              src="/animations/59875-home.json"
              style={{height: '300px', width: '300px'}}></Player>
          </div>
        </div>
      </div>

      <div className="footer_content">
        <button onClick={handleSubmit} className="next_button button_position">
          Continuer
        </button>
        <Popup
          modal
          trigger={
            <div className="pop_up_triger">En savoir plus sur cet avantage</div>
          }>
          {(
            close:
              | ((
                  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
                ) => void)
              | undefined,
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
                  représenter une opportunité intéressante pour les
                  investisseurs immobiliers ou les entrepreneurs qui souhaitent
                  lancer leur projet.
                </div>
                <div className="pop_up_text">
                  En effet, selon la loi, vous avez le droit de retirer vos
                  avoirs dans 3 cas précis :
                </div>
                <div className="pop_up_text">
                  a. Financer des travaux de rénovation de votre résidence
                  principale, tels que le revêtement de sols, le ravalement de
                  façade ou la réfection d’une cuisine par exemple. Le retrait
                  de votre 3ème pilier pour la construction d’une piscine, d’un
                  hammam ou d’un garage n’est pas autorisé.
                </div>
                <div className="pop_up_text">
                  b. Pour devenir propriétaire d’une propriété de logement à
                  usage personnel. En effet, vous pouvez retirer le capital de
                  votre 3ème pilier pour l’utiliser comme fonds propres de ce
                  bien immobilier ou pour le remboursement d’un prêt
                  hypothécaire.
                </div>
                <div className="pop_up_text">
                  c. Vous créez votre entreprise en tant qu’indépendant ou vous
                  êtes inscrit en tant que travailleur indépendant à l’AVS.
                </div>

                <div className="pop_up_text">
                  Attention : lorsque vous retirez votre troisième pilier en
                  assurance, vous devez tenir compte de la valeur de rachat de
                  votre 3ème pilier. Cette valeur de rachat sera très faible
                  dans les premières années de votre contrat. C’est-à-dire qu’un
                  retrait de votre troisième pilier n’est pas optimisé dans
                  cette situation.
                </div>

                <div className="pop_up_text">
                  Toutefois, vous pouvez mettre votre troisième pilier en
                  nantissement, c’est-à-dire qu’il vous servira de garantie pour
                  votre hypothèque. Il est plus avantageux que le retrait de
                  capital pour lequel vous êtes imposé et vous risquez de ne pas
                  récupérer l’entièreté de vos cotisations.
                </div>

                <div className="pop_up_text">
                  En choisissant cette solution et ainsi continuant de cotiser
                  au 3ème pilier, vous bénéficiez toujours des prestations en
                  cas d’invalidité ou de décès. Dans ces deux cas, votre famille
                  n’aura pas à prendre en charge votre hypothèque, car
                  l’assurance s’en chargera. Le nantissement vous permet de
                  bénéficier de tous les avantages du 3ème pilier en remboursant
                  votre crédit hypothécaire. .
                </div>
              </div>
            </>
          )}
        </Popup>
      </div>
    </div>
  );
}
