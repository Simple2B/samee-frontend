import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Popup from "reactjs-popup";
import { localStorageApi } from "../../helpers/localStorage";
import "./userData.css";


export default function UserData(): ReactElement {
  const [sex, setSex] = useState("");
  const [date, setDate] = useState<any>();
  const [error, setError] = useState('');

  const history = useHistory();

  useEffect(() => {
    localStorageApi.addCurrentStep("/user-data-birth");
  }, []);

  const handleSubmit = () => {
    if (sex === '' || date === '') {
      setError('veuillez renseigner les informations')
    } else {
      setError('')
      localStorage.setItem("sex", sex);
      localStorage.setItem("date", date);
      localStorageApi.addCompletedStep("/user-data-birth");
      return history.push("/user-age");
    }

  };

  return (
    <div className="user_data">
      <div className="user_data_text">
        Pour estimer le nombre d’années pendant lesquelles vous épargnerez au
        3ème pilier, veuillez renseigner ces informations.
      </div>

      <div className="user_data_inputs_sexe">
        <p className="sexe_lebel">Sexe: </p>
        <div className="sex_radio_item">
          <input
            className="sex_radio_button"
            name="sexe"
            value={sex}
            onChange={(e) => {
              setSex("Homme");
            }}
            id="sexe_hommo"
            type="radio"
          />
          <label className="user_data_inputs_lebel" htmlFor="sexe_hommo">
            Homme
          </label>
        </div>

        <div className="sex_radio_item">
          <input
            className="sex_radio_button"
            name="sexe"
            value={sex}
            onChange={(e) => {
              setSex("Femme");
            }}
            id="sexe_femme"
            type="radio"
          />
          <label className="user_data_inputs_lebel" htmlFor="sexe_femme">
            Femme
          </label>
        </div>
      </div>

      <div className="user_data_inputs_birth">
        <p className="age_lebel">Âge: </p>

        <input
          className="user_data_input"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          id="age"
          type="date"
        />
      </div>

      <div className="text_error">
        {error}
      </div>
      <button
        onClick={handleSubmit}
        className="next_button button_position"
      >
        Continuer
      </button>
      <Popup
        modal
        trigger={
          <div className="pop_up_triger">
            Pourquoi ces données sont-elles essentielles?
          </div>
        }
      >
        {(
          close:
            | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
            | undefined
        ) => (
          <>
            <button className="close" onClick={close}>
              X
            </button>
            <div className="pop_up">
              <div className="pop_up_title">
                Pourquoi ces données sont-elles essentielles ?
              </div>
              <div className="pop_up_text">
                Vous avez la possibilité d’épargner pour votre troisième pilier
                jusqu’à l’âge de la retraite AVS. Pour les femmes, il est fixé à
                64 ans et pour les hommes, à 65 ans. Nous calculons donc la
                différence entre l’âge officiel de la retraite et le vôtre, pour
                obtenir le nombre d’années durant lesquelles vous pourrez
                épargner.
              </div>
              <div className="pop_up_text">
                Vous pouvez cotiser à un 3ème pilier à partir de 18 ans à
                condition que vous disposiez d’un revenu soumis à l’AVS. Tout
                individu travaillant et payant ses impôts en Suisse peut cotiser
                au 3ème pilier, travailleurs frontaliers inclus.{" "}
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  );
}
