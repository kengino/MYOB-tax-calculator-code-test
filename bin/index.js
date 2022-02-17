#!/usr/bin/env node
'use strict'
const { taxRateCalculator } = require('../src/tax-calculator')
const { getMonthlyValue } = require('../utils/tax-rate-utils')
const { TAX_RATE_TABLE } = require('../utils/tax-rates')

const customerName = process.argv[2]
const income = process.argv[3]

let totalTax = 0
try {
  totalTax = taxRateCalculator(income, TAX_RATE_TABLE)
  const netIncome = income - totalTax
  console.log(`
    Monthly Payslip for: "${customerName}"
    Gross Monthly Income: ${getMonthlyValue(income)}
    Monthly Income Tax: ${getMonthlyValue(totalTax)}
    Net Monthly Income: ${getMonthlyValue(netIncome)}\n`)
} catch (error) {
  console.error(error.message)
}
