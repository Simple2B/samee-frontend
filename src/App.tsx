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
    {path: '/user-data-birth', name: 'Âge', Component: UserData},
    {path: '/user-age', name: '', Component: Age},
    {path: '/difference-bank-and-insurance', name: '', Component: Difference},
    {path: '/advantages', name: 'Avantages', Component: Advantages},
    {path: '/tax', name: '', Component: Tax},
    {path: '/housing-and-business', name: '', Component: Housing},
    {path: '/abroad', name: '', Component: Abroad},
    {path: '/guarantees', name: '', Component: Guarantees},
    {path: '/occupation', name: 'Emploi', Component: Occupation},
    {path: '/employee', name: '', Component: Employee},
    {path: '/self-employed', name: '', Component: SelfEmployed},
    {path: '/savings-calculation', name: '', Component: SavingCalculation},
    {
      path: '/guarantee-saving-solution',
      name: '',
      Component: GuaranteedSavingSolution,
    },
    {
      path: '/what-is-saving-solution',
      name: '',
      Component: WhatIsGuaranteesSolution,
    },
    {
      path: '/saving-solution-advantages',
      name: '',
      Component: GuaranteesSolutionAdvantages,
    },
    {
      path: '/saving-solution-for-whom',
      name: '',
      Component: GuaranteesSavingSolutionForWhom,
    },
    {
      path: '/half-guarantee-saving-solution',
      name: '',
      Component: HalfGuaranteedSolution,
    },
    {
      path: '/what-is-half-guaranteed-solution',
      name: '',
      Component: WhatIsHalfGuaranteedSolution,
    },
    {
      path: '/half-guaranteed-solution-advantages',
      name: '',
      Component: HalfGuaranteedSolutionAdvantages,
    },
    {
      path: '/half-guaranteed-solution-for-whom',
      name: '',
      Component: HalfGuaranteedSolutionForWhom,
    },
    {
      path: '/choose-solution',
      name: 'Choix des solutions',
      Component: ChooseSolution,
    },
    {
      path: '/saving-guarantee-interest',
      name: '',
      Component: SavingGuaranteeInterest,
    },
    {
      path: '/saving-guarantee-interest-calculation',
      name: '',
      Component: SavingGuaranteeInterestCalc,
    },
    {
      path: '/half-guarantee-interest',
      name: '',
      Component: HalfGuaranteeSolutionInterest,
    },
    {
      path: '/half-guarantee-optimal-proportion',
      name: '',
      Component: HalfGOptimalProportion,
    },
    {path: '/percent-calculation', name: '', Component: PercentCalc},
    {path: '/additional-guaranties', name: '', Component: AdditionalGuaranties},
    {path: '/scenario-calculation', name: '', Component: ScenarioCalc},
    {path: '/modify-parameters', name: '', Component: ModifyParameters},
    {path: '/resume', name: 'Résumé', Component: Resume},
    {
      path: '/resume-saving-solution',
      name: '',
      Component: ResumeSavingSolution,
    },
    {
      path: '/resume-saving-solution-modify',
      name: '',
      Component: ResumeSavingSolutionModify,
    },
    {
      path: '/resume-half-guarantee-solution',
      name: '',
      Component: ResumeHalfSolution,
    },
    {
      path: '/resume-half-guarantee-solution-modify',
      name: '',
      Component: ResumeHalfSolutionModify,
    },
    {
      path: '/user-address-info',
      name: 'Informations personnelles',
      Component: UserAddressInfo,
    },
    {path: '/user-personal-info', name: '', Component: UserPersonalInfo},
    {path: '/user-contact-info', name: '', Component: UserContactInfo},
    {path: '/confirm-code', name: '', Component: ConfirmCode},
    {path: '/final-step', name: '', Component: FinalStep},
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
        {/* <Router> */}
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
                      <div className="page2">
                        <Component />
                      </div>
                    </div>
                  </PathCache>
                </CSSTransition>
              )}
            </Route>
          ))}
          <Footer />
        </div>
        {/* </Router> */}
      </ProgressContext.Provider>
    </>
  );
}

export default App;
