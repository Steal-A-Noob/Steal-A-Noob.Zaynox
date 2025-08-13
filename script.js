const searchBar = document.getElementById("searchBar");
const images = document.querySelectorAll(".image-card");
const popup = document.getElementById("popup");
const popupClose = document.getElementById("popupClose");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupRarity = document.getElementById("popupRarity");
const priceText = document.getElementById("priceText");
const popupBonus = document.getElementById("popupBonus");

// Afficher popup quand on clique sur une image
images.forEach(card => {
  card.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImage.src = card.dataset.img;
    popupTitle.textContent = card.dataset.title;
    popupRarity.textContent = "Rareté: " + card.dataset.rarity;
    priceText.innerHTML = "Prix: <span style='color:limegreen'>" + card.dataset.price + "</span>";
    popupBonus.innerHTML = card.dataset.bonus;
  });
});

// Fermer popup
popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

// Barre de recherche
searchBar.addEventListener("input", () => {
  const value = searchBar.value.toLowerCase();
  images.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    if(title.includes(value)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});
