export const firstName: string | null =
  localStorage.getItem('userAddressData') &&
  JSON.parse(localStorage.getItem('userAddressData')!).name;

export const lastName: string | null =
  localStorage.getItem('userAddressData') &&
  JSON.parse(localStorage.getItem('userAddressData')!).lastName;

export const streetNumber: string | null =
  localStorage.getItem('userAddressData') &&
  JSON.parse(localStorage.getItem('userAddressData')!).number;

export const street: string | null =
  localStorage.getItem('userAddressData') &&
  JSON.parse(localStorage.getItem('userAddressData')!).street;

export const city: string | null =
  localStorage.getItem('userAddressData') &&
  JSON.parse(localStorage.getItem('userAddressData')!).city;

export const postcode: string | null =
  localStorage.getItem('userAddressData') &&
  JSON.parse(localStorage.getItem('userAddressData')!).postcode;

export const email: string | null =
  localStorage.getItem('contactInfo') &&
  JSON.parse(localStorage.getItem('contactInfo')!).email;

export const phone: string | null =
  localStorage.getItem('contactInfo') &&
  JSON.parse(localStorage.getItem('contactInfo')!).phone;

export const birthday: string | null = localStorage.getItem('date');

export const profession: string | null =
  localStorage.getItem('personalInfo') &&
  JSON.parse(localStorage.getItem('personalInfo')!).profession;

export const smoking: string | null =
  localStorage.getItem('personalInfo') &&
  JSON.parse(localStorage.getItem('personalInfo')!).smoking;

export const maritalStatus: string | null =
  localStorage.getItem('personalInfo') &&
  JSON.parse(localStorage.getItem('personalInfo')!).maritalStatus;

export const percent: string | null =
  localStorage.getItem('personalInfo') &&
  JSON.parse(localStorage.getItem('personalInfo')!).percent;

export const solution: string | null = localStorage.getItem('solutionChoice');

export const period: string | null = localStorage.getItem('period');

export const savingsAmount: string | null =
  localStorage.getItem('salary') && JSON.parse(localStorage.getItem('salary')!);

export const sex: string | null = localStorage.getItem('sex');

export const savingsYears: string | null =
  localStorage.getItem('age') && JSON.parse(localStorage.getItem('age')!);

export const totalSavings: string | null =
  localStorage.getItem('savings') &&
  JSON.parse(localStorage.getItem('savings')!);

export const fondPercent: string | null =
  localStorage.getItem('fondsPercent') &&
  JSON.parse(localStorage.getItem('fondsPercent')!);

export const savingsPercent: string | null =
  localStorage.getItem('savingsPercent') &&
  JSON.parse(localStorage.getItem('savingsPercent')!);

export const interest: string | null =
  localStorage.getItem('interest') &&
  JSON.parse(localStorage.getItem('interest')!);

export const occupation: string | null = localStorage.getItem('occupation');

export const fondAmount: string | null =
  localStorage.getItem('amount Fonds') &&
  JSON.parse(localStorage.getItem('amount Fonds')!);

export const epagneAmount: string | null =
  localStorage.getItem('amountEpargne') &&
  JSON.parse(localStorage.getItem('amountEpargne')!);

export const tax: string | null =
  localStorage.getItem('savingsTax') &&
  JSON.parse(localStorage.getItem('savingsTax')!);

export const scenarioOptimistic: string | null =
  localStorage.getItem('scenarioOptimistic') &&
  JSON.parse(localStorage.getItem('scenarioOptimistic')!);

export const scenarioPessimistic: string | null =
  localStorage.getItem('scenarioPessimistic') &&
  JSON.parse(localStorage.getItem('scenarioPessimistic')!);

export const scenarioRealistic: string | null =
  localStorage.getItem('scenarioRealistic') &&
  JSON.parse(localStorage.getItem('scenarioRealistic')!);

export const finalCapital: string | null =
  localStorage.getItem('finalCapital') &&
  JSON.parse(localStorage.getItem('finalCapital')!);

export const userData = {
  first_name: firstName,
  last_name: lastName,
  street_number: streetNumber,
  street: street,
  city: city,
  zip: postcode,
  email: email,
  phone_number: phone,
  birthday: birthday,
  profession: profession,
  smoking: smoking,
  marital_status: maritalStatus,
  solution: solution,
  type_of_save: period,
  amount_of_money: savingsAmount,
  sex: sex,
  saving_years: savingsYears,
  total_savings: totalSavings,
  fonds_percent: fondPercent,
  savings_percent: savingsPercent,
  interest: interest,
  occupation: occupation,
  amount_of_fond: fondAmount,
  amount_of_savings: epagneAmount,
  tax: tax,
  scenario_optimistic: scenarioOptimistic,
  scenario_pessimistic: scenarioPessimistic,
  scenario_realistic: scenarioRealistic,
  final_capital: finalCapital,
};
