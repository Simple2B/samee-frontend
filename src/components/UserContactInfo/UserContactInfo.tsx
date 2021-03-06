import React, {ReactElement, useContext, useEffect, useState} from 'react';
import {Checkbox, Radio} from '@mui/material';
import {makeStyles} from '@material-ui/styles';
import {AxiosError, AxiosResponse} from 'axios';
import './userContactInfo.css';
import {useHistory} from 'react-router-dom';
import {userDataInstance} from '../../api/axiosInstance';
import {getUserData} from '../../api/userData';
import {phone} from 'phone';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input/input';
import * as EmailValidator from 'email-validator';
import {ProgressContext} from '../../context/progressContext';
import {Formik} from 'formik';
import Pdf from '../../documents/conditions.pdf';

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

  let userData: {[key: string]: string};
  try {
    userData = getUserData();
  } catch (e: any) {
    userData = {};
  }

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
      .post('/add/', userData)
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
                F??licitations???! Vous allez tr??s prochainement recevoir par email
                un comparatif complet, adapt?? aux informations que vous nous
                avez transmises et aux solutions s??lectionn??es.
              </div>

              <div className="user_contact_info_text">
                Avant cela, nous avons besoin de confirmer que votre num??ro de
                t??l??phone est bien valide. Pour ceci, vous recevrez un code ?? 6
                chiffres via SMS, que vous devrez retranscrire ?? la prochaine
                ??tape.
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
                    Votre num??ro de t??l??phone
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

              <div className="links"></div>

              <div className="user_contact_info_check_block">
                <label className="choose_solution_list">
                  J'ai lu et j'accepte les{' '}
                  <a
                    className="link"
                    href={Pdf}
                    rel="noopener noreferrer"
                    target="_blank">
                    conditions g??n??rales
                  </a>
                  <Checkbox
                    value={values.check}
                    name="check"
                    onChange={handleChange}
                    classes={{root: classes.root, checked: classes.checked}}
                    sx={{'& .MuiSvgIcon-root': {fontSize: 30}}}
                  />
                </label>
              </div>
            </form>
          );
        }}
      </Formik>

      <div className="containerButtonPosition">
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
    </div>
  );
}
