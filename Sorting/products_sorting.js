"use sripts"

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Gummy Bears", price: 2.99},
    {product: "Skittles", price: 4.49},
    {product: "Caramel M&Ms", price: 2.89},
    {product: "Milk Duds", price: 0.49},
    {product: "Sour Patch Kids", price: 5.99},
    {product: "Corn Nuts", price: 1.89},
];

let names = [];
let sortedNames = [];
let numProducts = products.length;
for (i = 0; i < numProducts; i++) {
    names.push(products[i].product);
}
sortedNames = names.sort();
console.log(sortedNames);
console.log("-------------------------------------")

let prices = [];
let sortedPrices = [];
for (i = 0; i < numProducts; i++) {
    prices.push(products[i].price);
}
function compareDescendingNumbers (a,b) {
    if (a > b) {
        return -1;
    }
    else if (a == b) {
        return 0;
    }
    else {
        return 1;
    }
}
sortedPrices = prices.sort(compareDescendingNumbers);
console.log(sortedPrices);