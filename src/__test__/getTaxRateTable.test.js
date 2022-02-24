const { getTaxRateTable } = require('../getTaxRateTable')

test('Should have 2021 tax rate table as return', () => {
  const inputYear = '2021'
  const expectedOutCome = [
    { incomeThredhold: 0, taxRate: 0 },
    { incomeThredhold: 20000, taxRate: 0 },
    { incomeThredhold: 40000, taxRate: 0.1 },
    { incomeThredhold: 80000, taxRate: 0.2 },
    { incomeThredhold: 180000, taxRate: 0.3 },
    { incomeThredhold: Infinity, taxRate: 0.4 }
  ]
  expect(getTaxRateTable(inputYear)).toStrictEqual(expectedOutCome)
})
test('Should have 2022 tax rate table as return', () => {
  const inputYear = '2022'
  const expectedOutCome = [
    { incomeThredhold: 0, taxRate: 0 },
    { incomeThredhold: 20000, taxRate: 0 },
    { incomeThredhold: 40000, taxRate: 0.1 },
    { incomeThredhold: 80000, taxRate: 0.2 },
    { incomeThredhold: 180000, taxRate: 0.3 },
    { incomeThredhold: Infinity, taxRate: 0.4 }
  ]
  expect(getTaxRateTable(inputYear)).toStrictEqual(expectedOutCome)
})
