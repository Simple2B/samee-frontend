import React, { ReactElement, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import './age.css'


export default function Age(): ReactElement {
  const [age, setAge] = useState<any>();
  const [error, setError] = useState('')

  const dateFromStorage: any = localStorage.getItem("date");
  const sex: any = localStorage.getItem("sex")

  const history = useHistory()

  const ageCalculation = () => {
    const today = new Date();
    const birthDate = new Date(dateFromStorage);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    let calcAge;

    if (sex === 'Femme') {
      calcAge = 64 - age;
    } else if (sex === 'Hommo') {
      calcAge = 65 - age;
    }
    setAge(calcAge);
    return age;
  }



  const handleSubmit = () => {
    if ((sex === 'Femme' && age < 18) || (sex === 'Femme' && age > 63)) {
      setError('Malheureusement, vous ne pouvez pas investir au troisième pilier si vous avez moins de 18 ans ou plus de 63 ans pour les femmes et 64 ans pour les hommes. ')
    } else if ((sex === 'Hommo' && age < 18) || (sex === 'Femme' && age > 64)) {
      setError('Malheureusement, vous ne pouvez pas investir au troisième pilier si vous avez moins de 18 ans ou plus de 63 ans pour les femmes et 64 ans pour les hommes. ')
    } else {
      localStorage.setItem('age', String(age))
      setError('')
      return history.push("/difference-bank-and-insurance")
    }
  }

  useEffect(() => {
    ageCalculation();
  }, [age])


  return (
    <div className="age">
      <div className="age_text">Merci pour ces informations.</div>
      <div className="age_text">Vous épargnerez donc pendant <span className="age_calculation"> {age} ans.</span> </div>
      <div className="error">{error}</div>
      <button onClick={handleSubmit} className="next_button">Continuer</button>
    </div>
  )
}
