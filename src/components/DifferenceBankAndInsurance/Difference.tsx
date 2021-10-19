import React, {ReactElement, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import Popup from 'reactjs-popup';
import {ProgressContext} from '../../context/progressContext';
import './difference.css';

export default function Difference(): ReactElement {
  const history = useHistory();

  const {setProgress} = useContext(ProgressContext);

  const handleSubmit = () => {
    setProgress(4);
    return history.push('/advantages');
  };

  const handleSubmitCalc = () => {
    setProgress(9);
    return history.push('/occupation');
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
                  Plus d'information sur la différence entre troisième pilier en
                  banque ou en assurance
                </div>
                <div className="pop_up_text">
                  La première question qu’il faut se poser avant de cotiser au
                  3ème pilier est : « banque ou assurance ? ». Pour y répondre,
                  il est important de bien connaître les différences.
                </div>
                <div className="pop_up_text">
                  Avec un 3ème pilier A en assurance, appelé 3ème pilier lié,
                  vous avez plus de garanties, en cas d’invalidité et en cas de
                  décès. En cas d’invalidité, c’est l’assurance qui prend le
                  relais et s’occupe du paiement de vos primes. Vous pouvez
                  également toucher une rente complémentaire à votre salaire
                  selon votre contrat. En cas de décès, vos proches obtiennent
                  la totalité du 3ème pilier que vous auriez touché à la
                  retraite.
                </div>
                <div className="pop_up_text">
                  Aussi, avec un 3ème pilier en assurance, vous avez la garantie
                  d’obtenir 100% du montant inscrit dans votre contrat, à votre
                  retraite. Au contraire du troisième pilier en banque, celui en
                  assurance est une épargne forcée, ce qui peut représenter un
                  avantage, car au moment de payer vos primes vous n’aurez pas
                  d’hésitation et investirez votre argent dans quelque chose de
                  bénéfique pour vous. Il est aussi possible de ne pas payer la
                  prime si une année est plus difficile et de la rattraper
                  l’année suivante par exemple.
                </div>

                <div className="pop_up_text">
                  Avec un 3ème pilier en banque, vous bénéficiez de plus de
                  flexibilité, car vous n’êtes pas lié à un contrat de versement
                  de primes. Ainsi, si durant une année vous ne souhaitez pas
                  verser de primes, vous êtes libre de le faire. Si vous ne
                  savez pas bien gérer vos finances, ce peut être problématique.
                  Contrairement aux assurances, en cas de décès prématuré, vos
                  proches toucheront uniquement ce qui a été versé. De même, en
                  cas d’invalidité, avec un 3ème pilier en banque, vous ne
                  bénéficiez pas d’une exonération des primes et vous vous
                  retrouvez dans l’incapacité de continuer à cotiser.
                  Finalement, en cas de faillite de la banque, seul 100'000 CHF
                  seraient garantis.
                </div>

                <div className="pop_up_text">
                  En conclusion, même si les deux solutions permettent une
                  économie d’impôts, les assurances sont plus rentables et
                  sécurisées et les banques plus flexibles. En cas de doute,
                  n’hésitez pas à contacter nos experts.
                </div>
              </div>
            </>
          )}
        </Popup>
      </div>
    </div>
  );
}
