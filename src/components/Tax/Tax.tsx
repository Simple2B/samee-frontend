import React, {ReactElement, useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Player} from '@lottiefiles/react-lottie-player';
import Popup from 'reactjs-popup';
import './tax.css';
import {ProgressContext} from '../../context/progressContext';

export default function Tax(): ReactElement {
  const history = useHistory();
  const {setProgress} = useContext(ProgressContext);

  useEffect(() => {
    setProgress(6);
  }, []);

  const handleSubmit = () => {
    return history.push('/housing-and-business');
  };
  return (
    <div className="wrapper_tax">
      <div className="main_content">
        <div className="tax">
          <div className="tax_text">
            <div className="tax_title">Économie fiscale chaque année</div>
            <ol className="tax_list">
              <li className="tax_list-item">
                Vous déduisez l'intégralité des versements au 3ème pilier de
                votre revenu imposable. Et économisez jusqu'à 2500 CHF par an sur vos
                impôts avec un revenu de 84'000 CHF.{' '}
              </li>
              <li className="tax_list-item">
                Le montant du troisième pilier est exclu de votre fortune
                imposable, vous ne paierez donc pas d'impôts sur la fortune.
              </li>
              <li className="tax_list-item">
                Vous récupérez entre 20% et 40% des montants investis sous forme
                de réduction fiscale.{' '}
              </li>
            </ol>
          </div>
          <div className="tax_animation">
            <Player
              autoplay
              loop
              src="/animations/24811-saving-money.json"
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
                  En savoir plus sur l'économie fiscale
                </div>
                <div className="pop_up_text">
                  L’un des avantages les plus connus du 3ème pilier est
                  l’économie qu’il peut vous permettre de réaliser sur vos
                  impôts. En effet, c’est un moyen de réduire le montant final
                  que vous devrez verser à l’État, tout en capitalisant pour
                  votre retraite. De plus, votre épargne au 3ème pilier est
                  exonérée d'impôts jusqu'à la retraite.
                </div>
                <div className="pop_up_text">
                  Vous pouvez déduire de votre revenu imposable l’intégralité
                  des versements au 3ème pilier. Plus vous cotisez, plus vos
                  économies seront importantes. Le montant maximal annuel est
                  actuellement de 6'883 CHF pour un salarié et de 34'416 CHF ou
                  de maximum 20% de son salaire AVS pour un indépendant.
                </div>
                <div className="pop_up_text">
                  Il est important de savoir que lors du retrait de votre 3ème
                  pilier, vous serez imposé entre 5% et 10% selon les différents
                  cantons. Toutefois, l’économie d’impôts annuelle (entre 20% et
                  40% des montants investis sont récupérés sous forme de
                  réduction fiscale) est fortement supérieure à l’impôt prélevé
                  à l’échéance.
                </div>
                <div className="pop_up_text">
                  Pour éviter de subir une imposition trop lourde, vous avez la
                  possibilité de diviser votre 3e pilier en plusieurs comptes
                  afin de les retirer progressivement entre 60 et 65 ans.
                </div>
                <div className="pop_up_text">
                  Pour profiter de cet avantage il faut effectuer le versement
                  avant le 31 décembre de l’année en cours. Le taux de l’impôt
                  sur le revenu varie fortement selon le canton où vous résidez.
                </div>
                <div className="pop_up_text">
                  Pour calculer votre réduction d’impôts, déduisez les sommes
                  annuelles épargnées de votre revenu imposable et appliquez-y
                  le taux d’imposition auquel vous êtes soumis.
                </div>
              </div>
            </>
          )}
        </Popup>
      </div>
    </div>
  );
}
