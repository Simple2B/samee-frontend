import React, {ReactElement, useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Popup from 'reactjs-popup';
import {ProgressContext} from '../../context/progressContext';
import './difference.css';

export default function Difference(): ReactElement {
  const history = useHistory();

  const {setProgress} = useContext(ProgressContext);

  useEffect(() => {
    setProgress(4);
  }, []);

  const handleSubmit = () => {
    return history.push('/avantages-3p');
  };

  const handleSubmitCalc = () => {
    setProgress(9);
    return history.push('/statut');
  };
  return (
    <div className="difference">
      <div className="main_content main_contentDifference">
        <div className="difference_title">
          Vous pouvez ouvrir un troisième pilier en banque ou/et en assurance.
          Les deux solutions ont des avantages.
        </div>
        <div className="difference_text">
          <div className="difference_block">
            <div className="difference_block-title">Assurance</div>
            <div className="difference_block_desc">
              <div className="difference_block_desc-img">
                <img
                  src="/image/insurance.png"
                  className="desc-img"
                  alt="Assurance"
                />
              </div>
              <ul className="desc-list">
                <li className="desc-list-item">
                  Capital garanti à la retraite
                </li>
                <li className="desc-list-item">
                  Capital garanti pour vos proches en cas de décès
                </li>
                <li className="desc-list-item">
                  Libération des primes en cas d'invalidité
                </li>
              </ul>
            </div>
          </div>

          <div className="difference_block">
            <div className="difference_block-title">Banque</div>
            <div className="difference_block_desc">
              <div className="difference_block_desc-img">
                <img src="/image/bank.png" className="desc-img" alt="Banque" />
              </div>
              <ul className="desc-list">
                <li className="desc-list-item">Épargne non contractuelle</li>
                <li className="desc-list-item">
                  Possibilité de faire une pause dans les versements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_content">
        <div className="difference_buttons button_position">
          <button onClick={handleSubmit} className="button_discover">
            Découvrir les avantages
          </button>
          <button onClick={handleSubmitCalc} className="button_recalculate">
            Passer directement au calculateur
          </button>
        </div>

        <Popup
          modal
          trigger={
            <div className="pop_up_triger">
              Plus d'informations sur la différence entre banque et assurance
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
                  Plus d'informations sur la différence entre banque et
                  assurance
                </div>
                <div className="pop_up_text">
                  Il est important de savoir que vous pouvez cotiser au 3
                  <sup>ème</sup> piler en banque et en assurance ou choisir une
                  de ces deux solutions.
                </div>
                <div className="pop_up_text">
                  {/* En choisissant un 3<sup>ème</sup> pilier en assurance, vous
                  avez la possibilité, mais pas l’obligation, de bénéficier de
                  ces avantages. Vous pouvez choisir uniquement certains
                  avantages ou tous les avantages. Des frais seront déduits de
                  votre rendement pour assurer ces prestations. Concernant le
                  point 1, la libération du paiement des primes en cas
                  d’invalidité, la personne peut choisir les délais d’attente
                  entre 3,6 ou 12 mois d’attente. Si vous n’êtes plus en mesure
                  de travailler suite à une maladie ou un accident, la compagnie
                  d’assurance paiera vos primes jusqu’à l’âge de votre retraite. */}
                  En choisissant un 3<sup>ème</sup> pilier en assurance, vous
                  avez la possibilité, mais pas l’obligation, de bénéficier de
                  ces avantages. Vous pouvez choisir uniquement certains
                  avantages ou tous les avantages. Des frais seront déduits de
                  votre rendement pour assurer ces prestations. Concernant le
                  point 1, la libération du paiement des primes en cas
                  d’invalidité, la personne peut choisir les délais d’attente
                  entre 3,6 ou 12 mois. Si vous n’êtes plus en mesure de
                  travailler suite à une maladie ou un accident, la compagnie
                  d’assurance paiera vos primes jusqu’à l’âge de votre
                  retraite. 
                </div>
                <div className="pop_up_text">
                  Pour le point 2 , selon votre contrat, vous vous assurez un
                  complément de rente afin d’être sûr d’obtenir 80% de votre
                  salaire actuel au lieu des 60% - 70% couverts par le 1
                  <sup>er</sup> et le 2<sup>ème</sup> pilier.
                </div>

                <div className="pop_up_text">
                  Concernant le point 3, vous pouvez garantir à vos héritiers
                  l’intégralité du montant prévu. Il est impossible de choisir
                  les bénéficiaires ou de modifier l’ordre légal car la loi
                  applique la clause bénéficiaire prévue à cet effet.
                </div>

                <div className="pop_up_text">
                  Voici le détail de la clause bénéficiaires 3A :
                  <ol className="pop_up_list-upper">
                    <li>
                      Le conjoint ou partenaire enregistré (le concubin n’est
                      pas considéré comme conjoint)
                    </li>
                    <li>
                      Les trois points suivants sont au même niveau
                      <ol className="pop_up_list-down">
                        <li>
                          Les descendants directs (enfants, petits-enfants, …)
                          ou personnes à l’entretien desquelles le défunt
                          subvenait de façon prépondérante.{' '}
                        </li>
                        <li>
                          La personne qui avait formé avec le défunt une
                          communauté de vie ininterrompue durant 5 ans minimum
                          immédiatement avant le décès{' '}
                        </li>
                        <li>
                          La personne qui subvient à l’entretien d’enfants
                          communs.{' '}
                        </li>
                      </ol>
                    </li>
                    <li>Les parents</li>
                    <li>Les frères et sœurs</li>
                    <li>Les autres héritiers</li>
                  </ol>
                </div>

                <div className="pop_up_text">
                  Le preneur d’assurance peut modifier l’ordre des trois
                  derniers points et définir leurs droits.
                </div>

                <div className="pop_up_text">
                  {/* Pour le point 4, toutes les compagnies ne le proposent pas, et
                  en général vous pouvez suspendre votre prime durant un ou deux
                  ans non consécutifs. Avec un contrat d’assurance, vous êtes
                  obligé de verser une prime chaque année, ce qui peut être un
                  désavantage comme un avantage, car vous épargnerez pour votre
                  futur et éviterez certaines dépenses plus futiles. */}
                  Pour le point 4, toutes les compagnies ne le proposent pas,
                  et, en général, vous pouvez suspendre votre prime durant un ou
                  deux ans non consécutifs. Avec un contrat d’assurance, vous
                  êtes obligé de verser une prime chaque année, ce qui peut être
                  un désavantage comme un avantage, car vous épargnerez pour
                  votre futur et éviterez certaines dépenses plus futiles.
                </div>
              </div>
            </>
          )}
        </Popup>
      </div>
    </div>
  );
}
