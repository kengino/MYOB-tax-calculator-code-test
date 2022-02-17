# MYOB Code Test - Tax Calculator
This is simple tax calculator local cli tool. calculate total tax based on income.


## Description
This is a command line interface tool to calculate net income and tax based on a specific tax rate table.

## Getting Started
The program is based on [Nodejs v15.4.0](https://nodejs.org/en/blog/release/v15.4.0/)
Please make sure you have the Nodejs environment ready prior playing with this program.

Navigate to the root directory
```bash
npm install
```

And then to be able to use this command line tool in your workstation, you will need to install this program globally.
```bash
npm install -g .
```

List all packages install globally, sothat you can see this program is added.
```bash
npm list -g --depth=0
```

To uninstall this program after you finish
```bash
npm uninstall -g myob-tax-calculator-code-test
```

## Usage
This program is triggered by this command
```bash
generatePaySlip John 20000
```
Replace John to the name you wish, replace 20000 to the income belong to the person

## Sample Result
```bash
josh.liu@JL MYOB-tax-calculator-code-test % generatePaySlip Josh 60000 

    Monthly Payslip for: "Josh"
    Gross Monthly Income: 5000
    Monthly Income Tax: 500
    Net Monthly Income: 4500

```
## Unit Tests Coverage
```bash
npm run test
```
```bash
> myob-tax-calculator-code-test@1.0.0 test
> jest

 PASS  utils/__test__/tax-rate-utils.test.js
 PASS  src/__test__/tax-calculator.test.js

Test Suites: 2 passed, 2 total
Tests:       11 passed, 11 total
Snapshots:   0 total
Time:        0.527 s, estimated 1 s
Ran all test suites.
```
## Coding Style
This program is written in Javascript follow the [Standard](https://github.com/standard) coding style
```bash
npm run lint
```
## License
[MIT](https://choosealicense.com/licenses/mit/)
