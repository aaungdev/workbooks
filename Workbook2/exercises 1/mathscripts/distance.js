"use strict";
var x1 = 1, y1 = 1; // Given x1,y1
var x2 = 4, y2 = 5; // Given x1,y1

var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)); // formula for distance

console.log("Distance between points: " + distance.toFixed(2));