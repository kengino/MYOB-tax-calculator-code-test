const { TaxCaculatorModel } = require('../tax-calculator')
const { TAX_RATE_TABLE } = require('../../utils/tax-rates')
const sampleTaxTable2021 = TAX_RATE_TABLE[0].table
const taxCaculatorModelInstance = new TaxCaculatorModel()

test('Tax free zoom should not pay any tax', () => {
  const income = 20000
  const totalTax = taxCaculatorModelInstance.calculateTax(income, sampleTaxTable2021)
  expect(totalTax).toBe(0)
})

test('Should pay tax at 10% rate for each dollar between 20000 and 40000', () => {
  const income = 40000
  const totalTax = taxCaculatorModelInstance.calculateTax(income, sampleTaxTable2021)
  expect(totalTax).toBe(2000)
})

test('Should pay tax at 20% rate for each dollar between 40000 and 80000', () => {
  const income = 80000
  const totalTax = taxCaculatorModelInstance.calculateTax(income, sampleTaxTable2021)
  expect(totalTax).toBe(10000)
})

test('Should pay tax at 30% rate for each dollar between 80000 and 180000', () => {
  const income = 180000
  const totalTax = taxCaculatorModelInstance.calculateTax(income, sampleTaxTable2021)
  expect(totalTax).toBe(40000)
})

test('Float Number - Should pay tax at 40% rate for each dollar over 180000', () => {
  const income = 280000
  const totalTax = taxCaculatorModelInstance.calculateTax(income, sampleTaxTable2021)
  expect(totalTax).toBe(80000)
})

test('Should pay tax at 40% rate for each dollar over 180000', () => {
  const income = 280000.1242312
  const totalTax = taxCaculatorModelInstance.calculateTax(income, sampleTaxTable2021)
  expect(totalTax).toBe(80000.04969248001)
})

test('Invalid input should throw error', () => {
  const income = 'asdf'
  expect(() => { taxCaculatorModelInstance.calculateTax(income, sampleTaxTable2021) }).toThrow('Bad Request, invalid income number.')
})

test('Invalid input should throw error', () => {
  const income = '-100000'
  expect(() => { taxCaculatorModelInstance.calculateTax(income, sampleTaxTable2021) }).toThrow('Bad Request, invalid income number.')
})
