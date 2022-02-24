const { getIncomeThreholdArray, getTaxRateArray, getMonthlyValue } = require('../tax-rate-utils')
const { TAX_RATE_TABLE } = require('../tax-rates')
const sampleTaxTable2021 = TAX_RATE_TABLE[0].table

test('incomeThredholdArray should be extracted from TAX_RATE_TABLE', () => {
  const incomeThredholdArray = getIncomeThreholdArray(sampleTaxTable2021)
  expect(incomeThredholdArray).toStrictEqual([0, 20000, 40000, 80000, 180000, Infinity])
})

test('getTaxRateArray should be extracted from TAX_RATE_TABLE', () => {
  const taxRateArray = getTaxRateArray(sampleTaxTable2021)
  expect(taxRateArray).toStrictEqual([0, 0, 0.1, 0.2, 0.3, 0.4])
})
test('getMonthlyValue should divide input by 12', () => {
  const monthlyIncome = getMonthlyValue(12000)
  expect(monthlyIncome).toBe(1000)
})
