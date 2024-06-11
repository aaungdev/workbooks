"use strict";

document.addEventListener("DOMContentLoaded", function () {
  fetchAndDisplayUserData();
});

function fetchAndDisplayUserData() {
  fetch("http://localhost:3000/users/")
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.querySelector("#userTableBody");
      data.forEach((user) => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = user.name;
        row.appendChild(nameCell);

        const usernameCell = document.createElement("td");
        usernameCell.textContent = user.username;
        row.appendChild(usernameCell);

        const emailCell = document.createElement("td");
        emailCell.textContent = user.email;
        row.appendChild(emailCell);

        const actionsCell = document.createElement("td");

        const editButton = document.createElement("a");
        editButton.href = `edit.html?id=${user.id}`;
        editButton.className = "btn btn-success btn-sm mr-2";
        editButton.textContent = "Edit";
        actionsCell.appendChild(editButton);

        const deleteButton = document.createElement("a");
        deleteButton.href = `delete.html?id=${user.id}`;
        deleteButton.className = "btn btn-danger btn-sm";
        deleteButton.textContent = "Delete";
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);

        tableBody.appendChild(row);
      });
    })
    .catch((error) => console.error("Error fetching user data:", error));
}
