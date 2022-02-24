#!/usr/bin/env node
'use strict'
const { TaxCaculatorModel } = require('../src/tax-calculator')
const { getMonthlyValue } = require('../utils/tax-rate-utils')
const { getTaxRateTable } = require('../src/getTaxRateTable')

const customerName = process.argv[2]
const income = process.argv[3]
const year = process.argv[4]

if (!customerName || !income || !year) {
  throw new Error('Bad Request - Invalid input parameter.')
}
let totalTax = 0
try {
  const taxRateTableForSelectedInput = getTaxRateTable(year)
  const TaxCaculatorModelInstance = new TaxCaculatorModel()
  totalTax = TaxCaculatorModelInstance.calculateTax(income, taxRateTableForSelectedInput)
  const netIncome = income - totalTax
  console.log(`
    Monthly Payslip for: "${customerName}"
    Gross Monthly Income: ${getMonthlyValue(income)}
    Monthly Income Tax: ${getMonthlyValue(totalTax)}
    Net Monthly Income: ${getMonthlyValue(netIncome)}\n`)
} catch (error) {
  console.error(error.message)
}
