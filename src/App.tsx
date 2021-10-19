import React, {useEffect, useState} from 'react';
import './App.css';
// import StepWizard from "react-step-wizard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import LinearProgress from '@mui/material/LinearProgress';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
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

function App() {
  const [steps, setSteps] = useState([
    {
      id: 1,
      key: 'Welcome',
      label: 'Welcome',
      isDone: true,
      component: Welcome,
    },
    {
      id: 2,
      key: 'UserData',
      label: 'User Data',
      isDone: false,
      component: UserData,
    },
  ]);

  const routes = [
    {path: '/', name: 'Welcome', Component: Welcome},
    {path: '/user-data-birth', name: 'BirthData', Component: UserData},
    {path: '/user-age', name: 'SavingsYears', Component: Age},
    {path: '/difference-bank-and-insurance', name: '', Component: Difference},
    {path: '/advantages', name: '', Component: Advantages},
    {path: '/tax', name: '', Component: Tax},
    {path: '/housing-and-business', name: '', Component: Housing},
    {path: '/abroad', name: '', Component: Abroad},
    {path: '/guarantees', name: '', Component: Guarantees},
    {path: '/occupation', name: '', Component: Occupation},
    {path: '/employee', name: '', Component: Employee},
    {path: '/self-employed', name: 'SavingsYears', Component: SelfEmployed},
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
    {path: '/choose-solution', name: '', Component: ChooseSolution},
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
    {path: '/resume', name: '', Component: Resume},
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
    {path: '/user-address-info', name: '', Component: UserAddressInfo},
    {path: '/user-personal-info', name: '', Component: UserPersonalInfo},
    {path: '/user-contact-info', name: '', Component: UserContactInfo},
    {path: '/confirm-code', name: '', Component: ConfirmCode},
    {path: '/final-step', name: '', Component: FinalStep},
  ];
  const [currentRoute, setCurrentRoute] = useState(1);

  const [nextStep, setNextStep] = useState<string[]>([]);
  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleNext = () => {
    if (steps[steps.length - 1].key === activeStep.key) {
      alert('You have completed all steps.');
      return;
    }

    const index = steps.findIndex(x => x.key === activeStep.key);
    setSteps(prevStep =>
      prevStep.map(x => {
        if (x.key === activeStep.key) x.isDone = true;
        return x;
      }),
    );
    setActiveStep(steps[index + 1]);
  };

  const handleRouteNumberChange = (number: number) => {
    setCurrentRoute(number);
  };

  useEffect(() => {
    const nextStep: any = localStorageApi.getNextStep();
    setNextStep(nextStep);
  }, []);

  return (
    <>
      {/* <ProgressBarWrapper /> */}
      <div className="App">
        <Bar />
        <Router>
          {/* <Route exact path="/final-step">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <FinalStep />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/confirm-code">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <ConfirmCode />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/user-contact-info">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <UserContactInfo />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/user-personal-info">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <UserPersonalInfo />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/user-address-info">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <UserAddressInfo />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/resume-half-guarantee-solution-modify">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <ResumeHalfSolutionModify />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/resume-half-guarantee-solution">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <ResumeHalfSolution />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/resume-saving-solution-modify">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <ResumeSavingSolutionModify />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/resume-saving-solution">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <ResumeSavingSolution />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/resume">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <Resume />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/modify-parameters">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <ModifyParameters />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/scenario-calculation">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <ScenarioCalc />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/additional-guaranties">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <AdditionalGuaranties />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/percent-calculation">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <PercentCalc />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/half-guarantee-optimal-proportion">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <HalfGOptimalProportion />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/half-guarantee-interest">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <HalfGuaranteeSolutionInterest />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/saving-guarantee-interest-calculation">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <SavingGuaranteeInterestCalc />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/saving-guarantee-interest">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <SavingGuaranteeInterest />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/choose-solution">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <ChooseSolution />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/half-guaranteed-solution-for-whom">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <HalfGuaranteedSolutionForWhom />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/half-guaranteed-solution-advantages">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <HalfGuaranteedSolutionAdvantages />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/what-is-half-guaranteed-solution">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <WhatIsHalfGuaranteedSolution />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/half-guarantee-saving-solution">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <HalfGuaranteedSolution />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/saving-solution-for-whom">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <GuaranteesSavingSolutionForWhom />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/saving-solution-advantages">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <GuaranteesSolutionAdvantages />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/what-is-saving-solution">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <WhatIsGuaranteesSolution />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/guarantee-saving-solution">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <GuaranteedSavingSolution />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/savings-calculation">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <SavingCalculation />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/self-employed">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <SelfEmployed />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/employee">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <Employee />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/occupation">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <Occupation />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/guarantees">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <Guarantees />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/abroad">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <Abroad />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/housing-and-business">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <Housing />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/tax">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <Tax />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/advantages">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <Advantages />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/difference-bank-and-insurance">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <Difference />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/user-age">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <Age />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/user-data-birth">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <UserData />
              </CSSTransition>
            )}
          </Route>
          <Route exact path="/">
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit>
                <Welcome />
              </CSSTransition>
            )}
          </Route> */}
          {routes.map(({path, Component}) => (
            <Route key={path} exact path={path}>
              {({match}) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit>
                  <Component />
                </CSSTransition>
              )}
            </Route>
          ))}
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
