"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let params = new URLSearchParams(window.location.search);
  let courseId = params.get("courseid");

  fetch(`http://localhost:8081/api/courses/${courseId}`)
    .then((response) => response.json())
    .then((course) => {
      document.getElementById("detailsDepartment").textContent =
        course.department;
      document.getElementById("detailsNumber").textContent = course.number;
      document.getElementById("detailsTitle").textContent = course.title;
      document.getElementById("detailsDescription").textContent =
        course.description;
      document.getElementById("detailsInstructor").textContent =
        course.instructor;
      document.getElementById("detailsStartDate").textContent =
        course.startDate;
      document.getElementById("detailsDuration").textContent =
        course.duration + " days";
    })
    .catch((error) => console.error("Error:", error));
});
