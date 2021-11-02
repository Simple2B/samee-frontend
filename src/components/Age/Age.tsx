import React, {ReactElement, useContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {ProgressContext} from '../../context/progressContext';
import {retiredFemaleAge, retiredMaleAge} from '../../helpers/consts';
import {IComponentProps} from '../../types';
import './age.css';

export default function Age(): ReactElement {
  const [age, setAge] = useState<any>();
  const [error, setError] = useState('');
  const [errorCheck, setErrorCheck] = useState(false);

  const dateFromStorage: any = localStorage.getItem('date');
  const sex: any = localStorage.getItem('sex');

  const history = useHistory();

  useEffect(() => {
    setProgress(3);
  }, []);

  const {setProgress} = useContext(ProgressContext);

  const ageCalculation = () => {
    let calcAge;

    if (sex === 'Femme') {
      calcAge = retiredFemaleAge - dateFromStorage;
    } else if (sex === 'Homme') {
      calcAge = retiredMaleAge - dateFromStorage;
    }
    setAge(calcAge);
    return age;
  };

  const handleSubmitBack = () => {
    return history.push('/age');
  };

  const handleSubmit = () => {
    if ((sex === 'Femme' && age < 18) || (sex === 'Femme' && age > 63)) {
      setErrorCheck(true);
      setError(
        'Malheureusement, vous ne pouvez pas investir au troisième pilier si vous avez moins de 18 ans ou plus de 63 ans pour les femmes et 64 ans pour les hommes. ',
      );
    } else if ((sex === 'Hommo' && age < 18) || (sex === 'Hommo' && age > 64)) {
      setErrorCheck(true);
      setError(
        'Malheureusement, vous ne pouvez pas investir au troisième pilier si vous avez moins de 18 ans ou plus de 63 ans pour les femmes et 64 ans pour les hommes. ',
      );
    } else {
      localStorage.setItem('age', String(age));
      setErrorCheck(false);
      setError('');
      return history.push('/differences-assurance-banque');
    }
  };

  useEffect(() => {
    ageCalculation();
  }, [age]);

  return (
    <div className="age">
      <div className="main_content">
        <div className="age_text">Merci pour ces informations.</div>
        <div className="age_text">
          Vous épargnerez donc pendant{' '}
          <span className="age_calculation"> {age} ans.</span>{' '}
        </div>

        {errorCheck && (
          <div className="error_block">
            <img src="/image/error.png" className="error_img" alt="error" />
            {error}{' '}
          </div>
        )}
      </div>

      <div className="footer_content">
        <div className="buttons_set button_position">
          <button onClick={handleSubmit} className="next_button ">
            Continuer
          </button>
          {errorCheck && (
            <button
              onClick={handleSubmitBack}
              className="next_button button_space">
              Modifier mon âge
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
