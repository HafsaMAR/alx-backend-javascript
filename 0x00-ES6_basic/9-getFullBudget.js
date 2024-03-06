#!/usr/bin/node
// Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object

// eslint-disable-next-line import/extensions
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars() {
      return `$${this.income}`;
    },
    getIncomeInEuros() {
      return `${this.income} euros`;
    },
  };

  return fullBudget;
}
