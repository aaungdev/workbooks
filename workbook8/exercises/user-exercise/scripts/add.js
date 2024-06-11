"use strict";

function addUserData() {
  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  const userData = {
    name: name,
    username: username,
    email: email,
  };

  fetch("http://localhost:3000/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("User added:", data);
      window.location.href = "index.html";
    })
    .catch((error) => console.error("Error adding user:", error));
}
