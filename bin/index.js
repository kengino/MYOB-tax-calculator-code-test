#!/usr/bin/env node
'use strict'
const { taxRateCalculator } = require('../src/tax-calculator')
const { TAX_RATE_TABLE } = require('../utils/tax-rates')

const customerName = process.argv[2]
const income = process.argv[3]

let totalTax = 0
try {
  totalTax = taxRateCalculator(income, TAX_RATE_TABLE)
  const netIncome = income - totalTax
  console.log(`\n Monthly Payslip for: "${customerName}" \n Gross Monthly Income: ${income} \n Monthly Income Tax: ${totalTax} \n Net Monthly Income: ${netIncome} \n`)
} catch (error) {
  console.error(error.message)
}
