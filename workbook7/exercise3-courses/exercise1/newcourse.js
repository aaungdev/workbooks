"use strict";

document
  .getElementById("newCourseForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let department = document.getElementById("courseDepartment").value;
    let number = document.getElementById("courseNumber").value;
    let title = document.getElementById("courseTitle").value;

    fetch("http://localhost:8081/api/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        department: department,
        number: number,
        title: title,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.href = "index.html";
      })
      .catch((error) => console.error("Error:", error));
  });
