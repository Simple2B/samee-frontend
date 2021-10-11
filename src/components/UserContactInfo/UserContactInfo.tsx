import React, {ReactElement, useState} from 'react';
import {Checkbox, Radio} from '@mui/material';
import {makeStyles} from '@material-ui/styles';
import './userContactInfo.css';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    color: 'white !important',
  },
  checked: {
    color: 'white',
  },
});

export default function UserContactInfo(): ReactElement {
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [check, setCheck] = useState(false);
  const [error, setError] = useState('');

  const history = useHistory();

  const classes = useStyles();

  const contactInfo = {
    email: email,
    phone: phone,
  };

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e: any) => {
    setPhone(e.target.value);
  };

  const handleCheck = () => {
    setCheck(!check);
    console.log(check);
  };

  const handleSubmit = (e: any) => {
    if (!email || !phone || !check) {
      e.preventDefault();
      setError('veuillez renseigner les informations');
    } else {
      setError('');
      localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
      history.push('/confirm-code');
    }
  };

  return (
    <div className="user_contact_info">
      <div className="user_contact_info_text">
        Félicitations ! Vous allez très prochainement recevoir par email un
        comparatif complet, adapté aux informations que vous nous avez
        transmises et aux solutions sélectionnées.
      </div>

      <div className="user_contact_info_text">
        Avant cela, nous avons besoin de confirmer que votre numéro de téléphone
        est bien valide. Pour ceci, vous recevrez un code à 6 chiffres via SMS,
        que vous devrez retranscrire à la prochaine étape.
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
        </div>

        <div className="user_contact_info_input-set">
          <label htmlFor="phone" className="input_label">
            Numéro de téléphone:
          </label>
          <input
            value={phone}
            onChange={handlePhone}
            type="phone"
            name="phone"
            className="input_field"
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

      <div className="button_set button_position">
        <div className="error">{error}</div>
        <button onClick={handleSubmit} className="next_button">
          Continuer
        </button>
      </div>
    </div>
  );
}
