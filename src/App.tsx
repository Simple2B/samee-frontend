import React, { useEffect, useState } from "react";
import "./App.css";
// import StepWizard from "react-step-wizard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Bar from "./components/Bar/Bar";
import Footer from "./components/Footer/Footer";
import Welcome from "./components/Welcome/Welcome";
import UserData from "./components/UserData/UserData";
import Age from "./components/Age/Age";
import Difference from "./components/DifferenceBankAndInsurance/Difference";
import Advantages from "./components/Advantages/Advantages";
import Tax from "./components/Tax/Tax";
import Housing from "./components/Housing/Housing";
import Abroad from "./components/Abroad/Abroad";
import Guarantees from "./components/Guarantees/Guarantees";
import { localStorageApi } from "./helpers/localStorage";
import Occupation from "./components/Occupation/Occupation";
import Employee from "./components/Employee/Employee";
import SelfEmployed from "./components/SelfEmployed/SelfEmployed";
import SavingCalculation from "./components/SavingCalculation/SavingCalculation";
import GuaranteedSavingSolution from "./components/GuaranteedSavingSolution/GuaranteedSavingSolution";
import WhatIsGuaranteesSolution from "./components/WhatIsGuaranteesSolution/WhatIsGuaranteesSolution";
import GuaranteesSolutionAdvantages from "./components/GuaranteesSolutionAdvantages/GuaranteesSolutionAdvantages";
import GuaranteesSavingSolutionForWhom from "./components/GuaranteesSavingSolutionForWhom/GuaranteesSavingSolutionForWhom";
import HalfGuaranteedSolution from "./components/HalfGuaranteedSolution/HalfGuaranteedSolution";
import WhatIsHalfGuaranteedSolution from "./components/WhatIsHalfGuaranteedSolution/WhatIsHalfGuaranteedSolution";
import HalfGuaranteedSolutionAdvantages from "./components/HalfGuaranteedSolutionAdvantages/HalfGuaranteedSolutionAdvantages";
import HalfGuaranteedSolutionForWhom from "./components/HalfGuaranteedSolutionForWhom/HalfGuaranteedSolutionForWhom";
import InvestmentSolution from "./components/InvestmentSolution/InvestmentSolution";
import WhatIsInvestmentSolution from "./components/WhatIsInvestmentSolution/WhatIsInvestmentSolution";
import InvestmentSolutionAdvantages from "./components/InvestmentSolutionAdvantages/InvestmentSolutionAdvantages";
import InvestmentSolutionForWhom from "./components/InvestmentSolutionForWhom/InvestmentSolutionForWhom";
import ChooseSolution from "./components/ChooseSolution/ChooseSolution";
import SavingGuaranteeInterest from "./components/SavingGuaranteeInterest/SavingGuaranteeInterest";
import SavingGuaranteeInterestCalc from "./components/SavingGuaranteeInterestCalc/SavingGuaranteeInterestCalc";
import HalfGuaranteeSolutionInterest from "./components/HalfGuaranteeSolutionInterest/HalfGuaranteeSolutionInterest";
import HalfGOptimalProportion from "./components/HalfGOptimalProportion/HalfGOptimalProportion";
import PercentCalc from "./components/PercentCalc/PercentCalc";
import AdditionalGuaranties from "./components/AdditionalGuaranties/AdditionalGuaranties";
import ScenarioCalc from "./components/ScenarioCalc/ScenarioCalc";
import ModifyParameters from "./components/ModifyParameters/ModifyParameters";

function App() {
  const [steps, setSteps] = useState([
    {
      id: 1,
      key: "Welcome",
      label: "Welcome",
      isDone: true,
      component: Welcome,
    },
    {
      id: 2,
      key: "UserData",
      label: "User Data",
      isDone: false,
      component: UserData,
    },
  ]);

  const [nextStep, setNextStep] = useState<string[]>([]);
  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleNext = () => {
    if (steps[steps.length - 1].key === activeStep.key) {
      alert("You have completed all steps.");
      return;
    }

    const index = steps.findIndex((x) => x.key === activeStep.key);
    setSteps((prevStep) =>
      prevStep.map((x) => {
        if (x.key === activeStep.key) x.isDone = true;
        return x;
      })
    );
    setActiveStep(steps[index + 1]);
  };

  useEffect(() => {
    const nextStep: any = localStorageApi.getNextStep();
    setNextStep(nextStep);
  }, []);

  return (
    <>
      <div className="App">
        <Bar />

        <div className="steps">
          <ul className="nav">
            {/* <Stepper activeStep={activeStep.id - 1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label.key}>
                  <StepLabel>{label.label}</StepLabel>
                </Step>
              ))}
            </Stepper> */}
          </ul>
        </div>
        <Router>
          <Switch>
            <Route path="/modify-parameters">
              <ModifyParameters />
            </Route>
            <Route path="/scenario-calculation">
              <ScenarioCalc />
            </Route>
            <Route path="/additional-guaranties">
              <AdditionalGuaranties />
            </Route>
            <Route path="/percent-calculation">
              <PercentCalc />
            </Route>
            <Route path="/half-guarantee-optimal-proportion">
              <HalfGOptimalProportion />
            </Route>
            <Route path="/half-guarantee-interest">
              <HalfGuaranteeSolutionInterest />
            </Route>
            <Route path="/saving-guarantee-interest-calculation">
              <SavingGuaranteeInterestCalc />
            </Route>
            <Route path="/saving-guarantee-interest">
              <SavingGuaranteeInterest />
            </Route>
            <Route path="/choose-solution">
              <ChooseSolution />
            </Route>
            <Route path="/investment-solution-for-whom">
              <InvestmentSolutionForWhom />
            </Route>
            <Route path="/investment-solution-advantages">
              <InvestmentSolutionAdvantages />
            </Route>
            <Route path="/what-is-investment-solution">
              <WhatIsInvestmentSolution />
            </Route>
            <Route path="/investment-solution">
              <InvestmentSolution />
            </Route>
            <Route path="/half-guaranteed-solution-for-whom">
              <HalfGuaranteedSolutionForWhom />
            </Route>
            <Route path="/half-guaranteed-solution-advantages">
              <HalfGuaranteedSolutionAdvantages />
            </Route>
            <Route path="/what-is-half-guaranteed-solution">
              <WhatIsHalfGuaranteedSolution />
            </Route>
            <Route path="/half-guarantee-saving-solution">
              <HalfGuaranteedSolution />
            </Route>
            <Route path="/saving-solution-for-whom">
              <GuaranteesSavingSolutionForWhom />
            </Route>
            <Route path="/saving-solution-advantages">
              <GuaranteesSolutionAdvantages />
            </Route>
            <Route path="/what-is-saving-solution">
              <WhatIsGuaranteesSolution />
            </Route>
            <Route path="/guarantee-saving-solution">
              <GuaranteedSavingSolution />
            </Route>
            <Route path="/savings-calculation">
              <SavingCalculation />
            </Route>
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
              {nextStep.includes("/user-data-birth") ? (
                <UserData />
              ) : (
                <Redirect to={{ pathname: "/" }} />
              )}
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
