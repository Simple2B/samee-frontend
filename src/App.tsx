import React, { useEffect, useState } from 'react';
import './App.css';
// import StepWizard from "react-step-wizard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
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
import { localStorageApi } from './helpers/localStorage';
import Occupation from './components/Occupation/Occupation';
import Employee from './components/Employee/Employee';
import SelfEmployed from './components/SelfEmployed/SelfEmployed';


function App() {
  const [steps, setSteps] = useState([
    { id: 1, key: 'Welcome', label: 'Welcome', isDone: true, component: Welcome },
    { id: 2, key: 'UserData', label: 'User Data', isDone: false, component: UserData },
  ]);

  const [nextStep, setNextStep] = useState<string[]>([])
  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleNext = () => {
    if (steps[steps.length - 1].key === activeStep.key) {
      alert('You have completed all steps.');
      return;
    }

    const index = steps.findIndex(x => x.key === activeStep.key);
    setSteps(prevStep => prevStep.map(x => {
      if (x.key === activeStep.key) x.isDone = true;
      return x;
    }))
    setActiveStep(steps[index + 1]);
  }

  useEffect(() => {
    const nextStep: any = localStorageApi.getNextStep();
    setNextStep(nextStep);
  }, [])

  return (
    <>
      <div className="App">
        <Bar />

        <div className="steps">
          <ul className="nav">
            <Stepper activeStep={activeStep.id - 1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label.key}>
                  <StepLabel>{label.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </ul>
        </div>
        <Router>
          <Switch>
            <Route path="/self-employed">
              <SelfEmployed />
            </Route>
            <Route path="/employee">
              <Employee />
            </Route>
            <Route path="/occupation">
              <Occupation />
            </Route>
            <Route path="/guarantees">
              <Guarantees />
            </Route>
            <Route path="/abroad">
              <Abroad />
            </Route>
            <Route path="/housing-and-business">
              <Housing />
            </Route>
            <Route path="/tax">
              <Tax />
            </Route>
            <Route path="/advantages">
              <Advantages />
            </Route>
            <Route path="/difference-bank-and-insurance">
              <Difference />
            </Route>
            <Route path="/user-age">
              <Age />
            </Route>

            <Route path="/user-data-birth">
              {nextStep.includes("/user-data-birth") ?
                <UserData /> :
                (<Redirect to={{ pathname: "/" }} />)}

            </Route>

            <Route exact path="/">
              <Welcome />
            </Route>
          </Switch>
        </Router>
        {/* <div className="step-component">
        {activeStep.component(0)}
      </div>
      <div className="btn-component">
        <input className="next_button" type="button" value={steps[steps.length - 1].key !== activeStep.key ? 'Continuer' : 'Submit'} onClick={handleNext} />
      </div> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
