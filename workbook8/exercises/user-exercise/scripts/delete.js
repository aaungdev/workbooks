"use strict";

function deleteUserData() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");

  fetch(`http://localhost:3000/users/${userId}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("User deleted:", data);
      window.location.href = "index.html";
    })
    .catch((error) => console.error("Error deleting user:", error));
}
