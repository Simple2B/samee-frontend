import React, {ReactElement, useState} from 'react';
import {FormControl, Select, MenuItem} from '@mui/material';
import {makeStyles} from '@material-ui/styles';
import Popup from 'reactjs-popup';
import './userPersonalInfo.css';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    color: 'white !important',
    fontSize: '24px !important',
    fontFamily: '"Archivo Narrow" !important',
    border: '1px solid white !important',
    paddingLeft: '15px',
    paddingBottom: 0,
    paddingTop: 0,
    margin: 0,
  },
  select: {
    borderColor: 'white !important',
    fontFamily: '"Archivo Narrow" !important',
    color: 'white !important',
    paddingLeft: '15px',
    fontSize: '19px !important',
  },
  nativeInput: {
    color: '#fff !important',
    fontFamily: '"Archivo Narrow" !important',
  },
  icon: {
    color: 'white !important',
  },
  colorPrimary: {
    color: '#eac28c !important',
  },
});

export default function UserPersonalInfo(): ReactElement {
  const [maritalStatus, setMaritalStatus] = useState();
  const [profession, setProfession] = useState();
  const [smoking, setSmoking] = useState();
  const [error, setError] = useState('');

  const handleStatus = (e: any) => {
    setMaritalStatus(e.target.value);
  };

  const handleProfession = (e: any) => {
    setProfession(e.target.value);
  };

  const handleSmoking = (e: any) => {
    setSmoking(e.target.value);
  };

  const history = useHistory();

  const classes = useStyles();

  const personalInfo = {
    maritalStatus: maritalStatus,
    profession: profession,
    smoking: smoking,
  };

  const handleSubmit = (e: any) => {
    if (!maritalStatus || !profession || !smoking) {
      e.preventDefault();
      setError('veuillez renseigner les informations');
    } else {
      setError('');
      localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
      history.push('/user-contact-info');
    }
  };

  return (
    <div className="user_personal_info">
      <div className="user_personal_info_input-set">
        <label htmlFor="status" className="input_label">
          Etat civil
        </label>
        <FormControl
          classes={{root: classes.root}}
          variant="standard"
          sx={{m: 1, height: 35, minWidth: 250, margin: 0}}>
          <Select
            value={maritalStatus}
            onChange={handleStatus}
            className={classes.select}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="status"
            classes={{
              nativeInput: classes.nativeInput,
              select: classes.select,
            }}
            inputProps={{
              classes: {
                icon: classes.icon,
              },
            }}>
            <MenuItem value="Célibataire">Célibataire</MenuItem>
            <MenuItem value="Marié(e)">Marié(e)</MenuItem>
            <MenuItem value="Divorcé(e)">Divorcé(e)</MenuItem>
            <MenuItem value="Veuf(ve)">Veuf(ve)</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="user_personal_info_text">
        Si vous êtes fumeur et exercez une profession à haut risque, vous vous
        situez dans une classe de risque supérieure par rapport à une personne
        non-fumeuse avec un travail sans danger. N'hésitez pas à nous contacter
        si vous avez des questions.
      </div>

      <div className="user_personal_info_block">
        <div className="user_address_info_input-set">
          <label htmlFor="profession" className="input_label">
            Profession
          </label>
          <input
            value={profession}
            onChange={handleProfession}
            type="text"
            name="profession"
            className="input_field"
          />
        </div>

        <div className="user_data_inputs_sexe">
          <div className="input_label">Fumeur</div>
          <div className="sex_radio_item">
            <input
              value="Oui"
              onChange={handleSmoking}
              className="sex_radio_button"
              name="sexe"
              id="sexe_hommo"
              type="radio"
            />
            <label className="user_data_inputs_lebel" htmlFor="sexe_hommo">
              Oui
            </label>
          </div>

          <div className="sex_radio_item">
            <input
              value="Non"
              onChange={handleSmoking}
              className="sex_radio_button"
              name="sexe"
              id="sexe_femme"
              type="radio"
            />
            <label className="user_data_inputs_lebel" htmlFor="sexe_femme">
              Non
            </label>
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
                Ces différents facteurs servent à déterminer votre profil et
                peuvent influencer le coût du risque dans votre 3ème pilier. En
                répondant de manière transparente, nos experts pourront réaliser
                l’estimation la plus précise possible.
              </div>
              <div className="pop_up_text">
                Par exemple, si vous êtes fumeur et exercez une profession à
                haut risque, vous vous situez dans une classe de risque
                supérieure par rapport à une personne non-fumeuse avec un
                travail sans danger.
              </div>

              <div className="pop_up_text">
                Lors de la conclusion du contrat, les données renseignées à
                l'assureur devront être exactes afin qu'il adapte la proposition
                à chaque client. En cas d'informations erronées (réticence),
                l'assureur est en droit d'annuler la police et de réclamer les
                prestations éventuellement déjà versées.
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  );
}
