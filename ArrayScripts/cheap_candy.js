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

let numProducts = products.length;
let cheapCandy = [];
let marsMurrie = [];
for (let i = 0; i < numProducts; i++) {
    if (Number(products[i].price) < 4) {
        cheapCandy.push(products[i].product);
    }
    if (products[i].product.indexOf("M&M") != -1) {
        marsMurrie.push(products[i].product);
    }
}
console.log(cheapCandy);
console.log(marsMurrie);
for (let i = 0; i < numProducts; i++) {
    if (products[i].product == "Swedish Fish") {
        console.log("Yes, we carry Swedish Fish.");
        break;
    }
}