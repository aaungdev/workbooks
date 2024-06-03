"use strict"

fetch("https://jsonplaceholder.typicode.com/todos/5")
  .then((response) => response.json())
  .then((json) => console.log(json));

  fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json));
