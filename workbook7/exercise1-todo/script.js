// script.js
window.onload = function () {
  const todoIdInput = document.querySelector("#todoId");
  const fetchTodoButton = document.querySelector("#fetchTodo");
  const todoResultDiv = document.querySelector("#todoResult");

  fetchTodoButton.onclick = function () {
    const todoId = todoIdInput.value;
    const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const todoInfo = `ID: ${data.id}, Title: ${data.title}, Completed: ${data.completed}`;
        todoResultDiv.innerText = todoInfo;
      });
  };
};
