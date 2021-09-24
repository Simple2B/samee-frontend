import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import Popup from "reactjs-popup";
import "./investmentSolution.css";

export default function InvestmentSolution(): ReactElement {
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/choose-solution");
  };

  const handleWhatIs = () => {
    history.push("/what-is-investment-solution");
  };

  const handleAdvantages = () => {
    history.push("/investment-solution-advantages");
  };

  const handleForWhom = () => {
    history.push("/investment-solution-for-whom");
  };

  return (
    <>
      <div className="investment_solution">
        <div className="investment_solution_text">
          <div className="investment_solution_title_big gold_text title">
            La solution "100% fonds de placement"
          </div>
          <div className="investment_solution_title">
            Aucun capital garanti, le 100% de votre argent est en fonds de
            placement
          </div>

          <ul className="investment_solution_list">
            <li
              onClick={handleWhatIs}
              className="investment_solution_list-item"
            >
              Qu'est-ce que c'est ?
            </li>
            <li
              onClick={handleAdvantages}
              className="investment_solution_list-item"
            >
              Quels sont les avantages ?
            </li>
            <li
              onClick={handleForWhom}
              className="investment_solution_list-item"
            >
              À qui est-elle destinée ?
            </li>
          </ul>
        </div>

        <Popup
          modal
          trigger={
            <div className="pop_up_triger">
              <img className="video_img" alt="video" src="/image/video2.png" />
            </div>
          }
        >
          {(
            close:
              | ((
                event: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ) => void)
              | undefined
          ) => (
            <>
              <button className="close" onClick={close}>
                X
              </button>
              <div className="pop_up">
                <video width="700" height="auto" controls>
                  <source
                    src="video/video.sol.fonds.mp4"
                    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                  />
                </video>
              </div>
            </>
          )}
        </Popup>
      </div>
      <div className="buttons_set">
        <button onClick={handleSubmit} className="next_button">
          Continuer
        </button>
      </div>
    </>
  );
};
