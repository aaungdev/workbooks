"use strict";
let teams = [
    {code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX"},
    {code: "DEN", name: "Denver Broncos", plays: "Denver, CO"},
    {code: "HOU", name: "Houston Texans", plays: "Houston, TX"},
    {code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO"}
];

function init() {
    let teamSelect = document.getElementById("teamSelect");
    let displayTeamButton = document.getElementById("displayTeamButton");
    let teamInfoParagraph = document.getElementById("teamInfoParagraph");

    for (const team of teams) {
        let option = document.createElement("option");
        option.value = team.code;
        option.innerText = team.name;
        teamSelect.appendChild(option);
    }

    displayTeamButton.onclick = function() {
        let selectedCode = teamSelect.value;
        let selectedTeam = teams[teamSelect.selectedIndex];
        teamInfoParagraph.innerText = selectedTeam.name + ", plays in " + selectedTeam.plays;
    };
}

window.onload = init;
