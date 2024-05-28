"use strict";

let vehicles = [
  {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-XOO",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6,
  },
  {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5,
  },
  {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("12-30-2022"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2023"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5,
  },
];

// Find Red Vehicles
let redVehicles = [];
for (let i = 0; i < vehicles.length; i++) {
  if (vehicles[i].color === "Red") {
    redVehicles.push(vehicles[i]);
  }
}

// Find Vehicles with Expired Registrations
let today = new Date();
let expiredVehicles = [];
for (let i = 0; i < vehicles.length; i++) {
  if (vehicles[i].registrationExpires < today) {
    expiredVehicles.push(vehicles[i]);
  }
}

// Find Vehicles that can hold at least 6 people
let largeVehicles = [];
for (let i = 0; i < vehicles.length; i++) {
  if (vehicles[i].capacity >= 6) {
    largeVehicles.push(vehicles[i]);
  }
}

// Find Vehicles with license plates ending in "222"
let license222Vehicles = [];
for (let i = 0; i < vehicles.length; i++) {
  if (vehicles[i].licenseNo.endsWith("222")) {
    license222Vehicles.push(vehicles[i]);
  }
}

// Output results
console.log("Red Vehicles:", redVehicles);
console.log("Expired Registration Vehicles:", expiredVehicles);
console.log("Large Capacity Vehicles (6+):", largeVehicles);
console.log(
  "Vehicles with License Plates Ending in '222':",
  license222Vehicles,
);
