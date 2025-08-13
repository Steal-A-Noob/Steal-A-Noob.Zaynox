const searchBar = document.getElementById("searchBar");
const characters = [
  {img: "noob.png", name: "Noob"}
];

const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupName = document.getElementById("popupName");
const closeBtn = document.getElementById("closeBtn");

// Popup pour Noob seulement
characters.forEach(char => {
  const element = document.querySelector(`img[src='${char.img}']`);
  element.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImage.src = char.img;
    popupName.textContent = char.name;
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if(e.target === popup) popup.style.display = "none";
});

// Barre de recherche pour Noob
searchBar.addEventListener("input", function() {
  const value = searchBar.value.toLowerCase();
  characters.forEach(char => {
    const element = document.querySelector(`img[src='${char.img}']`);
    if(char.name.toLowerCase().includes(value)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});

searchBar.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    alert("Tu as cherché : " + searchBar.value + " 😎");
  }
});
