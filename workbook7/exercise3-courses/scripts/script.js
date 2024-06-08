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

        let detailsCell = document.createElement("td");
        let anchor = document.createElement("a");
        anchor.href = `details.html?courseid=${course.id}`;
        anchor.textContent = "See details";
        detailsCell.appendChild(anchor);

        row.appendChild(departmentCell);
        row.appendChild(numberCell);
        row.appendChild(titleCell);
        row.appendChild(detailsCell);
        tbody.appendChild(row);
      });
    })
    .catch((error) => console.error("Error:", error));
});
