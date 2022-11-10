"use strict"

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"]
    },
];

let numMembers = academyMembers.length;
let madMovies = [];
let bobs = [];
let aFilms = [];
for (let i = 0; i < numMembers; i++) {
    if (academyMembers[i].memID == 187) {
        console.log("The Academy Member whose ID is 187 is " + academyMembers[i].name);
    }
    let numFilms = academyMembers[i].films.length;
    if (numFilms >= 3) {
        madMovies.push(academyMembers[i].name);
    }
    if (academyMembers[i].name.substring(0, 3) == "Bob") {
        bobs.push(academyMembers[i].name);
    }
    for (let j = 0; j < numFilms; j++) {
        if (academyMembers[i].films[j].slice(0, 1) == "A" && aFilms.indexOf(academyMembers[i].name) == -1)  {
            aFilms.push(academyMembers[i].name);
        }
    }
}
console.log("Academy Member(s) with mad movies: " + madMovies);
console.log("The Bobs: " + bobs);
console.log("The Academy Member(s) with films beginning with \"A\": " + aFilms);