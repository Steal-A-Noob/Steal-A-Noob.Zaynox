const searchBar = document.getElementById("searchBar");
const noobImage = document.getElementById("noobImage");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

// Afficher/masquer selon la recherche
searchBar.addEventListener("input", function() {
  const value = searchBar.value.toLowerCase();
  if (value.includes("noob")) {
    noobImage.style.display = "block";
    document.querySelector(".char-name").style.display = "block";
  } else {
    noobImage.style.display = "none";
    document.querySelector(".char-name").style.display = "none";
  }
});

// Ouvrir le popup au clic
noobImage.addEventListener("click", function() {
  popup.style.display = "flex";
});

// Fermer le popup
closeBtn.addEventListener("click", function() {
  popup.style.display = "none";
});

// Fermer si clic en dehors
popup.addEventListener("click", function(e) {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
