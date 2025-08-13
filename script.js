const searchBar = document.getElementById("searchBar");
const noobImage = document.getElementById("noobImage");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

// Afficher le popup quand on clique sur l'image
noobImage.addEventListener("click", () => {
  popup.style.display = "flex";
});

// Fermer le popup
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Fermer si clic en dehors
window.addEventListener("click", (e) => {
  if(e.target === popup) popup.style.display = "none";
});

// Barre de recherche
searchBar.addEventListener("input", function() {
  const value = searchBar.value.toLowerCase();
  if (value.includes("noob") || value.includes("n")) { // même si pas complet
    noobImage.style.display = "block";
  } else {
    noobImage.style.display = "none";
  }
});

searchBar.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    alert("Tu as cherché : " + searchBar.value + " 😎");
  }
});
