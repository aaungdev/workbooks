"use strict";

document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:8081/api/courses")
    .then((response) => response.json())
    .then((data) => {
      let tbody = document.querySelector("#coursesTable tbody");
      data.forEach((course) => {
        let row = document.createElement("tr");
        let departmentCell = document.createElement("td");
        departmentCell.textContent = course.department;
        let numberCell = document.createElement("td");
        numberCell.textContent = course.number;
        let titleCell = document.createElement("td");
        titleCell.textContent = course.title;

        row.appendChild(departmentCell);
        row.appendChild(numberCell);
        row.appendChild(titleCell);
        tbody.appendChild(row);
      });
    })
    .catch((error) => console.error("Error:", error));
});
