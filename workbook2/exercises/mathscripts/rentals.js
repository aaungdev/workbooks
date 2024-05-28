"use stripct";

var numberOfPeople = 38; // the number of people
var seatsPerVan = 15; // seats per van
var rentalCostPerVan = 250; // cost per van per day

// Calculate the number of vans needed (always round up)
var vansNeeded = Math.ceil(numberOfPeople / seatsPerVan);

// Calculate the total cost for vans
var totalRentalCost = vansNeeded * rentalCostPerVan;

// Calculate the cost per person (always round up)
var costPerPerson = Math.ceil(totalRentalCost / numberOfPeople);

console.log('Total rental cost:', totalRentalCost);
console.log('Cost per person:', costPerPerson);

// Test with 38 people
console.log('Test with 38 people:');
console.log('Vans needed:', vansNeeded);
console.log('Total cost for 38 people:', vansNeeded * rentalCostPerVan);
console.log('Cost per person for 38 people:', costPerPerson);

// If you multiply the cost per person by the number of people
var totalCollected = costPerPerson * numberOfPeople;
console.log('Total collected:', totalCollected);

// Calculate the leftover money
var leftoverMoney = totalCollected - totalRentalCost;
console.log('Leftover money:', leftoverMoney);
