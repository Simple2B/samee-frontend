import React, {ReactElement, useContext, useEffect} from 'react';
import classNames from 'classnames';
import {useState} from 'react';
import Geosuggest from 'react-geosuggest';
import {useHistory} from 'react-router-dom';
import {Formik} from 'formik';
import Popup from 'reactjs-popup';
import {ProgressContext} from '../../context/progressContext';
import './userAddressInfo.css';

type Nullable<T> = T | null | undefined;

interface IAddressInfo {
  name: string;
  lastName: string;
  number: string;
  postcode: string;
  city: string;
  street: string;
}

export default function UserAddressInfo(): ReactElement {
  const [error, setError] = useState('');
  const [postcode, setPostcode] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');

  const history = useHistory();

  const {setProgress} = useContext(ProgressContext);

  useEffect(() => {
    setProgress(26);
  }, []);

  const initialValues = {
    name: '',
    lastName: '',
    number: '',
    postcode: '',
    city: '',
    street: '',
  };

  const submitForm = (values: IAddressInfo) => {
    setError('');
    localStorage.setItem('userAddressData', JSON.stringify(values));
    history.push('/informations-profession');
  };

  const validate = (values: IAddressInfo) => {
    let errors = {} as IAddressInfo;

    if (!values.name) {
      errors.name = 'required';
    }
    if (!values.lastName) {
      errors.lastName = 'required';
    }

    if (!values.number) {
      errors.number = 'required';
    }

    if (!postcode) {
      errors.postcode = 'required';
    }
    if (!city) {
      errors.city = 'required';
    }
    if (!values.street) {
      errors.street = 'required';
    }
    if (
      !values.name ||
      !values.lastName ||
      !values.number ||
      !postcode ||
      !city ||
      !values.street
    ) {
      setError('Veuillez renseigner toutes les informations');
    } else {
      setError('');
      values.city = city;
      values.postcode = postcode;
    }

    return errors;
  };

  const onKeyPress = (event: any) => {
    console.log(event);
    if (
      (event.charCode >= 65 && event.charCode <= 90) ||
      (event.charCode >= 97 && event.charCode <= 122)
    ) {
      return;
    } else {
      event.preventDefault();
    }
  };

  const onKeyPressPostCode = (event: any) => {
    console.log(event);
    if (event.charCode >= 48 && event.charCode <= 67) {
      return;
    } else {
      event.preventDefault();
    }
  };

  const handleChangeCity = (e: any) => {
    console.log('city', e.target.value);
    setCity(e.target.value);
  };

  const handleChangePostCode = (e: any) => {
    if (e) {
      console.log('postCode', e.target.value);
      setPostcode(e.target.value);
    }
  };

  return (
    <div className="user_address_info">
      <div className="main_content">
        <div className="user_address_info_text">
          Afin de pouvoir vous envoyer par e-mail des offres adaptées et vous
          donner tous les outils pour prévoir au mieux votre avenir, nous avons
          besoins de quelques informations supplémentaires.
        </div>

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
                onSubmit={values => handleSubmit(values)}
                className="user_address_info_input_block">
                <div className="user_address_info_input-left">
                  <div className="user_address_info_input-set">
                    <label htmlFor="name" className="input_label">
                      Nom
                    </label>
                    <input
                      tabIndex={1}
                      value={values.name.replace(/[0-9]/g, '')}
                      onChange={handleChange}
                      name="name"
                      className={
                        errors.name && touched.name
                          ? 'input_field error_input'
                          : 'input_field'
                      }
                    />
                  </div>
                  <div className="user_address_info_input-set">
                    <label htmlFor="street" className="input_label">
                      Rue
                    </label>
                    <Geosuggest
                      tabIndex={3}
                      value={values.street || street}
                      onChange={handleChange}
                      name="street"
                      inputClassName={
                        errors.street && touched.street
                          ? 'input_field error_input'
                          : 'input_field'
                      }
                      placeholder=""
                      country="CH"
                      onSuggestSelect={(e: any) => {
                        if (e) {
                          const postcode = e.gmaps.address_components.filter(
                            (item: any) => item.types[0] === 'postal_code',
                          );

                          if (postcode.length > 0) {
                            setPostcode(postcode[0].long_name);
                            console.log(postcode);
                          } else {
                            setPostcode('');
                          }

                          const city = e.gmaps.address_components.filter(
                            (item: any) => item.types[0] === 'locality',
                          );

                          if (city) {
                            setCity(city[0].long_name);
                            console.log(city[0].long_name);
                          }

                          const street = e.gmaps.address_components.filter(
                            (item: any) => item.types[0] === 'route',
                          );
                          console.log(street[0].long_name);

                          setStreet(street[0].long_name);
                          values.street = e.description;
                        }
                      }}
                      suggestsHiddenClassName="hidden"
                      types={['address']}
                    />
                  </div>
                  <div className="user_address_info_input-set">
                    <label htmlFor="postcode" className="input_label">
                      NPA
                    </label>
                    <input
                      tabIndex={5}
                      maxLength={4}
                      value={postcode}
                      onChange={handleChangePostCode}
                      name="postcode"
                      className={
                        errors.postcode && touched.postcode
                          ? 'input_field error_input'
                          : 'input_field'
                      }
                      onKeyPress={onKeyPressPostCode}
                    />
                  </div>
                </div>
                <div className="user_address_info_input-right">
                  <div className="user_address_info_input-set">
                    <label htmlFor="lastname" className="input_label">
                      Prénom
                    </label>
                    <input
                      tabIndex={2}
                      value={values.lastName.replace(/[0-9]/g, '')}
                      onChange={handleChange}
                      name="lastName"
                      className={
                        errors.lastName && touched.lastName
                          ? 'input_field error_input'
                          : 'input_field'
                      }
                    />
                  </div>
                  <div className="user_address_info_input-set">
                    <label htmlFor="number" className="input_label">
                      Numéro
                    </label>
                    <input
                      tabIndex={4}
                      value={values.number.replace(/\D/g, '')}
                      onChange={handleChange}
                      name="number"
                      className={
                        errors.number && touched.number
                          ? 'input_field error_input'
                          : 'input_field'
                      }
                    />
                  </div>
                  <div className="user_address_info_input-set">
                    <label htmlFor="city" className="input_label">
                      Ville
                    </label>
                    <input
                      tabIndex={6}
                      value={city}
                      onChange={handleChangeCity}
                      name="city"
                      className={
                        errors.city && touched.city
                          ? 'input_field error_input'
                          : 'input_field'
                      }
                      onKeyPress={event => onKeyPress(event)}
                    />
                  </div>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>

      <div className="footer_contant">
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

        <Popup
          modal
          trigger={
            <div className="pop_up_triger">
              Pourquoi avez-vous besoin de ces informations ?
            </div>
          }>
          {(
            close:
              | ((
                  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
                ) => void)
              | undefined,
          ) => (
            <>
              <button className="close" onClick={close}></button>
              <div className="pop_up">
                <div className="pop_up_title">
                  Pourquoi avez-vous besoin de ces informations ?
                </div>
                <div className="pop_up_text">
                  Ces informations sont nécessaires afin d’effectuer un
                  comparatif des meilleures offres, en fonction de votre
                  situation, vos besoins et votre propension au risque.
                </div>
                <div className="pop_up_text">
                  Des différences existent selon votre canton et ville de
                  résidence.
                </div>
              </div>
            </>
          )}
        </Popup>
      </div>
    </div>
  );
}
