/**
 * This file is for Tax rate table definition. incomeThredhold and taxRate are fixed prop names. Add more tax table here when needed.
 */
const TAX_RATE_TABLE = [
  { incomeThredhold: 0, taxRate: 0 },
  { incomeThredhold: 20000, taxRate: 0 },
  { incomeThredhold: 40000, taxRate: 0.1 },
  { incomeThredhold: 80000, taxRate: 0.2 },
  { incomeThredhold: 180000, taxRate: 0.3 },
  { incomeThredhold: Infinity, taxRate: 0.4 }
]
module.exports = {
  TAX_RATE_TABLE
}
