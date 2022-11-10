function printPersonalInfo(personalInfo){
    console.log("From Function, object");
    console.log(personalInfo.name);
    console.log(personalInfo.address);
    console.log(personalInfo.city + " " + personalInfo.state + " "  +  personalInfo.zip);
    console.log('');
}

// function printPersonalInfoParams(name, address, city, state, zip){
//     console.log("From Function, Params");
//     console.log(name);
//     console.log(address);
//     console.log(city + " " + state + " " + zip);
//     console.log(" ");
// }

let pi1 = {
 name: "Anna",
 address: "3051",
 city: "Brooklyn",
 state: "NY",
 zip: "11235"
 };

 //...
//  console.log(pi1.name);
//  console.log(pi1.address);
//  //.....
//  let pi2 = {
//     name: "Matt",
//     address: "1234",
//     city: "Geneva",
//     state: "IL",
//     zip: "00112"
//     };

 printPersonalInfo(pi1);
 
 
//  printPersonalInfoParams(pi1.name, pi1.address, pi1.city, pi1.state, pi1.zip);
//  printPersonalInfo(pi2);
//  printPersonalInfoParams(pi2.name, pi2.address, pi2.city, pi2.state, pi2.zip);



// to learn 

let person = {
    name: "Tash",
    address: "12 crescent",
    city: "Wappingers",
    state: "New York",
    zip: "12524"
};

function printContact() {
    console.log(person.name);
    console.log(person.address);
    console.log(person.city + ", " + person.state + " " + person.zip);
}

printContact(person);