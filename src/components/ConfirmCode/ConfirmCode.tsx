import React, {ReactElement, useContext, useState} from 'react';
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {userDataInstance} from '../../api/axiosInstance';
import {ProgressContext} from '../../context/progressContext';
import './confirmCode.css';

export default function ConfirmCode(): ReactElement {
  const [code1, setCode1] = useState();
  const [code2, setCode2] = useState();
  const [code3, setCode3] = useState();
  const [code4, setCode4] = useState();
  const [code5, setCode5] = useState();
  const [code6, setCode6] = useState();
  const [error, setError] = useState('');
  const [client, setClient] = useState<any>(
    JSON.parse(localStorage.getItem('clientId')!),
  );

  const {setProgress} = useContext(ProgressContext);

  useEffect(() => {
    setProgress(29);
  }, []);

  const handleChange = (e: any) => {
    const {maxLength, value, name} = e.target;
    const [fieldName, fieldIndex] = name.split('-');

    let fieldIntIndex = parseInt(fieldIndex, 10);

    // Check if no of char in field == maxlength
    if (value.length >= maxLength) {
      // It should not be last input field
      if (fieldIntIndex < 6) {
        // Get the next input field using it's name
        const nextfield = document.querySelector<HTMLInputElement>(
          `input[name=field-${fieldIntIndex + 1}]`,
        );

        // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }
  };

  const history = useHistory();

  const inputFocus: any = React.createRef();

  const focusCodeInput = () => {
    inputFocus.current.focus();
  };

  const handleCode1 = (e: any) => {
    const clearedValue = e.target.value.replace(/\D/g, '');
    setCode1(clearedValue);
    handleChange(e);
  };

  const handleCode2 = (e: any) => {
    const clearedValue = e.target.value.replace(/\D/g, '');
    setCode2(clearedValue);
    handleChange(e);
  };

  const handleCode3 = (e: any) => {
    const clearedValue = e.target.value.replace(/\D/g, '');
    setCode3(clearedValue);
    handleChange(e);
  };

  const handleCode4 = (e: any) => {
    const clearedValue = e.target.value.replace(/\D/g, '');
    setCode4(clearedValue);
    handleChange(e);
  };

  const handleCode5 = (e: any) => {
    const clearedValue = e.target.value.replace(/\D/g, '');
    setCode5(clearedValue);
    handleChange(e);
  };

  const handleCode6 = (e: any) => {
    const clearedValue = e.target.value.replace(/\D/g, '');
    setCode6(clearedValue);
    handleChange(e);
  };

  const code = '' + code1 + code2 + code3 + code4 + code5 + code6;
  console.log(code);

  const contactInfo = {
    client_id: client.Client_id,
    phone_validation_code: code,
  };

  const handleSubmit = (e: any) => {
    if (!code1 || !code2 || !code3 || !code4 || !code5 || !code6) {
      e.preventDefault();
      setError('veuillez renseigner les informations');
    } else {
      userDataInstance
        .post('/phone_validation', contactInfo)
        .then(function (response) {
          console.log(response);
          localStorage.setItem('confirmCode', code);
          history.push('/final-step');
        })
        .catch(function (error) {
          console.log(error);
          setError(
            `Quelque chose s'est mal passé avec le serveur. Veuillez réessayer plus tard.`,
          );
        });
    }
  };

  return (
    <div className="code_wrapper">
      <div className="main_content">
        <div className="confirm_code">
          <div className="confirm_code_text">
            Entrez le code à 6 chiffres reçu par sms
          </div>

          <div className="confirm_code_inputs">
            <input
              maxLength={1}
              value={code1}
              onChange={handleCode1}
              className="code_input"
              name="field-1"
            />
            <input
              maxLength={1}
              value={code2}
              onChange={handleCode2}
              className="code_input"
              name="field-2"
            />
            <input
              maxLength={1}
              value={code3}
              onChange={handleCode3}
              className="code_input"
              name="field-3"
            />
            <input
              maxLength={1}
              value={code4}
              onChange={handleCode4}
              className="code_input"
              name="field-4"
            />
            <input
              maxLength={1}
              value={code5}
              onChange={handleCode5}
              className="code_input"
              name="field-5"
            />
            <input
              maxLength={1}
              value={code6}
              onChange={handleCode6}
              className="code_input"
              name="field-6"
            />
          </div>
        </div>
      </div>

      <div className="footer_content">
        <div className="button_set button_position">
          <div className="error">{error}</div>
          <button onClick={handleSubmit} className="next_button">
            Recevoir le comparatif
          </button>
        </div>
      </div>
    </div>
  );
}
