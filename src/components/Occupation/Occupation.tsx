import React, { ReactElement, useState } from "react";
import { useHistory } from "react-router-dom";
import Popup from "reactjs-popup";
import "./occupation.css";

export default function Occupation(): ReactElement {
  const [occupation, setOccupation] = useState("");

  const history = useHistory();

  const handleSubmit = () => {
    localStorage.setItem("occupation", occupation);
    if (occupation === "Salarié") {
      return history.push("/employee");
    } else if (occupation === "Indépendant") {
      return history.push("/self-employed");
    }
  };

  return (
    <div className="occupation">
      <div className="occupation_title">
        Afin de savoir jusqu'à quel montant vous pouvez verser annuellement,
        nous devons savoir si vous êtes :
      </div>

      <div className="occupation_inputs">
        <div className="occupation_radio_button">
          <input
            name="occupation"
            value={occupation}
            onChange={(e) => {
              setOccupation("Salarié");
            }}
            id="input_employee"
            type="radio"
          />
          <label className="occupation_label" htmlFor="input_employee">
            Salarié
        </label>
        </div>

        <div className="occupation_radio_button">
          <input
            name="occupation"
            value={occupation}
            onChange={(e) => {
              setOccupation("Indépendant");
            }}
            id="input_independent"
            type="radio"
          />
          <label className="occupation_label" htmlFor="input_independent">
            Indépendant
        </label>
        </div>

      </div>

      <button
        disabled={occupation === ""}
        onClick={handleSubmit}
        className="next_button button_position"
      >
        Continuer
      </button>

      <Popup
        modal
        trigger={<div className="pop_up_triger">Quelle est la différence?</div>}
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
                Troisième pilier: les différences entre salarié et indépendant
              </div>
              <div className="pop_up_text">
                Il est important pour nous de savoir si vous êtes salarié ou
                indépendant car la cotisation au 3ème pilier est différente.{" "}
              </div>
              <div className="pop_up_text">
                Dans le cas d’un salarié, vous pouvez économiser jusqu’à 6883
                CHF par an.
              </div>
              <div className="pop_up_text">
                Dans le cas d’un indépendant, comme le 2ème pilier n’est pas
                obligatoire, s’il décide de ne pas y souscrire, il a la
                possibilité de verser 34’416 CHF ou jusqu’à 20% de son salaire
                AVS dans un 3ème pilier. Si un indépendant est affilié au 2ème
                pilier, la cotisatin maximale de son 3ème pilier sera la même
                que celle d’un salarié.
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  );
};
