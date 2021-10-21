import React, {ReactElement, useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {ProgressContext} from '../../context/progressContext';
import './advantages.css';

export default function Advantages(): ReactElement {
  const history = useHistory();
  const {setProgress} = useContext(ProgressContext);

  useEffect(() => {
    setProgress(5);
  }, []);

  const handleSubmit = () => {
    return history.push('/tax');
  };
  return (
    <div className="advantages">
      <div className="main_content">
        <div className="advantages-title">
          Les avantages de ces deux solutions sont:
        </div>

        <ul className="advantages_list">
          <li className="advantages_list-item">
            Économie fiscale chaque année
          </li>
          <li className="advantages_list-item">
            Logement personnel et création d'entreprise
          </li>
          <li className="advantages_list-item">
            Départ à l'étranger et retraite en sécurité
          </li>
        </ul>
      </div>

      <div className="footer_content">
        <button onClick={handleSubmit} className="next_button button_position">
          Continuer
        </button>
      </div>
    </div>
  );
}
