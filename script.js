const searchBar = document.getElementById("searchBar");
const noobImage = document.getElementById("noobImage");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// Affiche l'image même si partiel
searchBar.addEventListener("input", function() {
  const value = searchBar.value.toLowerCase();
  if (value.includes("noob")) {
    noobImage.style.display = "block";
  } else {
    noobImage.style.display = "none";
  }
});

// Alerte sur Entrée
searchBar.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    alert("Tu as cherché : " + searchBar.value + " 😎");
  }
});

// Popup quand on clique sur l'image
noobImage.addEventListener("click", () => {
  popup.style.display = "flex";
});

// Fermer popup
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// Fermer popup si clic dehors
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
