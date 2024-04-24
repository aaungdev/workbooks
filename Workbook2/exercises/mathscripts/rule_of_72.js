"use strict";

var IR = 6; 
var initialAmount = 100; 

var yearsToDouble = 72 / IR;
var doubledAmount = initialAmount * 2;
var output = "At a " + IR.toFixed(1) + "% interest rate, your savings account will be worth " + doubledAmount.toFixed(2) + " in " + yearsToDouble.toFixed(1) + " years";

console.log(output);
