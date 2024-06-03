"use strict";

let jobAsSting = `{"title" : "Web Designer",
 "startDate" : "October 2022",
 "company" : "AT&T",
 "minSalary" : 52000,
 "maxSalary" : 86000 
 }`;

let job = JSON.parse(jobAsSting);
console.log(jobAsSting);
console.log(job.company);
