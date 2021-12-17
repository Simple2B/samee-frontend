import React, {ReactElement, useContext} from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Popup from 'reactjs-popup';
import {ProgressContext} from '../../context/progressContext';
import './halfGuaranteedSolution.css';

// const solutions = JSON.stringify(localStorage.getItem('solutionChoice'));

export default function HalfGuaranteedSolution(): ReactElement {
  const history = useHistory();
  const [solutions, setSolutions] = useState(
    JSON.stringify(localStorage.getItem('solutionChoice')),
  );

  const {setProgress} = useContext(ProgressContext);

  useEffect(() => {
    setProgress(16);
  }, []);

  const handleSubmit = () => {
    // garanties -> differences-assurance-banque
    if (solutions.includes('differences-assurance-banque')) {
      history.push('/epargne-taux');
    } else {
      history.push('/mi-garantie-mi-rendement-taux');
    }
  };

  const handleWhatIs = () => {
    history.push('/definition-solution-mi-garantie-mi-rendement');
  };

  const handleAdvantages = () => {
    history.push('/avantages-solution-mi-garantie-mi-rendement');
  };

  const handleForWhom = () => {
    history.push('/qui-solution-mi-garantie-mi-rendement');
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
                <button className="close-video" onClick={close}>
                  X
                </button>
                <div className="pop_up_video">
                  <video className="video_content" autoPlay controls>
                    <source
                      src="video/video2.mp4"
                      type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                    />
                  </video>
                </div>
              </>
            )}
          </Popup>
        </div>
      </div>

      <div className="containerButtonPosition">
        <div className="footer_content">
          <div className="button_position">
            <button onClick={handleSubmit} className="next_button">
              Continuer
            </button>
            <div className="empty_space"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
