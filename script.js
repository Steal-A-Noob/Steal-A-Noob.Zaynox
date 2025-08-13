const searchBar = document.getElementById("searchBar");
const noobContainer = document.getElementById("noobContainer");

searchBar.addEventListener("input", function() {
  const value = searchBar.value.toLowerCase();
  // Si l'utilisateur tape une partie de "noob", ça montre l'image
  if ("noob".includes(value) && value !== "") {
    noobContainer.style.display = "block";
  } else if (value === "") {
    noobContainer.style.display = "block"; // image visible même si rien écrit
  } else {
    noobContainer.style.display = "none";
  }
});

searchBar.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    alert("Tu as cherché : " + searchBar.value + " 😎");
  }
});
