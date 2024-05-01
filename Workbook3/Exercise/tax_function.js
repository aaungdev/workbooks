"use strict";
function getSocSecTax(grossPay) {
  let socialSecurityTax = grossPay * 0.062;
  return socialSecurityTax;
}

function getMedicareTax(grossPay) {
  let medicareTax = grossPay * 0.0145;
  return medicareTax;
}

function getFederalTax(grossPay, withholdingCode) {
  let taxRate;
  if ((withholdingCode = 0)) {
    taxRate = 0.23;
  } else if ((withholdingCode = 1)) {
    taxRate = 0.21;
  } else if ((withholdingCode = 2)) {
    taxRate = 0.195;
  } else if ((withholdingCode = 3)) {
    taxRate = 0.185;
  } else {
    taxRate = 0.18 - 0.005 * (withholdingCode - 4);
  }
  return grossPay * taxRate;
}

console.log("Person 1 Social Security Tax: " + getSocSecTax(100).toFixed(2));
console.log("Person 1 Medicare Tax: " + getMedicareTax(750).toFixed(2));
console.log("Person 1 Federal Tax: " + getFederalTax(750, 0).toFixed(2));

console.log("Person 2 Social Security Tax: " + getSocSecTax(1550).toFixed(2));
console.log("Person 2 Medicare Tax: " + getMedicareTax(1550).toFixed(2));
console.log("Person 2 Federal Tax: " + getFederalTax(1550, 2).toFixed(2));

console.log("Person 3 Social Security Tax: " + getSocSecTax(1100).toFixed(2));
console.log("Person 3 Medicare Tax: " + getMedicareTax(1100).toFixed(2));
console.log("Person 3 Federal Tax: " + getFederalTax(1100, 6).toFixed(2));
