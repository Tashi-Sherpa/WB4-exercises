"use strict"

let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];
let numItems = lunch.length;
let subtotal = 0;
let tax = 0;
let total = 0;

for (let i = 0; i < numItems; i++) {
    subtotal += lunch[i].price;
}

tax = (subtotal * .18).toFixed(2);
total = (Number(subtotal) + Number(tax)).toFixed(2);

console.log("Subtotal: $" + subtotal);
console.log("Tax: $" + tax);
console.log("Total: $" + total);