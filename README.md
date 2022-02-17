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
npm uninstall myob-tax-calculator-code-test
```

# Usage
This program is triggered by this command
```bash
generatePaySlip John 20000
```
Replace John to the name you wish, replace 20000 to the income belong to the person

## Unit Tests Coverage
```bash
npm run test
```
```bash
PASS  utils/__test__/tax-rate-utils.test.js
PASS  src/__test__/tax-calculator.test.js

Test Suites: 2 passed, 2 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        0.41 s, estimated 1 s
Ran all test suites
```
## Coding Style
This program is written in Javascript follow the [Standard](https://github.com/standard) coding style
```bash
npm run lint
```
## License
[MIT](https://choosealicense.com/licenses/mit/)
