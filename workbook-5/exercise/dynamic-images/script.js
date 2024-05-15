const imageFiles = [
  { id: "1", path: "images/image01.webp", description: "placeholder 1" },
  {
    id: "2",
    path: "https://placehold.co/300x300",
    description: "placeholder 2",
  },
  {
    id: "3",
    path: "https://placehold.co/300x300",
    description: "placeholder 3",
  },
  {
    id: "4",
    path: "https://placehold.co/300x300",
    description: "placeholder 4",
  },
  {
    id: "5",
    path: "https://placehold.co/300x300",
    description: "placeholder 5",
  },
  {
    id: "6",
    path: "https://placehold.co/300x300",
    description: "placeholder 6",
  },
  {
    id: "7",
    path: "https://placehold.co/300x300",
    description: "placeholder 7",
  },
  {
    id: "8",
    path: "https://placehold.co/300x300",
    description: "placeholder 8",
  },
  {
    id: "9",
    path: "https://placehold.co/300x300",
    description: "placeholder 9",
  },
  {
    id: "10",
    path: "https://placehold.co/300x300",
    description: "placeholder 10",
  },
];

window.onload = function () {
  const imageSelector = document.querySelector("#imageSelector");
  const addImageBtn = document.querySelector("#addImage");
  const clearImagesBtn = document.querySelector("#clearImages");
  const imagesContainer = document.querySelector("#imagesContainer");

  for (const image of imageFiles) {
    const option = document.createElement("option");
    option.value = image.path;
    option.innerText = image.description;
    imageSelector.appendChild(option);
  }

  addImageBtn.onclick = function () {
    const selectedImage = imageSelector.value;
    const imgElement = document.createElement("img");
    imgElement.src = selectedImage;
    imgElement.alt = imageSelector.options[imageSelector.selectedIndex].text;
    imagesContainer.appendChild(imgElement);
  };

  clearImagesBtn.onclick = function () {
    imagesContainer.innerHTML = "";
  };
};
