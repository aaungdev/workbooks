window.onload = function init() {
    var addButton = document.getElementById('addBtn');
    var subtractButton = document.getElementById('subtractBtn');
    var multiplyButton = document.getElementById('multiplyBtn');
    var divideButton = document.getElementById('divideBtn');
  
    addButton.onclick = onAddBtnClicked;
    subtractButton.onclick = onSubtractBtnClicked;
    multiplyButton.onclick = onMultiplyBtnClicked;
    divideButton.onclick = onDivideBtnClicked;
  };
  
  function onAddBtnClicked() {
    var number1 = Number(document.getElementById('number1Field').value);
    var number2 = Number(document.getElementById('number2Field').value);
    var result = number1 + number2;
    document.getElementById('answerField').value = result;
  }
  
  function onSubtractBtnClicked() {
    var number1 = Number(document.getElementById('number1Field').value);
    var number2 = Number(document.getElementById('number2Field').value);
    var result = number1 - number2;
    document.getElementById('answerField').value = result;
  }
  
  function onMultiplyBtnClicked() {
    var number1 = Number(document.getElementById('number1Field').value);
    var number2 = Number(document.getElementById('number2Field').value);
    var result = number1 * number2;
    document.getElementById('answerField').value = result;
  }
  
  function onDivideBtnClicked() {
    var number1 = Number(document.getElementById('number1Field').value);
    var number2 = Number(document.getElementById('number2Field').value);
    var result = number1 / number2;
    document.getElementById('answerField').value = result;
  }
  