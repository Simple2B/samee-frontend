import React, {ReactElement, useContext} from 'react';
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Popup from 'reactjs-popup';
import {ProgressContext} from '../../context/progressContext';
import './guarantees.css';

export default function Guarantees(): ReactElement {
  const history = useHistory();
  const {setProgress} = useContext(ProgressContext);

  useEffect(() => {
    setProgress(9);
  }, []);

  const handleSubmit = () => {
    return history.push('/occupation');
  };
  return (
    <div className="guarantees">
      <div className="main_content">
        <div className="guarantees_title">
          Contrairement à une banque, une assurance peut vous proposer plus de
          garanties:{' '}
        </div>
        <ol className="guarantees_list">
          <li className="guarantees_list-item">
            s'occupe du paiement de vos primes en cas d'invalidité{' '}
          </li>
          <li className="guarantees_list-item">
            permet l'obtention d'une rente complémentaire à votre salaire en cas
            d'invalidité
          </li>
          <li className="guarantees_list-item">
            garantit la totalité du 3ème pilier que vous auriez touché à la
            retraite pour vos proches en cas de décès.{' '}
          </li>
          <li className="guarantees_list-item">
            {' '}
            offre la possibilité de ne pas payer la prime si une année est plus
            difficile.{' '}
          </li>
        </ol>

        <div className="guarantees_text">
          En revanche, la solution en banque est plus flexible, car vous n'êtes
          pas lié à un contrat de versement de primes.
        </div>
      </div>

      <div className="footer_content">
        <button onClick={handleSubmit} className="next_button button_position">
          Passer au calculateur
        </button>

        <Popup
          modal
          trigger={
            <div className="pop_up_triger">
              Plus d'informations sur la différence
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
              <button className="close" onClick={close}>
                X
              </button>
              <div className="pop_up">
                <div className="pop_up_title">
                  Plus d'informations sur la différence entre banque et
                  assurance
                </div>
                <div className="pop_up_text">
                  En choisissant un 3ème pilier en assurance,
                  vous avez la possibilité, mais pas l’obligation,
                  de bénéficier de ces avantages.
                  Vous pouvez choisir uniquement certains avantages ou tous les avantages.
                  Des frais seront déduits de votre rendement pour assurer ces prestations.
                  Concernant le point 1, la libération du paiement des primes en cas d’invalidité,
                  la personne peut choisir les délais d’attente entre 3,6 ou 12 mois.
                  Si vous n’êtes plus en mesure de travailler suite à une maladie ou un accident,
                  la compagnie d’assurance paiera vos primes jusqu’à l’âge de votre retraite. 
                </div>
                <div className="pop_up_text">
                  Concernant le point 1, la libération du paiement des primes en
                  cas d’invalidité, la personne peut choisir les délais
                  d’attente entre 3,6 ou 12 mois d’attente.
                </div>
                <div className="pop_up_text">
                  Si vous n’êtes plus en mesure de travailler suite à une
                  maladie ou un accident, la compagnie d’assurance paiera vos
                  primes jusqu’à l’âge de votre retraite.
                </div>
                <div className="pop_up_text">
                  Pour le point 2 , selon votre contrat, vous vous assurez un
                  complément de rente afin d’être sûr d’obtenir 80% de votre
                  salaire actuel au lieu des 60%- 70% couverts par le 1er et le
                  2ème pilier.
                </div>
                <div className="pop_up_text">
                  Concernant le point 3, vous pouvez garantir à vos héritiers
                  l’intégralité du montant prévu. Il est impossible de choisir
                  les bénéficiaires ou de modifier l’ordre légal car la loi
                  applique la clause bénéficiaire prévue à cet effet.
                </div>
                <div className="pop_up_text">
                  Voici le détail de la clause bénéficiaires 3A :
                </div>

                <div className="pop_up_text">
                  Le conjoint ou partenaire enregistré (le concubin n’est pas
                  considéré comme conjoint)
                </div>
                <div className="pop_up_text">
                  Les trois points suivants sont au même niveau
                </div>
                <div className="pop_up_text">
                  Les descendants directs (enfants, petits-enfants, …) ou
                  personnes à l’entretien desquelles le défunt subvenait de
                  façon prépondérante.
                </div>
                <div className="pop_up_text">
                  La personne qui avait formé avec le défunt une communauté de
                  vie ininterrompue durant 5 ans minimum immédiatement avant le
                  décès
                </div>
                <div className="pop_up_text">
                  La personne qui subvient à l’entretien d’enfants communs.
                </div>
                <div className="pop_up_text">Les parents</div>
                <div className="pop_up_text">Les frères et sœurs</div>
                <div className="pop_up_text">Les autres héritiers</div>
                <div className="pop_up_text">
                  Le preneur d’assurance peut modifier l’ordre des trois
                  derniers points et définir leurs droits.
                </div>

                <div className="pop_up_text">
                  Pour le point 4, toutes les compagnies ne le proposent pas,
                  et, en général, vous pouvez suspendre votre prime durant un ou deux ans non consécutifs.
                  Avec un contrat d’assurance, vous êtes obligé de verser une prime chaque année,
                  ce qui peut être un désavantage comme un avantage, car vous épargnerez pour votre
                  futur et éviterez certaines dépenses plus futiles.
                </div>
                <div className="pop_up_text">
                  Avec un contrat d’assurance, vous êtes obligé de verser une
                  prime chaque année, ce qui peut être un désavantage comme un
                  avantage, car vous épargnerez pour votre futur et éviterez
                  certaines dépenses plus futiles.
                </div>
              </div>
            </>
          )}
        </Popup>
      </div>
    </div>
  );
}
