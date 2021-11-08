import React, {ReactElement, useContext, useEffect, useState} from 'react';
import classNames from 'classnames';
import {FormControl, Select, MenuItem} from '@mui/material';
import {makeStyles} from '@material-ui/styles';
import Popup from 'reactjs-popup';
import './userPersonalInfo.css';
import {useHistory} from 'react-router-dom';
import {ProgressContext} from '../../context/progressContext';
import {Formik} from 'formik';
import {maritalStatus, profession, percent} from '../../api/userData';

const useStyles = makeStyles({
  root: {
    color: 'white !important',
    fontSize: '24px !important',
    fontFamily: '"Archivo Narrow" !important',
    border: '1px solid white',
    // paddingLeft: '15px',
    paddingBottom: 0,
    paddingTop: 0,
    margin: 0,
  },
  select: {
    // borderColor: 'white !important',
    fontFamily: '"Archivo Narrow" !important',
    color: 'white !important',
    fontSize: '17px !important',
    paddingLeft: '15px',
    border: '1px solid white',
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

interface IPersonalInfo {
  maritalStatus: string;
  profession: string;
  percent: string;
  smoking: string;
}

const initialValues = {
  maritalStatus: '',
  profession: '',
  percent: '',
  smoking: 'Non',
};

export default function UserPersonalInfo(): ReactElement {
  const [error, setError] = useState('');

  const {setProgress} = useContext(ProgressContext);

  useEffect(() => {
    setProgress(27);
  }, []);

  const submitForm = (values: IPersonalInfo) => {
    setError('');
    localStorage.setItem('personalInfo', JSON.stringify(values));
    history.push('/informations-contact');
  };

  const validate = (values: IPersonalInfo) => {
    let errors = {} as IPersonalInfo;

    if (!values.maritalStatus) {
      errors.maritalStatus = 'required';
    }
    if (!values.profession) {
      errors.profession = 'required';
    }

    if (!values.percent) {
      errors.percent = 'required';
    }
    if (!values.smoking) {
      errors.smoking = 'required';
    }

    if (!values.maritalStatus || !values.profession || !values.percent) {
      setError('Veuillez renseigner toutes les informations');
    } else {
      setError('');
    }

    if (+values.percent > 100 || +values.percent < 10) {
      setError('Choissisez un % entre 10 to 100');
      errors.percent = 'required';
    }

    return errors;
  };

  const history = useHistory();

  const classes = useStyles();

  return (
    <div className="user_personal_info">
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
            <form id="form" onSubmit={handleSubmit} className="main_content">
              <div className="user_personal_info_input-set">
                <label htmlFor="status" className="input_label">
                  Etat civil
                </label>
                <FormControl
                  classes={{root: classes.root}}
                  variant="standard"
                  sx={{m: 1, height: 35, minWidth: 250, margin: 0}}>
                  <Select
                    value={values.maritalStatus}
                    name="maritalStatus"
                    onChange={handleChange}
                    // className={classes.select}
                    className={
                      errors.maritalStatus && touched.maritalStatus
                        ? `${classes.select} error_input`
                        : classes.select
                    }
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
                Si vous êtes fumeur et exercez une profession à haut risque,
                vous vous situez dans une classe de risque supérieure par
                rapport à une personne non-fumeuse avec un travail sans danger.
                N'hésitez pas à nous contacter si vous avez des questions.
              </div>

              <div className="user_personal_info_block">
                <div className="user_personal_info_profession-set">
                  <div className="profession_block">
                    <label htmlFor="profession" className="input_label">
                      Profession
                    </label>
                    <input
                      value={values.profession.replace(/[0-9]/g, '')}
                      onChange={handleChange}
                      type="text"
                      name="profession"
                      className={
                        errors.profession && touched.profession
                          ? 'input_field error_input'
                          : 'input_field'
                      }
                    />
                  </div>
                  <div className="percent_block">
                    <label htmlFor="percent" className="input_label">
                      %
                    </label>
                    <input
                      maxLength={3}
                      value={values.percent}
                      onChange={handleChange}
                      type="text"
                      name="percent"
                      className={
                        errors.percent && touched.percent
                          ? 'input_field-percent error_input'
                          : 'input_field-percent'
                      }
                    />
                  </div>
                </div>

                <div className="user_data_inputs_sexe">
                  <div className="input_label">Fumeur</div>
                  <div className="sex_radio_item">
                    <input
                      value="Oui"
                      onChange={handleChange}
                      className="sex_radio_button"
                      name="smoking"
                      id="sexe_hommo"
                      type="radio"
                    />
                    <label
                      className="user_data_inputs_lebel"
                      htmlFor="sexe_hommo">
                      Oui
                    </label>
                  </div>

                  <div className="sex_radio_item">
                    <input
                      value="Non"
                      onChange={handleChange}
                      className="sex_radio_button"
                      name="smoking"
                      id="sexe_femme"
                      type="radio"
                      defaultChecked
                    />
                    <label
                      className="user_data_inputs_lebel"
                      htmlFor="sexe_femme">
                      Non
                    </label>
                  </div>
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
                  Ces différents facteurs servent à déterminer votre profil et
                  peuvent influencer le coût du risque dans votre 3ème pilier.
                  En répondant de manière transparente, nos experts pourront
                  réaliser l’estimation la plus précise possible.
                </div>
                <div className="pop_up_text">
                  Par exemple, si vous êtes fumeur et exercez une profession à
                  haut risque, vous vous situez dans une classe de risque
                  supérieure par rapport à une personne non-fumeuse avec un
                  travail sans danger.
                </div>

                <div className="pop_up_text">
                  Lors de la conclusion du contrat, les données renseignées à
                  l'assureur devront être exactes afin qu'il adapte la
                  proposition à chaque client. En cas d'informations erronées
                  (réticence), l'assureur est en droit d'annuler la police et de
                  réclamer les prestations éventuellement déjà versées.
                </div>
              </div>
            </>
          )}
        </Popup>
      </div>
    </div>
  );
}
