"use scripts"

let vehicles = [
    {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7
    },
    {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6
    },
    {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5
    },
    {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7
    },
    {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("12-30-2022"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2023"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5
    }
];

let numVehicles = vehicles.length;
let redVehicles = [];
let currentDate = new Date();
let numDate = (Number(currentDate));
let expired = [];
let big = [];
let end222 = [];
for (let i = 0; i < numVehicles; i++) {
    if (vehicles[i].color == "Red") {
        redVehicles.push(vehicles[i].licenseNo);
    }
    if (Number(vehicles[i].registrationExpires) < numDate) {
        expired.push(vehicles[i].licenseNo);
    }
    if (Number(vehicles[i].capacity) >= 6) {
        big.push(vehicles[i].licenseNo);
    }
    if (vehicles[i].licenseNo.substring(vehicles[i].licenseNo.indexOf("-") + 1) == "222") {
        end222.push(vehicles[i].licenseNo);
    }
}
console.log("The license numbers of the red vehicles are: " + redVehicles);
console.log("The license numbers of the vehicles with expired are: " + expired)
console.log("The license numbers of the vehicles that can hold at least 6 people are: " + big)
console.log("The license numbers of the vehicles whose license plates end with 222 are: " + end222)