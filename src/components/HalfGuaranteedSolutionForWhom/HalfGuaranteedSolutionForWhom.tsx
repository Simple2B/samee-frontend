import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import './halfGuaranteedSolutionForWhom.css'

export default function HalfGuaranteedSolutionForWhom(): ReactElement {

  const history = useHistory()

  const handleSubmit = () => {
    history.push('/half-guarantee-saving-solution')
  }

  return (
    <div className="half_guaranteed_for_whom">
      <div className="half_guaranteed_for_whom_title title">
        À qui est-elle destinée ?
      </div>

      <div className="half_guaranteed_for_whom_text">
        Cette solution s’adresse à des personnes à risque contrôlé, désireuse d’obtenir un rendement supérieur à un compte épargne, mais sans toutefois prendre trop de risque.
      </div>
      <div className="half_guaranteed_for_whom_text">
        Cette formule est idéale sur le moyen – long terme, mais plus la durée est longue plus les chances de rendement augmentent et plus la volatilité diminue.
      </div>

      <button onClick={handleSubmit} className="next_button">C'est compris</button>
    </div>
  )
}
