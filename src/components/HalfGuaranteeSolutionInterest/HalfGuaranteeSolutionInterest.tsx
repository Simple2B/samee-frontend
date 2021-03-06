import React, {ReactElement, useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Popup from 'reactjs-popup';
import {ProgressContext} from '../../context/progressContext';
import './halfGuaranteeSolutionInterest.css';

export default function HalfGuaranteeSolutionInterest(): ReactElement {
  const history = useHistory();
  const {setProgress} = useContext(ProgressContext);

  useEffect(() => {
    setProgress(19);
  }, []);

  const handleSubmit = () => {
    history.push('/mi-garantie-mi-rendement-proportion');
  };
  return (
    <div className="half_guarantee_solution_interest">
      <div className="main_content">
        <div className="half_guarantee_solution_interest_title">
          <span className="gold_text">
            La solution mi-garantie/mi-rendement{' '}
          </span>
          semble vous intéresser.
        </div>

        <ul className="half_guarantee_solution_interest_list">
          <li className="half_guarantee_solution_interest_list-item">
            performance plus élevée que sur un compte épargne classique
          </li>
          <li className="half_guarantee_solution_interest_list-item">
            mélange entre fonds et capital garanti{' '}
          </li>
          <li className="half_guarantee_solution_interest_list-item">
            risque de perte existant sur la partie en fonds{' '}
          </li>
        </ul>

        <div className="half_guarantee_solution_interest_text">
          Le taux d'intérêt est déterminé en partie par la compagnie et en
          partie par les conditions du marché pour le capital placé en fonds.
        </div>
      </div>

      <div className="footer_content">
        <button
          onClick={handleSubmit}
          className="button_position half_guarantee_solution_interest_button">
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
                  Les principales institutions avec lesquelles nous travaillons
                  sont :
                </div>
                <div className="pop_up_text">
                  Allianz, Axa Winterthur, Bâloise, Generali, Helvetia,
                  Mobilière, Rentes genevoises, Retraites populaires, Swisslife,
                  Vaudoise, Zugerberg, Zürich.
                </div>
              </div>
            </>
          )}
        </Popup>
      </div>
    </div>
  );
}
