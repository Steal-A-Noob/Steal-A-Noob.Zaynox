const searchBar = document.getElementById("searchBar");
const characters = document.querySelectorAll(".character");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupName = document.getElementById("popupName");
const closeBtn = document.getElementById("closeBtn");

// Ouvrir popup pour chaque image
characters.forEach(char => {
  char.addEventListener("click", () => {
    const name = char.getAttribute("data-name");
    const img = char.getAttribute("data-img");
    popup.style.display = "flex";
    popupImage.src = img;
    popupName.textContent = name;
  });
});

// Fermer popup
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});
window.addEventListener("click", (e) => {
  if(e.target === popup) popup.style.display = "none";
});

// Barre de recherche
searchBar.addEventListener("input", function() {
  const value = searchBar.value.toLowerCase();
  characters.forEach(char => {
    const name = char.getAttribute("data-name").toLowerCase();
    if(name.includes(value)) {
      char.parentElement.style.display = "block";
    } else {
      char.parentElement.style.display = "none";
    }
  });
});
