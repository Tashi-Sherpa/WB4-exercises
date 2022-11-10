"use strict"

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores) {
    let numScores = scores.length;
    let i = 0;
    let total = 0;
    while (i < numScores) {
        total += scores[i];
        i++
    }
    let avg = total/numScores;
    return avg;
}

console.log(getAverage(myScores));
console.log(getAverage(yourScores));

function compareAscendingNumbers (a,b) {
    if (a < b) {
        return -1;
    }
    else if (a == b) {
        return 0;
    }
    else {
        return 1;
    }
}

function getMedian(scores) {
    let numScores = scores.length;
    let sortedScores = [];
    let median;
    let upperBound = numScores - 1;
    sortedScores = scores.sort(compareAscendingNumbers);
    if (numScores % 2 == 1) {
        median = sortedScores[upperBound / 2];
        return median;
    }
    else {
        median = (sortedScores[numScores / 2] + sortedScores[(numScores / 2) - 1]) / 2;
        return median;
    }
}

console.log(getMedian([ 80, 83, 86, 92, 100]));
console.log(getMedian([ 80, 83, 86, 87, 92, 100]));
console.log(getMedian(myScores))
console.log(getMedian(yourScores))