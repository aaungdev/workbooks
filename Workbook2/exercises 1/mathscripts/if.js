"use strict";

var numberkOfkids = 4;
var price;

price = 19.99 * numberkOfkids;

if (numberkOfkids >= 3) {
  price = price * 0.9;
}

console.log(price);
