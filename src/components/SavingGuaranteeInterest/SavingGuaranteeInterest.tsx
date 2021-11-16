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
    history.push('/saving-guarantee-interest-calculation');
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
              Avec quelles institutions travaillez vous ?
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
              <button className="close" onClick={close}>
                X
              </button>
              <div className="pop_up">
                <div className="pop_up_title">
                  Avec quelles institutions travaillons-nous ?
                </div>
                <div className="pop_up_text">
                  Nous travaillons avec la majorité des compagnies d'assurances
                  et les principales banques afin de vous proposer la solution
                  qui vous convient le mieux.
                </div>
                <div className="pop_up_text">
                  Quelques exemples de compagnies et de banques avec lesquelles
                  nous travaillons:
                </div>

                <div className="pop_up_text">
                  - Swiss Life, Bâloise Assurance, Vaudoise Assurance, AXA
                  Winthertur, Zürich Assurance, Credit Suisse, VIAC,
                  PostFinance, Retraites populaires, UBS, etc.
                </div>
              </div>
            </>
          )}
        </Popup>
      </div>
    </div>
  );
}
