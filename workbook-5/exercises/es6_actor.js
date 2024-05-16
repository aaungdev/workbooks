"use strict";
let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];

// Who is the Academy Member whose ID is 187?
let memberWithID187 = academyMembers.find((member) => member.memID == 187);
console.log("The Academy Member whose ID is 187:", memberWithID187);

// Who has been in at least 3 films?
let membersInAtLeast3Films = academyMembers.filter(
  (member) => member.films.length >= 3,
);
console.log(
  "Members who have been in at least 3 films:",
  membersInAtLeast3Films,
);

// Who has a name that starts with "Bob"?
let membersWithNameStartingBob = academyMembers.filter((member) =>
  member.name.startsWith("Bob"),
);
console.log(
  "Members whose name starts with 'Bob':",
  membersWithNameStartingBob,
);

// HARDER: Which Academy Members have been in a film that starts with "A"?
let membersInFilmStartingWithA = academyMembers.filter((member) =>
  member.films.some((film) => film.startsWith("A")),
);
console.log(
  "Members who have been in a film that starts with 'A':",
  membersInFilmStartingWithA,
);
