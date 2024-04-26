"use strict";

window.onload = init;

function init() {
        const greetBtn = document.getElementById("greetBtn");
        greetBtn.onclick = onGreetUserBtnClicked;
      }
      
      function onGreetUserBtnClicked() {
        var userName = document.getElementById("nameField").value;
        var greeting = "Hello " + userName + "!";
        alert(greeting);
      }
      
    
      