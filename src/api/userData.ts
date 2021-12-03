export const getUserData = () => {
  const localStorageMap = {
    userAddressData: {
      first_name: 'name',
      last_name: 'lastName',
      street_number: 'number',
      street: 'street',
      city: 'city',
      zip: 'postcode',
    },
    personalInfo: {
      smoking: 'smoking',
      profession: 'profession',
      marital_status: 'maritalStatus',
      percent: 'percent',
    },
  };

  const localStorageItemsListParse = {
    salary: 'amount_of_money',
    age: 'saving_years',
    savings: 'total_savings',
    fondsPercent: 'fonds_percent',
    savingsPercent: 'savings_percent',
    interest: 'interest',
    amountEpargne: 'amount_of_savings',
    savingsTax: 'tax',
    scenarioOptimistic: 'scenario_optimistic',
    scenarioPessimistic: 'scenario_pessimistic',
    scenarioRealistic: 'scenario_realistic',
    finalCapital: 'final_capital',
  };

  const localStorageItemsList = {
    date: 'birthday',
    solutionChoice: 'solution',
    period: 'type_of_save',
    sex: 'sex',
    occupation: 'occupation',
  };

  const userData: {[key: string]: string} = {};
  try {
    for (const [localStorageKey, dataMap] of Object.entries(localStorageMap)) {
      const localStorageItem = localStorage.getItem(localStorageKey);
      if (localStorageItem) {
        const localStorageJSON = JSON.parse(localStorageItem);
        for (const [backEndField, localStorageField] of Object.entries(
          dataMap,
        )) {
          userData[backEndField] = localStorageJSON[localStorageField];
        }
      }
    }

    for (const [localStorageKey, backEndField] of Object.entries(
      localStorageItemsListParse,
    )) {
      const temp = localStorage.getItem(localStorageKey);
      console.log(temp);
      userData[backEndField] = JSON.parse(temp!);
    }

    for (const [localStorageKey, backEndField] of Object.entries(
      localStorageItemsList,
    )) {
      userData[backEndField] = localStorage.getItem(localStorageKey)!;
    }

    console.log('userData', userData);

    return userData;
  } catch (e: any) {
    console.log(e);
    throw new Error(e.message);
  }
};
