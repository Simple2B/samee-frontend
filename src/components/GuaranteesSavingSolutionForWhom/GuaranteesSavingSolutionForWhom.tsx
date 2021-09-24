import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import './guaranteesSavingSolutionForWhom.css'


export default function GuaranteesSavingSolutionForWhom(): ReactElement {

  const history = useHistory()

  const handleSubmit = () => {
    history.push('/guarantee-saving-solution')
  }

  return (
    <div className="solution_for_whom">
      <div className="solution_for_whom_title title">
        À qui est-elle destinée ?
      </div>

      <div className="solution_for_whom_text">
        Cette solution s’adresse à des personnes jeunes qui prévoient déjà de débloquer ou retirer leur 3P pour un projet immobilier ou d’entreprise. Dans cette situation, il est important d’avoir une garantie et de ne pas risquer son épargne.
      </div>
      <div className="solution_for_whom_text">

        Cette forme de 3ème pilier est également faite pour des personnes à faible goût de risque avec un horizon d’investissement à court ou moyen terme.
      </div>

      <button onClick={handleSubmit} className="next_button">C'est compris</button>

    </div>
  )
}
