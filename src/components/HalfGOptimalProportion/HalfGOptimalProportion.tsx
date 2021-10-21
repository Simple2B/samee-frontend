import React, {ReactElement, useContext, useEffect, useState} from 'react';
import Popup from 'reactjs-popup';
import classNames from 'classnames';
import {CircleSlider} from 'react-circle-slider';
import './halfGOptimalProportion.css';
import {useHistory} from 'react-router-dom';
import {ProgressContext} from '../../context/progressContext';

export default function HalfGOptimalProportion(): ReactElement {
  const [sliderValue, setSliderValue] = useState(10);
  const [error, setError] = useState('');

  const {setProgress} = useContext(ProgressContext);

  const history = useHistory();

  useEffect(() => {
    setProgress(20);
  }, []);

  const handleSubmit = () => {
    localStorage.setItem('savingsPercent', JSON.stringify(sliderValue));
    localStorage.setItem('fondsPercent', JSON.stringify(100 - sliderValue));

    history.push('/percent-calculation');
  };

  useEffect(() => {
    if (100 - sliderValue >= 60) {
      setError(
        'Attention, Vous avez un pourcentage en fonds risqué. La partie en fond peut être perdue.',
      );
    } else {
      setError('');
    }
  }, [sliderValue]);

  const handleSliderChange = (e: number) => {
    console.log(e);
    setSliderValue(e);
  };

  return (
    <div className="half-optimal-proportion">
      <div className="main_content">
        <div className="half-optimal-proportion_text">
          Pour la solution mi-garantie/mi-rendement, vous définissez une partie
          garantie (100% sécurisée, mais avec un taux de 0.1%) et une partie en
          fonds (non garantie mais avec un rendement plus intéressant).
        </div>

        <div className="half-optimal-proportion_percents">
          <div className="proportion_percent">
            <div className="percent gold_text">{`${sliderValue}%`}</div>
            <div className="percent-desc">Epargne</div>
          </div>

          <div className="circle_button">
            <CircleSlider
              size={260}
              min={10}
              max={90}
              progressWidth={10}
              circleWidth={10}
              progressColor={'white'}
              stepSize={10}
              value={sliderValue}
              onChange={handleSliderChange}
            />

            <div className="circle"></div>
          </div>

          <div className="proportion_percent">
            <div className="percent gold_text">{`${100 - sliderValue}%`}</div>
            <div className="percent-desc">Fonds</div>
          </div>
        </div>

        {error && (
          <div className="error_block_position">
            <img src="/image/error.png" className="error_img" alt="error" />
            {error}{' '}
          </div>
        )}
      </div>

      <div className="footer_content">
        <button onClick={handleSubmit} className="next_button button_position">
          Continuer
        </button>

        <Popup
          modal
          trigger={
            <div className="pop_up_triger">
              Quelle est la proportion optimale ?
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
                  Quelle est la proportion optimale ?
                </div>
                <div className="pop_up_text">
                  Il n’existe pas de choix optimal par défaut. La répartition
                  dépend fortement de votre propension au risque.
                </div>
                <ul className="pop_up_list">
                  <li className="pop_up_list-item">
                    La partie « capital garanti » est identique à la solution
                    garantie, une épargne classique avec un taux d’intérêt très
                    faible.{' '}
                  </li>
                  <li className="pop_up_list-item">
                    La partie fonds de placement est plus risquée, mais peut
                    avoir un retour sur investissement beaucoup plus élevé.{' '}
                  </li>
                </ul>
                <div className="pop_up_text">
                  Cette solution est la solution recommandée pour la plupart des
                  profils d'investissement, car elle permet un rendement plus
                  intéressant que le capital garanti sans exposer à un risque
                  trop élevé. Le taux de 0.20% sur la partie garantie est
                  indicatif et dépend du type produit, de la compagnie
                  d'assurance ou de la banque et des conditions de marché.
                </div>
              </div>
            </>
          )}
        </Popup>
      </div>
    </div>
  );
}
