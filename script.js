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
    popupRarity.innerHTML = `Rareté: <span style="color: ${card.dataset.rarity === "Rare" ? "blue" : "#ccc"}">${card.dataset.rarity}</span>`;
    priceText.innerHTML = `Prix: <span style="color:limegreen">${card.dataset.price}</span>`;
    popupBonus.innerHTML = `<span style="color:yellow">${card.dataset.bonus}</span>`;
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
    card.style.display = title.includes(value) ? "flex" : "none";
  });
});
