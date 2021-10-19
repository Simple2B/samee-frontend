import React, {ReactElement, useContext, useState} from 'react';
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Popup from 'reactjs-popup';
import {ProgressContext} from '../../context/progressContext';
import './guaranteedSavingSolution.css';

// const solutions: any = JSON.stringify(localStorage.getItem('solutionChoice'));

export default function GuaranteedSavingSolution(): ReactElement {
  const history = useHistory();
  const [solutions, setSolutions] = useState(
    JSON.stringify(localStorage.getItem('solutionChoice')),
  );

  const {setProgress} = useContext(ProgressContext);

  const handleSubmit = () => {
    setProgress(15);
    if (solutions.includes('rendement')) {
      history.push('/half-guarantee-saving-solution');
    } else {
      history.push('/saving-guarantee-interest');
    }
  };

  const handleWhatIs = () => {
    history.push('/what-is-saving-solution');
  };

  const handleAdvantages = () => {
    history.push('/saving-solution-advantages');
  };

  const handleForWhom = () => {
    history.push('/saving-solution-for-whom');
  };

  return (
    <div className="video_wrapper">
      <div className="main_content">
        <div className="guaranteed_saving_solution">
          <div className="guaranteed_saving-solution_text">
            <div className="guaranteed_saving_solution_title_big gold_text title">
              La solution épargne
            </div>
            <div className="guaranteed_saving_solution_title">
              Mettez votre argent en sécurité
            </div>

            <ul className="guaranteed_saving_solution_list">
              <li
                onClick={handleWhatIs}
                className="guaranteed_saving_solution_list-item">
                Qu'est-ce que c'est ?
              </li>
              <li
                onClick={handleAdvantages}
                className="guaranteed_saving_solution_list-item">
                Quels sont les avantages ?
              </li>
              <li
                onClick={handleForWhom}
                className="guaranteed_saving_solution_list-item">
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
                  src="/image/video1.png"
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
                      src="video/video1.mp4"
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
          <button onClick={handleSubmit} className="video_button_next">
            Continuer
          </button>
        </div>
      </div>
    </div>
  );
}
