"use strict";
var salary = 5000; // the salary amount
var taxRate = 23; // 10% tax rate
var taxesWithheld = salary * (taxRate/100);

console.log("Federal taxes withheld: $" + taxesWithheld.toFixed(2));
