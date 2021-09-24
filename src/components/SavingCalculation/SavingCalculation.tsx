import React, { ReactElement, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';


export default function SavingCalculation(): ReactElement {
  const [amount, setAmount] = useState<any>();
  const [tax, setTax] = useState<any>()

  const history = useHistory()

  const savingYears: any = localStorage.getItem('age');
  const period: any = localStorage.getItem('period');
  const salary: any = localStorage.getItem('salary');
  const occupation: any = localStorage.getItem('occupation');

  const savingCalc = () => {
    let amount: any;
    if (period === 'mensuel') {
      amount = savingYears * (salary * 12)
      setAmount(amount)
    } else if (period === 'annuel') {
      amount = savingYears * salary
      setAmount(amount)
    }
  }

  const taxCalc = () => {
    const tax = savingYears * 2500;
    setTax(tax);
  }

  useEffect(() => {
    savingCalc();
    taxCalc();
  }, [])

  const handleSubmit = () => {
    localStorage.setItem('savings', amount)
    localStorage.setItem('savingsTax', tax)
    history.push('/guarantee-saving-solution')

  }

  return (
    <div className="saving_calc">
      <div className="saving_calc_title">En tant que <span className="gold_text">{occupation}</span>, vous aurez en <span className="gold_text">{savingYears}</span> ans: </div>

      <ul className="saving_calc_list">
        <li className="saving_calc_list-item">épargné <span className="gold_text">CHF {amount}</span> sur votre troisième pilier. </li>
        <li className="saving_calc_list-item">économisé jusqu'à <span className="gold_text">CHF {tax}</span>  sur vos impôts. </li>
      </ul>

      <div className="saving_calc_title">Vous pouvez faire fructifier cet argent de différentes manières. </div>

      <ol className="saving_calc_list">
        <li className="saving_calc_list-item">La solution épargne, votre argent en sécurité</li>
        <li className="saving_calc_list-item">La solution mi-garantie/mi-rendement, une part garantie et une part avec un meilleur rendement </li>
        <li className="saving_calc_list-item">La solution 100% fonds de placement, la solution la plus risquée avec le meilleur rendement</li>
      </ol>

      <button onClick={handleSubmit} className="next_button">Continuer</button>

    </div>
  )
}
