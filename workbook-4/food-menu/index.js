let menu = {
  drinks: ["Water", "Tea", "Sweet Tea", "Coke", "Dr. Pepper", "Sprite"],
  entrees: [
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate",
  ],
  desserts: ["Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"],
};

window.onload = function () {
  let categorySelect = document.getElementById("categorySelect");
  let itemList = document.getElementById("itemList");

  categorySelect.onchange = function () {
    let selectedCategory = categorySelect.value;
    itemList.innerHTML = "";

    menu[selectedCategory].forEach(function (item) {
      let option = document.createElement("option");
      option.textContent = item;
      itemList.appendChild(option);
    });
  };
};
