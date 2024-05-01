"use strict";

function convertFtoC(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

let currentTemp = 212;
let result = convertFtoC(currentTemp);
console.log(currentTemp + "°F is " + result.toFixed(1) + "°C");
