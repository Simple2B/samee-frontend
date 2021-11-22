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
import {Formik} from 'formik';

const useStyles = makeStyles({
  root: {
    color: 'white !important',
  },
  checked: {
    color: 'white',
  },
});

interface IContactlInfo {
  email: string;
  phone: string;
  check: boolean;
}

const initialValues = {
  email: '',
  phone: '',
  check: false,
};

export default function UserContactInfo(): ReactElement {
  const [error, setError] = useState('');
  const [client, setClient] = useState<any>();

  const history = useHistory();

  const {setProgress} = useContext(ProgressContext);

  useEffect(() => {
    setProgress(28);
  }, []);

  const classes = useStyles();

  const submitForm = (values: IContactlInfo) => {
    setError('');
    const contactInfo = {
      email: values.email,
      phone: values.phone,
    };
    localStorage.setItem('contactInfo', JSON.stringify(contactInfo));

    userData.phone_number =
      localStorage.getItem('contactInfo') &&
      JSON.parse(localStorage.getItem('contactInfo')!).phone;

    userData.email =
      localStorage.getItem('contactInfo') &&
      JSON.parse(localStorage.getItem('contactInfo')!).email;

    console.log(userData);

    userDataInstance
      .post('/add', userData)
      .then(function (response) {
        console.log(response);
        const clientId = response.data;
        setClient(clientId);
        localStorage.setItem('clientId', JSON.stringify(clientId));
        history.push('/confirmation-code');
      })
      .catch(function (error) {
        console.log(error.response);
        setError(`Impossible d'envoyer des SMS`);
      });
  };

  const validate = (values: IContactlInfo) => {
    let errors = {} as IContactlInfo;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = ' ';
    } else if (!regex.test(values.email)) {
      errors.email = 'Adresse email non valide';
    }

    if (!values.phone) {
      errors.phone = ' ';
    }

    if (!values.check) {
      errors.check = true;
    }
    if (!values.email || !values.phone || !values.check) {
      setError('Veuillez renseigner toutes les informations');
    } else {
      setError('');
    }

    return errors;
  };

  const userData = {
    first_name: firstName,
    last_name: lastName,
    street_number: streetNumber,
    street: street,
    city: city,
    zip: postcode,
    email: '',
    phone_number: '',
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

  return (
    <div className="user_contact_info">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={submitForm}>
        {formik => {
          const {
            values,
            handleSubmit,
            handleChange,
            errors,
            touched,
            handleBlur,
            isValid,
            dirty,
          } = formik;
          return (
            <form
              id="form"
              onSubmit={values => {
                handleSubmit(values);
              }}
              className="main_content">
              <div className="user_contact_info_text">
                Félicitations ! Vous allez très prochainement recevoir par email
                un comparatif complet, adapté aux informations que vous nous
                avez transmises et aux solutions sélectionnées.
              </div>

              <div className="user_contact_info_text">
                Avant cela, nous avons besoin de confirmer que votre numéro de
                téléphone est bien valide. Pour ceci, vous recevrez un code à 6
                chiffres via SMS, que vous devrez retranscrire à la prochaine
                étape.
              </div>

              <div className="user_contact_info_inputs_block">
                <div className="user_contact_info_input-set">
                  <label htmlFor="email" className="input_label">
                    Votre meilleure adresse e-mail
                  </label>
                  <input
                    value={values.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    className={
                      errors.email && touched.email
                        ? 'input_field error_input'
                        : 'input_field'
                    }
                  />
                  {errors.email && touched.email && (
                    <span className="error_valid">{errors.email}</span>
                  )}
                </div>

                <div className="user_contact_info_input-set">
                  <label htmlFor="phone" className="input_label">
                    Votre numéro de téléphone
                  </label>

                  <PhoneInput
                    name="phone"
                    className={
                      errors.phone && touched.phone
                        ? 'input_field error_input'
                        : 'input_field'
                    }
                    international={true}
                    withCountryCallingCode={true}
                    country="CH"
                    value={values.phone}
                    maxLength={16}
                    onChange={(e: any) => {
                      console.log(e);

                      values.phone = e;
                    }}
                  />
                </div>
              </div>

              <div className="user_contact_info_check_block">
                <div className="choose_solution_list">
                  J'ai lu et j'accepte les conditions générales
                  <Checkbox
                    value={values.check}
                    name="check"
                    onChange={handleChange}
                    classes={{root: classes.root, checked: classes.checked}}
                    sx={{'& .MuiSvgIcon-root': {fontSize: 30}}}
                  />
                </div>
              </div>
            </form>
          );
        }}
      </Formik>

      <div className="footer_content">
        <div className="button_set button_position">
          <div className="error">{error}</div>
          <button
            type="submit"
            form="form"
            // onClick={handleSubmit}
            className="next_button">
            Continuer
          </button>
        </div>
        <div className="empty_space"></div>
      </div>
    </div>
  );
}
