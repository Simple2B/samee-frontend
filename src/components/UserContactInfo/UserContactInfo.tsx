import React, {ReactElement, useContext, useEffect, useState} from 'react';
import {Checkbox, Radio} from '@mui/material';
import {makeStyles} from '@material-ui/styles';
import {AxiosError, AxiosResponse} from 'axios';
import './userContactInfo.css';
import {useHistory} from 'react-router-dom';
import {userDataInstance} from '../../api/axiosInstance';
import {
  birthday,
  city,
  epagneAmount,
  finalCapital,
  firstName,
  fondAmount,
  fondPercent,
  interest,
  lastName,
  maritalStatus,
  occupation,
  percent,
  period,
  postcode,
  profession,
  savingsAmount,
  savingsPercent,
  savingsYears,
  scenarioOptimistic,
  scenarioPessimistic,
  scenarioRealistic,
  sex,
  smoking,
  solution,
  street,
  streetNumber,
  tax,
  totalSavings,
} from '../../api/userData';
import {phone} from 'phone';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input/input';
import * as EmailValidator from 'email-validator';
import {ProgressContext} from '../../context/progressContext';

const useStyles = makeStyles({
  root: {
    color: 'white !important',
  },
  checked: {
    color: 'white',
  },
});

export default function UserContactInfo(): ReactElement {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState<string>('');
  const [check, setCheck] = useState(false);
  const [error, setError] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const [client, setClient] = useState<any>();

  const history = useHistory();

  const {setProgress} = useContext(ProgressContext);

  useEffect(() => {
    setProgress(28);
  }, []);

  const classes = useStyles();

  const contactInfo = {
    email: email,
    phone: phone,
  };

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
    if (EmailValidator.validate(e.target.value)) {
      setEmailValidError('');
    } else {
      setEmailValidError('Adresse email non valide');
    }
  };

  const handlePhone = (e: any) => {
    setPhone(e);
  };

  const handleCheck = () => {
    setCheck(!check);
    console.log(check);
  };

  const userData = {
    first_name: firstName,
    last_name: lastName,
    street_number: streetNumber,
    street: street,
    city: city,
    zip: postcode,
    email: email,
    phone_number: phone,
    birthday: birthday,
    profession: profession,
    smoking: smoking,
    marital_status: maritalStatus,
    solution: solution,
    type_of_save: period,
    amount_of_money: savingsAmount,
    sex: sex,
    saving_years: savingsYears,
    total_savings: totalSavings,
    fonds_percent: fondPercent,
    savings_percent: savingsPercent,
    interest: interest,
    occupation: occupation,
    amount_of_fonds: fondAmount,
    amount_of_savings: epagneAmount,
    tax: tax,
    scenario_optimistic: scenarioOptimistic,
    scenario_pessimistic: scenarioPessimistic,
    scenario_realistic: scenarioRealistic,
    final_capital: finalCapital,
    percent: percent,
  };

  const handleSubmit = (e: any) => {
    if (!email || !phone || !check) {
      e.preventDefault();
      setError('veuillez renseigner toutes les informations');
    } else {
      setError('');
      localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
      userDataInstance
        .post('/add', userData)
        .then(function (response) {
          console.log(response);
          const clientId = response.data;
          setClient(clientId);
          localStorage.setItem('clientId', JSON.stringify(clientId));
          history.push('/confirm-code');
        })
        .catch(function (error) {
          console.log(error.response);
          setError(`Impossible d'envoyer des SMS`);
        });
    }
  };

  return (
    <div className="user_contact_info">
      <div className="main_content">
        <div className="user_contact_info_text">
          Félicitations ! Vous allez très prochainement recevoir par email un
          comparatif complet, adapté aux informations que vous nous avez
          transmises et aux solutions sélectionnées.
        </div>

        <div className="user_contact_info_text">
          Avant cela, nous avons besoin de confirmer que votre numéro de
          téléphone est bien valide. Pour ceci, vous recevrez un code à 6
          chiffres via SMS, que vous devrez retranscrire à la prochaine étape.
        </div>

        <div className="user_contact_info_inputs_block">
          <div className="user_contact_info_input-set">
            <label htmlFor="email" className="input_label">
              Votre meilleure adresse e-mail
            </label>
            <input
              value={email}
              onChange={handleEmail}
              type="email"
              name="email"
              className="input_field"
            />
            <span className="error_valid">{emailValidError}</span>
          </div>

          <div className="user_contact_info_input-set">
            <label htmlFor="phone" className="input_label">
              Numéro de téléphone:
            </label>

            <PhoneInput
              className="input_field"
              international={true}
              withCountryCallingCode={true}
              country="CH"
              value={phone}
              maxLength={16}
              onChange={handlePhone}
            />
          </div>
        </div>

        <div className="user_contact_info_check_block">
          <div className="choose_solution_list">
            J'ai lu et j'accepte les conditions générales
            <Checkbox
              value={check}
              onChange={handleCheck}
              classes={{root: classes.root, checked: classes.checked}}
              sx={{'& .MuiSvgIcon-root': {fontSize: 30}}}
            />
          </div>
        </div>
      </div>

      <div className="footer_content">
        <div className="button_set button_position">
          <div className="error">{error}</div>
          <button onClick={handleSubmit} className="next_button">
            Continuer
          </button>
        </div>
      </div>
    </div>
  );
}
