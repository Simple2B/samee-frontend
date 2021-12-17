import React, {ReactElement, useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Popup from 'reactjs-popup';
import {ProgressContext} from '../../context/progressContext';
import './savingGuaranteeInterest.css';

export default function SavingGuaranteeInterest(): ReactElement {
  const history = useHistory();

  const {setProgress} = useContext(ProgressContext);

  useEffect(() => {
    setProgress(17);
  }, []);

  const handleChange = () => {
    history.push('/epargne-calcul');
  };
  return (
    <div className="saving_interest">
      <div className="main_content">
        <div className="saving_interest_title">
          <span className="gold_text">La solution épargne </span>
          semble vous intéresser.
        </div>

        <ul className="saving_interest_list">
          <li className="saving_interest_list-item">Sécurité</li>
          <li className="saving_interest_list-item">Stabilité</li>
          <li className="saving_interest_list-item">Prédictibilité</li>
        </ul>

        <div className="saving_interest_text">
          Vous bénéficiez d'un taux d'intérêt. Les taux moyens sont de 0.1%,
          mais certains atteignent 0.25% (le taux est déterminé par les
          institutions).
        </div>

        <div className="saving_interest_text">
          De plus, les assurances rajoutent chaque année les excédents à votre
          capital.
        </div>
      </div>

      <div className="containerButtonPosition">
        <div className="footer_content">
          <button
            onClick={handleChange}
            className="next_button-interest button_position">
            Découvrir le montant que je pourrais obtenir
          </button>

          <Popup
            modal
            trigger={
              <div className="pop_up_triger">
                Avec quelles institutions travaillez-vous ?
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
                    Avec quelles institutions travaillez-vous ?
                  </div>
                  <div className="pop_up_text">
                    Les principales institutions avec lesquelles nous
                    travaillons sont :
                  </div>
                  <div className="pop_up_text">
                    Allianz, Axa Winterthur, Bâloise, Generali, Helvetia,
                    Mobilière, Rentes genevoises, Retraites populaires,
                    Swisslife, Vaudoise, Zugerberg, Zürich.
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
