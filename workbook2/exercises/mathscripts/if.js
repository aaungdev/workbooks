"use strict";

var numberkOfKids = 4;
var price;

price = 19.99 * numberkOfKids;

if (numberkOfKids >= 3) {
  price = price * 0.9;
}

console.log(price);
