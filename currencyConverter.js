// Welcome to the Currency Converter!
// We have imported the 'sync-input' package for you.
// You will use this in later stages.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
const input = require('sync-input');
const usd = "USD";
const exchangeRates = {
  USD: 1,
  JPY: 113.5,
  EUR: 0.89,
  RUB: 74.36,
  GBP: 0.75,
};
let exit = false;

let welcomeMessage = () => {
  console.log("Welcome to Currency Converter!");
  for (const key in exchangeRates) {
    console.log(`1 ${usd} equals ${exchangeRates[key]} ${key}`);
  }
};

let checkIfCurrencyExists = (currency) => {
  if (!Object.keys(exchangeRates).includes(currency)) {
    console.log("Unknown currency");
    return false;
  }
  return true;
};

let checkAmount = (amount) => {
  if (amount < 1) {
    console.log("The amount cannot be less than 1");
    return false;
  }
  if (isNaN(amount)) {
    console.log("The amount has to be a number");
    return false;
  }
  return true;
};

let convertCurrencies = () => {
  while(true) {
    console.log("What do you want to convert?");
    let fromCurrency = input("From: ");
    fromCurrency = fromCurrency.toUpperCase();
    if (!checkIfCurrencyExists(fromCurrency)) {
      continue;
    }

    let toCurrency = input("To: ");
    toCurrency = toCurrency.toUpperCase();
    
    if (!checkIfCurrencyExists(toCurrency)) {
      continue;
    }

    let amount = Number(input("Amount: "));
    if (!checkAmount(amount)) {
      continue;
    }
    let result = ((exchangeRates[toCurrency] / exchangeRates[fromCurrency]) * amount).toFixed(4);
    console.log(`Result: ${amount} ${fromCurrency} equals ${result} ${toCurrency}`);
    break;
  }
}

let getOption = () => {
  console.log("What do you want to do?");
  console.log("1-Convert currencies 2-Exit program");
  let option = Number(input());
  return option;
}

welcomeMessage();
while(!exit) {
  let option = getOption();
  if (isNaN(option) || option < 1 || option > 2) {
    console.log("Unknown input");
    continue;
  }
  if (option === 2) {
    console.log("Have a nice day!");
    exit = true;
    break;
  }
  if (option === 1) {
    convertCurrencies();
  }
}
