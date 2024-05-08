let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Candy Corn", price: 3.50},
    {product: "Jelly Beans", price: 4.50},
    {product: "Licorice", price: 1.99},
    {product: "Sour Patch Kids", price: 3.49},
    {product: "Almond Joy", price: 1.79},
    {product: "Hershey's Bar", price: 1.49}
];

// Check which candies cost less than $4.00
for(let i = 0; i < products.length; i++) {
    if(products[i].price < 4) {
        console.log(`Costs less than $4: ${products[i].product}`);
    }
}

// Check which candies have "M&M" in their name
for(let i = 0; i < products.length; i++) {
    if (products[i].product.includes("M&M")) {
        console.log(`"M&M" in name: ${products[i].product}`);
    }
}

// Check if we carry "Swedish Fish"
for(let i = 0; i < products.length; i++) {
    if (products[i].product == "Swedish Fish") {
        console.log(`Yes, we do carry ${products[i].product}`);
        break; 
    }
}
