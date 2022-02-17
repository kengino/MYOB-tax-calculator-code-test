const MONTH_IN_YEAR = 12
/**
 * This function takes taxRateTable input, and return the incomeThredhold as array
 * @param {*} taxRateTable
 * @returns number array
 */
const getIncomeThreholdArray = (taxRateTable) => {
  return taxRateTable.map(item => item.incomeThredhold)
}
/**
 * This function takes taxRateTable input, and return the taxRate as array
 * @param {*} taxRateTable
 * @returns number array
 */
const getTaxRateArray = (taxRateTable) => {
  return taxRateTable.map(item => item.taxRate)
}
/**
 * This function takes annual value and reuturn monthly value by devided by 12
 * @param {*} annualSalary
 * @returns
 */
const getMonthlyValue = (annualValue) => {
  return annualValue / MONTH_IN_YEAR
}

module.exports = {
  getIncomeThreholdArray,
  getTaxRateArray,
  getMonthlyValue
}
