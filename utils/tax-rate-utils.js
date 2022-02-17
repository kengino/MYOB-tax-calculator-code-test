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
module.exports = {
  getIncomeThreholdArray,
  getTaxRateArray
}
