
const { TAX_RATE_TABLE } = require('../utils/tax-rates')

const getTaxRateTable = (year) => {
  const yearString = year.toString()
  const result = TAX_RATE_TABLE.find(element => element.year === yearString)
  return result ? result.table : null
}

module.exports = {
  getTaxRateTable
}
