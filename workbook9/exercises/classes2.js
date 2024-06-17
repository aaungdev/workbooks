"use strict";

class Employee {
  constructor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  promote(newJobTitle, newPayRate) {
    this.jobTitle = newJobTitle;
    this.payRate = newPayRate;
  }
}

let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.5);
console.log(`Employee ${employee1.fullName} created`);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

employee1.promote("Sr. Graphic Artist", 46.75);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);
