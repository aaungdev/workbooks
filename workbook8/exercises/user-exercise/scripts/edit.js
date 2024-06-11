"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");
  fetchUserData(userId);
});

function fetchUserData(userId) {
  fetch(`http://localhost:3000/users/${userId}`)
    .then((response) => response.json())
    .then((user) => {
      document.getElementById("name").value = user.name;
      document.getElementById("username").value = user.username;
      document.getElementById("email").value = user.email;
    })
    .catch((error) => console.error("Error fetching user data:", error));
}

function editUserData() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");

  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  const userData = {
    name: name,
    username: username,
    email: email,
  };

  fetch(`http://localhost:3000/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("User updated:", data);
      window.location.href = "index.html";
    })
    .catch((error) => console.error("Error updating user:", error));
}
