"use strict";

var payRate = 17.30; 
var overtimeRate = 1.5;
var regularHours = 40;
var hoursWorked = 45; 
var regularPay = payRate * regularHours; // regular pay
var overtimePay = (hoursWorked - regularHours) * payRate * overtimeRate; // overtime pay
var grossPay;

if (hoursWorked > regularHours) {
  grossPay = regularPay + overtimePay; // overtime gross pay
} else {
    grossPay = payRate * hoursWorked; // No overtime
  }

console.log(grossPay); 
