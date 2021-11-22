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
    return history.push('/statut');
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
              <button className="close" onClick={close}></button>
              <div className="pop_up">
                <div className="pop_up_title">
                  Plus d'informations sur la différence
                </div>
                <div className="pop_up_text">
                  La première question qu’il faut se poser avant de cotiser au 3
                  <sup>ème</sup> pilier est : « banque ou/ et assurance ? ».
                  Pour y répondre, il est important de bien connaître les
                  différences.
                </div>
                <div className="pop_up_text">
                  1) Avec un 3<sup>ème</sup> pilier en assurance, appelé 3
                  <sup>ème</sup> pilier lié, vous avez plus de garanties, en cas
                  d’invalidité et en cas de décès. En cas d’invalidité, c’est
                  l’assurance qui prend le relais et s’occupe du paiement de vos
                  primes. Vous pouvez également toucher une rente complémentaire
                  à votre salaire selon votre contrat. En cas de décès, vos
                  proches obtiennent la totalité du 3<sup>ème</sup> pilier que
                  vous auriez touché à la retraite. Aussi, avec un 3
                  <sup>ème</sup> pilier en assurance, vous avez la garantie
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
                  2) Avec un 3<sup>ème</sup> pilier en banque, vous bénéficiez
                  de plus de flexibilité, car vous n’êtes pas lié à un contrat
                  de versement de primes. Ainsi, si durant une année vous ne
                  souhaitez pas verser de primes, vous êtes libre de le faire.
                  Si vous ne savez pas bien gérer vos finances, cela peut être
                  problématique. Contrairement aux assurances, en cas de décès
                  prématuré, vos proches toucheront uniquement cela qui a été
                  versé. De même, en cas d’invalidité, avec un 3<sup>ème</sup>{' '}
                  pilier en banque, vous ne bénéficiez pas d’une exonération des
                  primes et vous vous retrouvez dans l’incapacité de continuer à
                  cotiser. Finalement, en cas de faillite de la banque, seul
                  100'000 CHF seraient garantis.
                </div>
                <div className="pop_up_text">
                  {/* En conclusion, même si les deux solutions permettent une
                  économie d’impôts, les assurances sont plus rentables et
                  sécurisées et les banques plus flexibles. En cas de doute,
                  n’hésitez pas à contacter nos experts. Vous avez également la
                  possibilité de placer une partie de votre 3<sup>ème</sup>{' '}
                  pilier en banque et une autre en assurance. */}
                  En conclusion, même si les deux solutions permettent une
                  économie d’impôts, les assurances sont plus rentables et
                  sécurisées et les banques plus flexibles. Vous avez également
                  la possibilité de placer une partie de votre 3<sup>ème</sup>
                   pilier en banque et une autre en assurance. En cas de doute
                  ou de question, n’hésitez pas à contacter nos experts.
                </div>
              </div>
            </>
          )}
        </Popup>
      </div>
    </div>
  );
}
