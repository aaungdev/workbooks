"use strict";

let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
];

function calculateTotal(lunch) {
    let subtotal = 0;
    for (let i = 0; i < lunch.length; i++) {
        subtotal += lunch[i].price;
    }
    let tax = subtotal * 0.08;
    let tip = subtotal * 0.18;
    let totalDue = subtotal + tax + tip;

    console.log("Subtotal: $" + subtotal.toFixed(2));
    console.log("Tax (8%): $" + tax.toFixed(2));
    console.log("Tip (18%): $" + tip.toFixed(2));
    console.log("Total Due: $" + totalDue.toFixed(2));
}

calculateTotal(lunch);
