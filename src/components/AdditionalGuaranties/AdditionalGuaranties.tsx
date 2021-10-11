import zIndex from '@mui/material/styles/zIndex';
import React, {ReactElement} from 'react';
import {useHistory} from 'react-router-dom';
import Popup from 'reactjs-popup';
import './additionalGuaranties.css';

export default function AdditionalGuaranties(): ReactElement {
  const history = useHistory();

  const handleSubmit = () => {
    return history.push('/choose-solution');
  };

  return (
    <div className="additional-guaranties">
      <div className="additional-guaranties_title gold_text">
        Obtenir des garanties supplémentaires
      </div>

      <div className="additional-guaranties_text">
        Pour se protéger et protéger sa famille en cas d'imprévus
      </div>

      <div className="additional-guaranties_text">
        1. Une rente supplémentaire en cas d'invalidité{`\n`}
        En cas d'invalidité maladie, vous perdez jusqu'à 40% de votre salaire.
        En cotisant seulement 100 CHF par mois sur votre troisième pilier, vous
        pouvez vous assurer une rente supplémentaire de 1'000 franc par mois en
        cas d'incident tout en économisant sur vos impôts et épargnant pour
        votre retraite.
      </div>

      <div className="additional-guaranties_text">
        2. Un capital garanti{`\n`}
        En cas d'invalidité suite à une maladie ou à un accident, votre
        assurance prendra le relais du paiement de vos primes de troisième
        pilier. Vous avez ainsi la garantie de recevoir, à votre retraite, le
        100% du montant fixé dans votre contrat.
      </div>

      <button onClick={handleSubmit} className="next_button button_position">
        Continuer
      </button>

      <Popup
        modal
        trigger={
          <div className="pop_up_triger">
            Mieux comprendre les garanties possibles
          </div>
        }>
        {(
          close:
            | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
            | undefined,
        ) => (
          <>
            <button className="close" onClick={close}>
              X
            </button>
            <div className="pop_up">
              <div className="pop_up_title">
                Mieux comprendre les garanties possibles
              </div>
              <div className="pop_up_text">
                Prenons l'exemple de Samy, un jeune homme de 24 ans qui n'a pas
                encore souscrit de 3ème pilier et qui touche un salaire mensuel
                de 5'000 CHF. Si une maladie qui l'empêche de travailler le
                touche, il sera fortement impacté, car il ne recevra qu'environ
                60% de son salaire par la rente d'invalidité LPP et la rente
                d'invalidité de l'AI. Dans le cas où il aurait souscrit à un
                troisième pilier en assurance comprenant une rente en cas
                d'invalidité, il se serait garanti jusqu'à 1'500 CHF en plus des
                rentes d'invalidité LPP et AI. Il est possible de se couvrir
                pour ce genre de situation en cotisant au minimum 100CHF au 3ème
                pilier.
              </div>
              <div className="pop_up_text">
                Pour illustrer le capital garanti, prenons l'exemple de Marlène,
                femme de 38 ans et mère célibataire de deux enfants, qui a
                choisi de cotiser au 3ème pilier en banque. En cas de décès, les
                enfants de Marlène toucheront uniquement le montant qu'elle a
                cotisé à la banque. Au contraire, si elle avait souscrit un
                troisième pilier en assurance, Marlène aurait garanti à ses
                enfants l'entièreté du montant prévu à sa retraite. Le troisième
                pilier en assurance est une façon de mettre ses proches à
                l’abri.
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  );
}
