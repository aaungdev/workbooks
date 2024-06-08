"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let params = new URLSearchParams(window.location.search);
  let courseId = params.get("id");

  fetch(`http://localhost:8081/api/courses/${courseId}`)
    .then((response) => response.json())
    .then((course) => {
      document.getElementById("detailsDepartment").textContent =
        course.department;
      document.getElementById("detailsNumber").textContent = course.number;
      document.getElementById("detailsTitle").textContent = course.title;
      document.getElementById("detailsDescription").textContent =
        course.description;
    })
    .catch((error) => console.error("Error:", error));
});
