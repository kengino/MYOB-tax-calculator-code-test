const { getIncomeThreholdArray, getTaxRateArray } = require('../tax-rate-utils')
const { TAX_RATE_TABLE } = require('../tax-rates')

test('incomeThredholdArray should be extracted from TAX_RATE_TABLE', () => {
  const incomeThredholdArray = getIncomeThreholdArray(TAX_RATE_TABLE)
  expect(incomeThredholdArray).toStrictEqual([0, 20000, 40000, 80000, 180000, Infinity])
})

test('getTaxRateArray should be extracted from TAX_RATE_TABLE', () => {
  const taxRateArray = getTaxRateArray(TAX_RATE_TABLE)
  expect(taxRateArray).toStrictEqual([0, 0, 0.1, 0.2, 0.3, 0.4])
})
