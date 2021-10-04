import { Stats } from "fs";
import React, { ReactElement, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { localStorageApi } from "../../helpers/localStorage";
import "./welcome.css";

export default function Welcome(): ReactElement {
  const history = useHistory();

  useEffect(() => {
    localStorageApi.addCurrentStep("/");
    localStorageApi.addNextStep("/user-data-birth");
  }, []);

  const handleSubmit = () => {
    localStorageApi.addCompletedStep("/");
    history.push("/user-data-birth");
  };

  return (
    <div className="welcome">
      <div className="welcome_text">
        <span className="welcome_text_title">Bienvenue,</span>
        <span className="welcome_text_title">
          Ce calculateur vous permet de{" "}
        </span>
        <ul className="welcome_text_list">
          <li className="welcome_text_list_item">
            Comprendre comment vous pouvez{" "}
            <strong>économiser sur vos impôts</strong> tout en{" "}
            <strong>assurant votre avenir.</strong>{" "}
          </li>
          <li className="welcome_text_list_item">
            Trouver par vous-même la solution de 3ème pilier{" "}
            <strong>qui vous correspond.</strong>
          </li>
          <li className="welcome_text_list_item">
            Connaitre les différentes solutions de prévoyances et{" "}
            <strong>combien elles vous rapportent.</strong>{" "}
          </li>
        </ul>
        <button onClick={handleSubmit} className="next_button button_position">
          Continuer
        </button>
      </div>
      <div className="welcome_image">
        <img className="phone_img" src="/image/screen1.png" alt="phone" />
      </div>
    </div>
  );
};
