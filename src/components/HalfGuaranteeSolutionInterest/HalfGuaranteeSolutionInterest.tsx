import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import Popup from "reactjs-popup";
import "./halfGuaranteeSolutionInterest.css";

export default function HalfGuaranteeSolutionInterest(): ReactElement {
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/half-guarantee-optimal-proportion");
  };
  return (
    <div className="half_guarantee_solution_interest">
      <div className="half_guarantee_solution_interest_title">
        <span className="gold_text">La solution mi-garantie/mi-rendement </span>
        semble vous intéresser.
      </div>

      <ul className="half_guarantee_solution_interest_list">
        <li className="half_guarantee_solution_interest_list-item">performance plus élevée que sur un compte épargne classique</li>
        <li className="half_guarantee_solution_interest_list-item">mélange entre fonds et capital garanti </li>
        <li className="half_guarantee_solution_interest_list-item">risque de perte existant sur la partie en fonds </li>
      </ul>

      <div className="half_guarantee_solution_interest_text">
        Le taux d'intérêt est déterminé en partie par la compagnie et en partie par les conditions du marché pour le capital placé en fonds.
      </div>

      <button onClick={handleSubmit} className="button_position half_guarantee_solution_interest_button">Découvir le montant que je pourrais obtenir</button>

      <Popup
        modal
        trigger={
          <div className="pop_up_triger">
            Avec quelles institutions travaillez vous ?
          </div>
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
                Avec quelles institutions travaillez vous ?
              </div>
              <div className="pop_up_text">
                Nous travaillons avec la majorité des compagnies d'assurances et les principales banques afin de vous proposer la solution qui vous convient le mieux.
              </div>
              <div className="pop_up_text">
                Quelques exemples de compagnies et de banques avec lesquelles nous travaillons:

              </div>
              <div className="pop_up_text">
                - Swiss Life, Bâloise Assurance, Vaudoise Assurance, AXA Winthertur, Zürich Assurance, Credit Suisse, VIAC, PostFinance, Retraites populaires, UBS, etc.
              </div>

            </div>
          </>
        )}
      </Popup>

    </div>
  );
}
