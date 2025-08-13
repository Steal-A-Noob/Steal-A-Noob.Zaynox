const searchBar = document.getElementById("searchBar");
const noobImage = document.getElementById("noobImage");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// Au début, l'image est visible
noobImage.style.display = "block";

// Recherche avec affichage image si mot partiel
searchBar.addEventListener("input", function() {
  const value = searchBar.value.toLowerCase();
  if (value.includes("noob")) {
    noobImage.style.display = "block";
  } else {
    noobImage.style.display = "none";
  }
});

// Affiche alerte quand on appuie sur Entrée
searchBar.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    alert("Tu as cherché : " + searchBar.value + " 😎");
  }
});

// Quand on clique sur l'image → afficher popup
noobImage.addEventListener("click", () => {
  popup.style.display = "flex";
});

// Fermer popup avec la croix
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// Fermer popup si on clique à l'extérieur
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
