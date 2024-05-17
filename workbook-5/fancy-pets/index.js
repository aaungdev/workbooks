"use strict";

window.onload = function () {
  let pets = [
    {
      name: "Rubby",
      type: "Dog",
      breed: "Corgi",
      bestTrick: "Tug of war",
      image: "images/pet01.jpeg",
    },
    {
      name: "Howdy",
      type: "Dog",
      breed: "Mixed Breed",
      bestTrick: "Go find it!",
      image: "images/pet02.jpeg",
    },
    {
      name: "KitKit",
      type: "Cat",
      breed: "American Shorthair",
      bestTrick: "Commanding his owner to feed him",
      image: "images/pet05.jpeg",
    },
    {
      name: "Lil' Miss",
      type: "Cat",
      breed: "Tabby",
      bestTrick: "Looking aloof",
      image: "images/pet06.jpeg",
    },
    {
      name: "Happy",
      type: "Dog",
      breed: "Golden Retriever",
      bestTrick: "Refusing to retrieve!",
      image: "images/pet03.jpeg",
    },
    {
      name: "Piper",
      type: "Dog",
      breed: "Beagle",
      bestTrick: "Find it!  Dropped food edition!",
      image: "images/pet04.jpeg",
    },
    {
      name: "Spooky",
      type: "Cat",
      breed: "Mixed",
      bestTrick: "Gymnastics!",
      image: "images/pet07.jpeg",
    },
  ];

  const petSelect = document.getElementById("petSelect");
  const petCardContainer = document.getElementById("petCardContainer");

  function populatePetSelect() {
    for (const pet of pets) {
      const option = document.createElement("option");
      option.value = pet.name;
      option.textContent = pet.name;
      petSelect.appendChild(option);
    }
  }

  function createPetCard(pet) {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card mb-4";

    let img = document.createElement("img");
    img.className = "card-img-top card-img-fixed";
    img.src = pet.image;
    img.alt = pet.name;

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerText = pet.name;

    let cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerHTML = `<strong>Type:</strong> ${pet.type}<br>
                               <strong>Breed:</strong> ${pet.breed}<br>
                               <strong>Best Trick:</strong> ${pet.bestTrick}`;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);

    return cardDiv;
  }

  function displayPetDetails() {
    petCardContainer.innerHTML = "";

    const selectedPetName = petSelect.value;
    if (selectedPetName == "") return;

    const selectedPet = pets.find((pet) => pet.name == selectedPetName);
    if (selectedPet) {
      const petCard = createPetCard(selectedPet);
      petCardContainer.appendChild(petCard);
    }
  }

  petSelect.onchange = displayPetDetails;

  populatePetSelect();
};
