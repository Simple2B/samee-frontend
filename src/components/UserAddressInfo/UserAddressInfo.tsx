import React, {ReactElement} from 'react';
import {useState} from 'react';
import Geosuggest from 'react-geosuggest';
import {useHistory} from 'react-router-dom';
import Popup from 'reactjs-popup';
import './userAddressInfo.css';

export default function UserAddressInfo(): ReactElement {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [number, setNumber] = useState();
  const [postcode, setPostcode] = useState();
  const [city, setCity] = useState();
  const [street, setStreet] = useState();
  const [error, setError] = useState('');

  const history = useHistory();

  const addressData = {
    name: name,
    lastName: lastName,
    number: number,
    postcode: postcode,
    city: city,
    street: street,
  };

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  const handleLastName = (e: any) => {
    setLastName(e.target.value);
  };

  const handleStreet = (e: any) => {
    setStreet(e.target.value);
  };

  const handleNumber = (e: any) => {
    setNumber(e.target.value);
  };

  const handlePostcode = (e: any) => {
    setPostcode(e.target.value);
  };

  const handleCity = (e: any) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e: {preventDefault: () => void}) => {
    if (!name || !lastName || !number || !postcode || !city || !street) {
      e.preventDefault();
      setError('veuillez renseigner les informations');
    } else {
      setError('');
      localStorage.setItem('userAddressData', JSON.stringify(addressData));
      history.push('/user-personal-info');
    }
  };

  return (
    <div className="user_address_info">
      <div className="user_address_info_text">
        Afin de pouvoir vous envoyer par e-mail des offres adaptées et vous
        donner tous les outils pour prévoir au mieux votre avenir, nous avons
        besoins de quelques informations supplémentaires.
      </div>

      <div className="user_address_info_input_block">
        <div className="user_address_info_input-left">
          <div className="user_address_info_input-set">
            <label htmlFor="name" className="input_label">
              Nom
            </label>
            <input
              value={name}
              onChange={handleName}
              type="text"
              name="name"
              className="input_field"
            />
          </div>
          <div className="user_address_info_input-set">
            <label htmlFor="street" className="input_label">
              Rue
            </label>
            <input
              value={street}
              onChange={handleStreet}
              type="text"
              name="street"
              className="input_field"
            />
          </div>
          <div className="user_address_info_input-set">
            <label htmlFor="postcode" className="input_label">
              NPA
            </label>
            <input
              value={postcode}
              onChange={handlePostcode}
              type="number"
              name="postcode"
              className="input_field"
            />
          </div>
        </div>
        <div className="user_address_info_input-right">
          <div className="user_address_info_input-set">
            <label htmlFor="lastname" className="input_label">
              Prénom
            </label>
            <input
              value={lastName}
              onChange={handleLastName}
              type="text"
              name="lastname"
              className="input_field"
            />
          </div>
          <div className="user_address_info_input-set">
            <label htmlFor="number" className="input_label">
              Numéro
            </label>
            <input
              value={number}
              onChange={handleNumber}
              type="number"
              name="number"
              className="input_field"
            />
          </div>
          <div className="user_address_info_input-set">
            <label htmlFor="city" className="input_label">
              Ville
            </label>
            <input
              value={city}
              onChange={handleCity}
              type="text"
              name="city"
              className="input_field"
            />
          </div>
        </div>
      </div>

      <div className="button_set button_position">
        <div className="error">{error}</div>
        <button onClick={handleSubmit} className="next_button">
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
            | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
            | undefined,
        ) => (
          <>
            <button className="close" onClick={close}>
              X
            </button>
            <div className="pop_up">
              <div className="pop_up_title">
                Pourquoi avez-vous besoin de ces informations ?
              </div>
              <div className="pop_up_text">
                Ces informations sont nécessaires afin d’effectuer un comparatif
                des meilleures offres, en fonction de votre situation, vos
                besoins et votre propension au risque.
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
  );
}
