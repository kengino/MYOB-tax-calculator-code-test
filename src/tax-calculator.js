const { getIncomeThreholdArray, getTaxRateArray } = require('../utils/tax-rate-utils')

class TaxCaculatorModel {

  calculateTax (income, taxRateTable) {
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
}

module.exports = {
  TaxCaculatorModel
}
