import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import './whatIsInvestmentSolution.css'


export default function WhatIsInvestmentSolution(): ReactElement {

  const history = useHistory()

  const handleSubmit = () => {
    history.push('/investment-solution')
  }

  return (
    <div className="what_is_investment-solution">
      <div className="what_is_investment-solution_title title">
        Qu'est-ce que c'est ?
      </div>

      <div className="what_is_investment-solution_text">
        Comparé aux deux autres solutions, aucun capital n’est garanti.
      </div>
      <div className="what_is_investment-solution_text">
        Par exemple, vous pouvez choisir 80 ou 70% en épargne garantie, qui vous permet de réduire le risque et 20 ou 30% en fonds de placement afin d’augmenter le rendement.
      </div>
      <div className="what_is_investment-solution_text">
        Le plus souvent, les produits de placements sont diversifiés pour assurer un risque modéré. Vous avez la possibilité de choisir les fonds qui vous intéressent.
      </div>
      <div className="what_is_investment-solution_text">
        Vous pouvez choisir des fonds plus ou moins risqués avec une proportion d’actions plus ou moins élevées selon votre profil d’investisseur. Gardez en tête que plus la part en action est élevée, plus le risque et le rendement le sont également.
        Vous pouvez aussi modifier l’allocation de votre portefeuille pendant la durée du contrat.
      </div>

      <button onClick={handleSubmit} className="next_button">C'est compris</button>
    </div>
  )
}
