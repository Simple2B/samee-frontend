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
      <div className="main_content">
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
                  En choisissant un 3<sup>ème</sup> pilier en assurance, vous
                  avez la possibilité, mais pas l’obligation, de bénéficier de
                  ces avantages. Vous pouvez choisir uniquement certains
                  avantages ou tous les avantages. Des frais seront déduits de
                  votre rendement pour assurer ces prestations. Concernant le
                  point 1, la libération du paiement des primes en cas
                  d’invalidité, la personne peut choisir les délais d’attente
                  entre 3,6 ou 12 mois d’attente. Si vous n’êtes plus en mesure
                  de travailler suite à une maladie ou un accident, la compagnie
                  d’assurance paiera vos primes jusqu’à l’âge de votre retraite.
                </div>
                <div className="pop_up_text">
                  Aussi, avec un 3ème pilier en assurance, vous avez la
                  garanties d’obtenir 100% du montant inscrit dans votre
                  contrat, à votre retraite. Au contraire du troisième pilier en
                  banque, celui en assurance est une épargne forcée, ce qui peut
                  représenter un avantage, car au moment de payer vos primes
                  vous n’aurez pas d’hésitation et investirez votre argent dans
                  quelque chose de bénéfique pour vous. Il est aussi possible de
                  ne pas payer la prime si une année est plus difficile et de la
                  rattraper l’année suivante par exemple.
                </div>

                <div className="pop_up_text">
                  Avec un 3ème pilier en banque, vous bénéficiez de plus de
                  flexibilité, car vous n’êtes pas lié à un contrat de versement
                  de primes. Ainsi, si durant une année vous ne souhaitez pas
                  verser de primes, vous êtes libre de le faire. Si vous ne
                  savez pas bien gérer vos finances, cela peut être
                  problématique. Contrairement aux assurances, en cas de décès
                  prématuré, vos proches toucheront uniquement ce qui a été
                  versé. De même, en cas d’invalidité, avec un 3ème pilier en
                  banque, vous ne bénéficiez pas d’une exonération des primes et
                  vous vous retrouvez dans l’incapacité de continuer à cotiser.
                  En conclusion, même si les deux solutions permettent une
                  économie d’impôts, les assurances sont plus rentables et
                  sécurisées et les banques plus flexibles. Vous avez également
                  la possibilité de placer une partie de votre 3ème  pilier en
                  banque et une autre en assurance. En cas de doute ou de
                  question, n’hésitez pas à contacter nos experts.
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
                  Pour le point 4, toutes les compagnies ne le proposent pas, et
                  en général vous pouvez suspendre votre prime durant un ou deux
                  ans non consécutifs. Avec un contrat d’assurance, vous êtes
                  obligé de verser une prime chaque année, ce qui peut être un
                  désavantage comme un avantage, car vous épargnerez pour votre
                  futur et éviterez certaines dépenses plus futiles.
                </div>
              </div>
            </>
          )}
        </Popup>
      </div>
    </div>
  );
}
