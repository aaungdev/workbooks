"use strict";

let cart = [
    { item: "Bread", price: 3.29, quantity: 2 },
    { item: "Milk", price: 4.09, quantity: 1 },
    { item: "T-Bone Steak", price: 12.99, quantity: 2 },
    { item: "Baking Potato", price: 1.89, quantity: 6 },
    { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
    { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
    { item: "Apples", price: 0.66, quantity: 6 }
];

// Write a code that searches the courses array
let itemNames = cart.map(product => product.item);
itemNames.forEach(item => console.log(item));

// Calculate the total cost of the cart
let totalCost = cart.reduce((total, product) => {
    return total + (product.price * product.quantity);
}, 0);

console.log(`Total cost: $${totalCost.toFixed(2)}`);
