
const { TAX_RATE_TABLE } = require('../utils/tax-rates')

const getTaxRateTable = (year) => {
  const result = TAX_RATE_TABLE.find(element => element.year === year)
  return result ? result.table : null
}

module.exports = {
  getTaxRateTable
}
