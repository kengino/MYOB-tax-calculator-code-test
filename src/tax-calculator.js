const { getIncomeThreholdArray, getTaxRateArray } = require('../utils/tax-rate-utils')

/**
 *
 * @param {string} income income of the person
 * @param {*} taxRateTable tax rate table to be used in the calculator
 * @returns {number} the total tax deducted for the income given in the input
 */
const taxRateCalculator = (income, taxRateTable) => {
  const incomeNumb = Number.parseFloat(income)
  if (isNaN(incomeNumb) || incomeNumb < 0) {
    throw new Error('Bad Request, invalid income number.')
  }

  let taxSum = 0
  const incomeThreholdArray = getIncomeThreholdArray(taxRateTable)
  const taxRateArray = getTaxRateArray(taxRateTable)

  let unTaxedIncome = incomeNumb
  for (let i = 1; i < taxRateTable.length; i++) {
    if (unTaxedIncome <= 0) {
      break
    }
    // if more than threholds, then calculate the full amount for that level, otherwise only calculate the exceed part
    const taxableIncomeAtCurrentLevel = Math.min(incomeThreholdArray[i] - incomeThreholdArray[i - 1], unTaxedIncome)
    taxSum += taxableIncomeAtCurrentLevel * taxRateArray[i]
    unTaxedIncome -= taxableIncomeAtCurrentLevel
  }
  return taxSum
}

module.exports = {
  taxRateCalculator
}
