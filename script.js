const searchBar = document.getElementById("searchBar");
const noobContainer = document.getElementById("noobContainer");

searchBar.addEventListener("input", function() {
  const value = searchBar.value.toLowerCase();

  // Toujours afficher l'image
  noobContainer.style.display = "block";

  // Suggestions simples
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
