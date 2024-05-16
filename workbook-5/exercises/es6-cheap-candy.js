"use strict";
let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Snickers", price: 1.89 },
  { product: "KitKat", price: 2.49 },
  { product: "Twix", price: 1.99 },
  { product: "Milky Way", price: 2.69 },
  { product: "Reese's Cups", price: 3.49 },
  { product: "Skittles", price: 2.19 },
  { product: "Hershey's Bar", price: 1.59 },
  { product: "Butterfinger", price: 1.79 },
];

// Which candies cost less than $4.00?
let cheapCandies = products.filter((candy) => candy.price < 4.0);
console.log("Candies that cost less than $4.00:", cheapCandies);

// Which candies have "M&M" in their name?
let mAndMCandies = products.filter((candy) => candy.product.includes("M&M"));
console.log("Candies with 'M&M' in their name:", mAndMCandies);

// Do we carry "Swedish Fish"?
let swedishFish = products.find((candy) => candy.product == "Swedish Fish");
if (swedishFish) {
  console.log("We carry 'Swedish Fish'.");
} else {
  console.log("We do not carry 'Swedish Fish'.");
}
