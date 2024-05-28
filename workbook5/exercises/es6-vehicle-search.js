"use strict"
let vehicles = [
    {
        color: "Silver",
        type: "Minivan",
        registrationState: "CA",
        licenseNo: "ABC-101",
        registrationExpires: new Date("3-10-2022"),
        capacity: 7
    },
    {
        color: "Red",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A1D-2NC",
        registrationExpires: new Date("8-31-2023"),
        capacity: 3
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A22-X00",
        registrationExpires: new Date("9-31-2023"),
        capacity: 6
    },
    {
        color: "Red",
        type: "Car",
        registrationState: "CA",
        licenseNo: "ABC-222",
        registrationExpires: new Date("12-10-2022"),
        capacity: 5
    },
    {
        color: "Black",
        type: "SUV",
        registrationState: "CA",
        licenseNo: "EEE-222",
        registrationExpires: new Date("12-10-2021"),
        capacity: 7
    },
    {
        color: "Red",
        type: "SUV",
        registrationState: "TX",
        licenseNo: "ZZ2-101",
        registrationExpires: new Date("5-30-2022"),
        capacity: 6
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "CAC-7YT",
        registrationExpires: new Date("1-31-2022"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "CA",
        licenseNo: "123-ABC",
        registrationExpires: new Date("3-31-2023"),
        capacity: 5
    }
];

// Which vehicles are RED?
let redVehicles = vehicles.filter(vehicle => vehicle.color === "Red");
console.log("Vehicles that are RED:", redVehicles);

// Which vehicles have registrations that are expired?
let expiredRegistrations = vehicles.filter(vehicle => vehicle.registrationExpires < new Date());
console.log("Vehicles with expired registrations:", expiredRegistrations);

// Which vehicles can hold at least 6 people?
let vehiclesWithCapacity6OrMore = vehicles.filter(vehicle => vehicle.capacity >= 6);
console.log("Vehicles that can hold at least 6 people:", vehiclesWithCapacity6OrMore);

// Which vehicles have license plates that end with "222"?
let vehiclesWithLicenseEnd222 = vehicles.filter(vehicle => vehicle.licenseNo.endsWith("222"));
console.log("Vehicles with license plates ending with '222':", vehiclesWithLicenseEnd222);
