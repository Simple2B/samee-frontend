let appState;

let appStateObject: {
  currentStep?: string;
  completedSteps?: string[];
  nextStep?: string;
};

export const localStorageApi = {
  addCurrentStep: (step: string) => {
    appState = localStorage.getItem("appState");
    if (appState) {
      appStateObject = JSON.parse(appState);
    } else {
      appStateObject = {};
    }
    appStateObject["currentStep"] = step;
    localStorage.setItem("appState", JSON.stringify(appStateObject));
  },

  addCompletedStep: (step: string) => {
    appState = localStorage.getItem("appState");
    if (appState) {
      appStateObject = JSON.parse(appState);
    } else {
      appStateObject = {};
    }
    if (appStateObject["completedSteps"]) {
      if (!appStateObject["completedSteps"].includes(step)) {
        appStateObject["completedSteps"].push(step);
      } else {
        return;
      }
    } else {
      appStateObject["completedSteps"] = [];
      appStateObject["completedSteps"].push(step);
    }
    localStorage.setItem("appState", JSON.stringify(appStateObject));
  },

  addNextStep: (step: string) => {
    appState = localStorage.getItem("appState");
    if (appState) {
      appStateObject = JSON.parse(appState);
    } else {
      appStateObject = {};
    }
    appStateObject["nextStep"] = step;
    localStorage.setItem("appState", JSON.stringify(appStateObject));
  },

  getNextStep: () => {
    appState = localStorage.getItem("appState");

    if (appState) {
      appStateObject = JSON.parse(appState);
    } else {
      appStateObject = {};
    }

    return appStateObject.nextStep;
  },

  getCompletedSteps: () => {
    appState = localStorage.getItem("appState");

    if (appState) {
      appStateObject = JSON.parse(appState);
    } else {
      appStateObject = {};
    }

    if (appStateObject["completedSteps"]) {
      return appStateObject.completedSteps;
    } else {
      return [];
    }
  },
};
