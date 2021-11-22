import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useHistory,
} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Bar from './components/Bar/Bar';
import Footer from './components/Footer/Footer';
import Welcome from './components/Welcome/Welcome';
import UserData from './components/UserData/UserData';
import Age from './components/Age/Age';
import Difference from './components/DifferenceBankAndInsurance/Difference';
import Advantages from './components/Advantages/Advantages';
import Tax from './components/Tax/Tax';
import Housing from './components/Housing/Housing';
import Abroad from './components/Abroad/Abroad';
import Guarantees from './components/Guarantees/Guarantees';
import {localStorageApi} from './helpers/localStorage';
import Occupation from './components/Occupation/Occupation';
import Employee from './components/Employee/Employee';
import SelfEmployed from './components/SelfEmployed/SelfEmployed';
import SavingCalculation from './components/SavingCalculation/SavingCalculation';
import GuaranteedSavingSolution from './components/GuaranteedSavingSolution/GuaranteedSavingSolution';
import WhatIsGuaranteesSolution from './components/WhatIsGuaranteesSolution/WhatIsGuaranteesSolution';
import GuaranteesSolutionAdvantages from './components/GuaranteesSolutionAdvantages/GuaranteesSolutionAdvantages';
import GuaranteesSavingSolutionForWhom from './components/GuaranteesSavingSolutionForWhom/GuaranteesSavingSolutionForWhom';
import HalfGuaranteedSolution from './components/HalfGuaranteedSolution/HalfGuaranteedSolution';
import WhatIsHalfGuaranteedSolution from './components/WhatIsHalfGuaranteedSolution/WhatIsHalfGuaranteedSolution';
import HalfGuaranteedSolutionAdvantages from './components/HalfGuaranteedSolutionAdvantages/HalfGuaranteedSolutionAdvantages';
import HalfGuaranteedSolutionForWhom from './components/HalfGuaranteedSolutionForWhom/HalfGuaranteedSolutionForWhom';
import ChooseSolution from './components/ChooseSolution/ChooseSolution';
import SavingGuaranteeInterest from './components/SavingGuaranteeInterest/SavingGuaranteeInterest';
import SavingGuaranteeInterestCalc from './components/SavingGuaranteeInterestCalc/SavingGuaranteeInterestCalc';
import HalfGuaranteeSolutionInterest from './components/HalfGuaranteeSolutionInterest/HalfGuaranteeSolutionInterest';
import HalfGOptimalProportion from './components/HalfGOptimalProportion/HalfGOptimalProportion';
import PercentCalc from './components/PercentCalc/PercentCalc';
import AdditionalGuaranties from './components/AdditionalGuaranties/AdditionalGuaranties';
import ScenarioCalc from './components/ScenarioCalc/ScenarioCalc';
import ModifyParameters from './components/ModifyParameters/ModifyParameters';
import Resume from './components/Resume/Resume';
import ResumeSavingSolution from './components/ResumeSavingSolution/ResumeSavingSolution';
import ResumeSavingSolutionModify from './components/ResumeSavingSolutionModify/ResumeSavingSolutionModify';
import ResumeHalfSolution from './components/ResumeHalfSolution/ResumeHalfSolution';
import ResumeHalfSolutionModify from './components/ResumeHalfSolutionModify/ResumeHalfSolutionModify';
import UserAddressInfo from './components/UserAddressInfo/UserAddressInfo';
import UserPersonalInfo from './components/UserPersonalInfo/UserPersonalInfo';
import UserContactInfo from './components/UserContactInfo/UserContactInfo';
import ConfirmCode from './components/ConfirmCode/ConfirmCode';
import FinalStep from './components/FinalStep/FinalStep';
import ProgressBarWrapper from './components/ProgressBarWrapper/ProgressBarWrapper';
import {ProgressContext} from './context/progressContext';
import {useCookies} from 'react-cookie';
import PathCache from './components/pathCache';

