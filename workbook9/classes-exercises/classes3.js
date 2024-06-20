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

  getIntro() {
    return `Hello, my name is ${this.fullName}. I am a ${this.jobTitle} and I earn $${this.payRate} per hour.`;
  }
}

let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.5);
let intro = employee1.getIntro();
console.log(intro);

employee1.promote("Sr. Graphic Artist", 46.75);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

let employee2 = new Employee(2, "Jane", "Doe", "Software Engineer", 55.0);
let intro2 = employee2.getIntro();
console.log(intro2);
