function displayMailingLabel(name, address, city, state, zip) {
  console.log(name);
  console.log("address: " + address + " " + city + " " + state + " " + zip);
}

function addNumbers(num1, num2) {
  console.log("Sum: " + num1 + num2);
}
function displayReceipt(totalDue, amountPaid) {
  var change = amountPaid - totalDue;
  console.log("Total Due: $" + totalDue);
  console.log("Amount Paid: $" + amountPaid);

  if (change > 0) {
    console.log("Change: $" + change);
  } else if (change == 0) {
    console.log("No change needed");
  } else if (change < 0) {
    console.log("You still owe another: $" + Math.abs(change).toFixed(2));
  }

  console.log();
}

displayMailingLabel("John Doe", "123 Elm St", "Springfield", "IL", "62704");
displayMailingLabel("Jane Smith", "456 Oak St", "Libertyville", "IL", "60048");

addNumbers(5, 7);
addNumbers(20, 25);

displayReceipt(11.75, 20);
displayReceipt(11.75, 11.75);
displayReceipt(11.75, 10);
