import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import Popup from 'reactjs-popup'
import './guaranteedSavingSolution.css'


export default function GuaranteedSavingSolution(): ReactElement {

  const history = useHistory()

  const handleSubmit = () => {
    history.push('/half-guarantee-saving-solution')
  }

  const handleSubmitPass = () => {
    history.push('/choose-solution')
  }

  const handleWhatIs = () => {
    history.push('/what-is-saving-solution')
  }

  const handleAdvantages = () => {
    history.push('/saving-solution-advantages')
  }

  const handleForWhom = () => {
    history.push('/saving-solution-for-whom')
  }

  return (
    <>
      <div className="guaranteed_saving_solution">
        <div className="guaranteed_saving-solution_text">
          <div className="guaranteed_saving_solution_title_big gold_text title">
            La solution épargne
        </div>
          <div className="guaranteed_saving_solution_title">
            Mettez votre argent en sécurité
        </div>

          <ul className="guaranteed_saving_solution_list">
            <li onClick={handleWhatIs} className="guaranteed_saving_solution_list-item">
              Qu'est-ce que c'est ?
          </li>
            <li onClick={handleAdvantages} className="guaranteed_saving_solution_list-item">
              Quels sont les avantages ?
          </li>
            <li onClick={handleForWhom} className="guaranteed_saving_solution_list-item">
              À qui est-elle destinée ?
          </li>
          </ul>
        </div>

        <Popup modal trigger={<div className="pop_up_triger"><img className="video_img" alt="video" src="/image/video1.png" /></div>}>
          {(close: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined) => (
            <>
              <button className="close" onClick={close}>
                X
              </button>
              <div className="pop_up">
                <span>Here is video</span>

              </div>
            </>)}
        </Popup>

      </div>
      <div className="buttons_set">
        <button onClick={handleSubmit} className="video_button_next">
          Voir la solution suivante
        </button>
        <button onClick={handleSubmitPass} className="video_button_pass">
          Vers le choix des solutions
        </button>
      </div>
    </>
  )
}
