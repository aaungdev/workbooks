"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(location.search);
  let id = -1;
  if (urlParams.has("courseid") === true) {
    id = urlParams.get("courseid");

    fetch(`http://localhost:8081/api/courses/${id}`)
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
  } else {
    console.error("Course ID not found in the query string.");
  }
});
