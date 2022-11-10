"use strict"

let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
    ];
let numStudents = students.length;

//outer loop goes through the array of students
for (let i = 0; i < numStudents; i++) {
    let total = 0; //initialized variables with values of 0 to make sure that they are number values but also to reset them to zero every time the outer loop runs
    let avg = 0;
    let numScores = students[i].scores.length;
    //inner loop goes through the array of scores for each student
    for (let j = 0; j < numScores; j++) {
        total += students[i].scores[j];
    }
    avg += (total / numScores);//avg calculation done outside of inner loop once all the scores for student[i] are added to total
    console.log(students[i].name + ": " + avg);//prints name of student with their average
}