import React, {ReactElement} from 'react';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Popup from 'reactjs-popup';
import './halfGuaranteedSolution.css';

// const solutions = JSON.stringify(localStorage.getItem('solutionChoice'));

export default function HalfGuaranteedSolution(): ReactElement {
  const history = useHistory();
  const [solutions, setSolutions] = useState(
    JSON.stringify(localStorage.getItem('solutionChoice')),
  );

  const handleSubmit = () => {
    if (solutions.includes('garanties')) {
      history.push('/saving-guarantee-interest');
    } else {
      history.push('/half-guarantee-interest');
    }
  };

  const handleWhatIs = () => {
    history.push('/what-is-half-guaranteed-solution');
  };

  const handleAdvantages = () => {
    history.push('/half-guaranteed-solution-advantages');
  };

  const handleForWhom = () => {
    history.push('/half-guaranteed-solution-for-whom');
  };

  return (
    <div className="video_wrapper">
      <div className="main_content">
        <div className="half_guaranteed_solution">
          <div className="half_guaranteed_solution_text">
            <div className="half_guaranteed_solution_title_big gold_text title">
              La solution mi-garantie/mi-rendement
            </div>
            <div className="half_guaranteed_solution_title">
              Avoir un montant garanti tout en ayant un taux d'intérêt
              intéressant
            </div>

            <ul className="half_guaranteed_solution_list">
              <li
                onClick={handleWhatIs}
                className="half_guaranteed_solution_list-item">
                Qu'est-ce que c'est ?
              </li>
              <li
                onClick={handleAdvantages}
                className="half_guaranteed_solution_list-item">
                Quels sont les avantages ?
              </li>
              <li
                onClick={handleForWhom}
                className="half_guaranteed_solution_list-item">
                À qui est-elle destinée ?
              </li>
            </ul>
          </div>

          <Popup
            modal
            trigger={
              <div className="pop_up_triger-video">
                <img
                  className="video_img"
                  alt="video"
                  src="/image/video2.png"
                />
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
                <div className="pop_up_video">
                  <video width="1000" height="auto" autoPlay controls>
                    <source
                      src="video/video.sol.mi-mi.mp4"
                      type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                    />
                  </video>
                </div>
              </>
            )}
          </Popup>
        </div>
      </div>

      <div className="footer_content">
        <div className="button_position">
          <button onClick={handleSubmit} className="next_button">
            Continuer
          </button>
        </div>
      </div>
    </div>
  );
}