function App() {
  const [steps, setSteps] = useState<number>(0);

  const location = useLocation();
  const history = useHistory();
  const [path, setPath] = useState(location.pathname);

  const handleStepChange = (value: number) => {
    setSteps(value);
  };

  const handlePath = () => {
    const currentPath = localStorage.getItem('currentPath');
    console.log(currentPath);
    if (currentPath) {
      history.push(currentPath);
    }
  };

  const saveLastPath = useCallback(() => {
    const currentPath = location.pathname;
    console.log('saveLastPath', currentPath);
    localStorage.setItem('currentPath', currentPath);
  }, [location.pathname]);

  useEffect(() => {
    handlePath();
  }, []);

  useEffect(() => {
    saveLastPath();
  }, [saveLastPath]);

  const routes = [
    {path: '/', name: '', Component: Welcome},
    {path: '/age', name: 'Âge', Component: UserData},
    {path: '/duree', name: '', Component: Age},
    //  differences-assurance-banque -> garanties
    {path: '/garanties', name: '', Component: Difference},
    {path: '/avantages-3p', name: 'Avantages', Component: Advantages},
    {path: '/impots', name: '', Component: Tax},
    {path: '/logement-et-entreprise', name: '', Component: Housing},
    {path: '/retraite-et-depart', name: '', Component: Abroad},
    //  garanties -> differences-assurance-banque
    {path: '/differences-assurance-banque', name: '', Component: Guarantees},
    {path: '/statut', name: 'Emploi', Component: Occupation},
    {path: '/salarie', name: '', Component: Employee},
    {path: '/independant', name: '', Component: SelfEmployed},
    {path: '/economies', name: '', Component: SavingCalculation},
    {
      path: '/solution-epargne',
      name: '',
      Component: GuaranteedSavingSolution,
    },
    {
      path: '/definition-solution-epargne',
      name: '',
      Component: WhatIsGuaranteesSolution,
    },
    {
      path: '/avantages-solution-epargne',
      name: '',
      Component: GuaranteesSolutionAdvantages,
    },
    {
      path: '/qui-solution-epargne',
      name: '',
      Component: GuaranteesSavingSolutionForWhom,
    },
    {
      path: '/solution-mi-garantie-mi-rendement',
      name: '',
      Component: HalfGuaranteedSolution,
    },
    {
      path: '/definition-solution-mi-garantie-mi-rendement',
      name: '',
      Component: WhatIsHalfGuaranteedSolution,
    },
    {
      path: '/avantages-solution-mi-garantie-mi-rendement',
      name: '',
      Component: HalfGuaranteedSolutionAdvantages,
    },
    {
      path: '/qui-solution-mi-garantie-mi-rendement',
      name: '',
      Component: HalfGuaranteedSolutionForWhom,
    },
    {
      path: '/choix-solution',
      name: 'Choix des solutions',
      Component: ChooseSolution,
    },
    {
      path: '/epargne-taux',
      name: '',
      Component: SavingGuaranteeInterest,
    },
    {
      path: '/epargne-calcul',
      name: '',
      Component: SavingGuaranteeInterestCalc,
    },
    {
      path: '/mi-garantie-mi-rendement-taux',
      name: '',
      Component: HalfGuaranteeSolutionInterest,
    },
    {
      path: '/mi-garantie-mi-rendement-proportion',
      name: '',
      Component: HalfGOptimalProportion,
    },
    {
      path: '/mi-garantie-mi-rendement-calcul',
      name: '',
      Component: PercentCalc,
    },
    {
      path: '/garanties-supplementaires',
      name: '',
      Component: AdditionalGuaranties,
    },
    {
      path: '/mi-garantie-mi-rendement-scenario',
      name: '',
      Component: ScenarioCalc,
    },
    {
      path: '/mi-garantie-mi-rendement-recalcul',
      name: '',
      Component: ModifyParameters,
    },
    {path: '/resume', name: 'Résumé', Component: Resume},
    {
      path: '/resume-epargne',
      name: '',
      Component: ResumeSavingSolution,
    },
    {
      path: '/resume-epargne-recalcul',
      name: '',
      Component: ResumeSavingSolutionModify,
    },
    {
      path: '/resume-mi-garantie-mi-rendement',
      name: '',
      Component: ResumeHalfSolution,
    },
    {
      path: '/resume-mi-garantie-mi-rendement-recalcul',
      name: '',
      Component: ResumeHalfSolutionModify,
    },
    {
      path: '/informations-adresse',
      name: 'Informations personnelles',
      Component: UserAddressInfo,
    },
    {path: '/informations-profession', name: '', Component: UserPersonalInfo},
    {path: '/informations-contact', name: '', Component: UserContactInfo},
    {path: '/confirmation-code', name: '', Component: ConfirmCode},
    {path: '/etape-finale', name: '', Component: FinalStep},
  ];

  useEffect(() => {
    const nextStep: any = localStorageApi.getNextStep();
    // setNextStep(nextStep);
  }, []);

  return (
    <>
      <ProgressContext.Provider
        value={{
          progress: steps,
          setProgress: handleStepChange,
        }}>
        <ProgressBarWrapper />
        <div className="App">
          <Bar />
          {routes.map(({path, Component}) => (
            <Route key={path} exact path={path}>
              {({match}) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit>
                  <PathCache path={path}>
                    <div className="page">
                      <Component />
                    </div>
                  </PathCache>
                </CSSTransition>
              )}
            </Route>
          ))}
          <Footer />
        </div>
      </ProgressContext.Provider>
    </>
  );
}

export default App;
