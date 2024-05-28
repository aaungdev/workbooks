"use strict"

let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
];

function calculateAverages(students) {
    for (let i = 0; i < students.length; i++) {
        let scores = students[i].scores;
        let sum = 0;
        for (let j = 0; j < scores.length; j++) {
            sum += scores[j];
        }
        let average = sum / scores.length;
        console.log(students[i].name + "'s average score: " + average.toFixed(2));
    }
}

calculateAverages(students);
