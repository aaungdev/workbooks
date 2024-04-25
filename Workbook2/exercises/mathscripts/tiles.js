"use strict";

var roomLength = 10; // the actual room length
var roomWidth = 12; // the actual room width

// Calculate the total area and the number of tiles needed
var totalArea = roomLength * roomWidth;
var totalTilesNeeded = totalArea;

// Add an extra 10%
var extraTiles = totalTilesNeeded * 0.1;
var totalIncludingExtra = totalTilesNeeded + extraTiles;

// Calculate boxes needed (always round up)
var boxesNeeded = Math.ceil(totalIncludingExtra / 12);

console.log('Boxes needed:', boxesNeeded);
