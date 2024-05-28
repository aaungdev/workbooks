"use strict";

function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

let celsius = -7;
let result = convertCtoF(celsius);
console.log(celsius + "°C is " + result.toFixed(1) + "°F");
