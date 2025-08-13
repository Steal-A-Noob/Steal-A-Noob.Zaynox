const searchBar = document.getElementById("searchBar");
const noobContainer = document.getElementById("noobContainer");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

// Recherche
searchBar.addEventListener("input", function() {
  const value = searchBar.value.toLowerCase();
  noobContainer.style.display = "block";

  const suggestions = ["noob"];
  const datalist = document.getElementById("suggestions");
  datalist.innerHTML = "";
  suggestions.forEach(item => {
    if (item.toLowerCase().includes(value)) {
      const option = document.createElement("option");
      option.value = item;
      datalist.appendChild(option);
    }
  });
});

searchBar.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    alert("Tu as cherché : " + searchBar.value + " 😎");
  }
});

// Modal
noobContainer.addEventListener("click", function() {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
