const searchBar = document.getElementById("searchBar");
const noobImage = document.getElementById("noobImage");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

// Affiche/Cache l'image selon la recherche
searchBar.addEventListener("input", function() {
  const value = searchBar.value.toLowerCase();
  if ("noob".includes(value)) {
    noobImage.style.display = "inline-block";
  } else {
    noobImage.style.display = "none";
  }
});

// Clique sur l'image = ouvre modal
noobImage.addEventListener("click", function() {
  modal.style.display = "block";
});

// Fermer le modal
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Fermer si clic en dehors
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Enter dans la barre
searchBar.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    alert("Tu as cherché : " + searchBar.value + " 😎");
  }
});
