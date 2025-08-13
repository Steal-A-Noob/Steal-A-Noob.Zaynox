const searchBar = document.getElementById("searchBar");
const imageContainer = document.querySelector(".image-container");

searchBar.addEventListener("input", function() {
  const value = searchBar.value.toLowerCase();
  if (value.includes("noob")) {
    imageContainer.style.display = "block";
  } else {
    imageContainer.style.display = "none";
  }
});

searchBar.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    alert("Tu as cherché : " + searchBar.value + " 😎");
  }
});
