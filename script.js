// Récupération des éléments
const searchBar = document.getElementById("searchBar");
const imageCards = document.querySelectorAll(".image-card");
const popup = document.getElementById("popup");
const popupClose = document.getElementById("popupClose");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupRarity = document.getElementById("popupRarity");
const priceText = document.getElementById("priceText");
const popupBonus = document.getElementById("popupBonus");

// Couleurs par rareté
const rarityColors = {
  "Commun": "#9b9b9b",
  "UnCommun": "#1e90ff",
  "Rare": "#ff69b4",
  "Legendaire": "#ffd700",
  "Mythique": "#9400d3",
  "Secret": "#ff4500"
};

// Affichage popup
imageCards.forEach(card => {
  card.addEventListener("click", () => {
    popup.style.display = "block";
    popupImage.src = card.dataset.img;
    popupTitle.textContent = card.dataset.title;
    popupRarity.textContent = "Rareté : " + card.dataset.rarity;
    popupRarity.style.color = rarityColors[card.dataset.rarity] || "#ffffff";
    priceText.textContent = "Prix : " + card.dataset.price;
    popupBonus.textContent = "Bonus : " + card.dataset.bonus;
  });
});

// Fermeture popup
popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

// Filtrage par recherche
searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();
  imageCards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    if(title.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// Tri par rareté
document.getElementById("sortRarity").addEventListener("click", () => {
  const container = document.querySelector(".images-container");
  const cardsArray = Array.from(imageCards);
  const rarityOrder = ["Commun", "UnCommun", "Rare", "Legendaire", "Mythique", "Secret"];
  
  cardsArray.sort((a,b) => {
    return rarityOrder.indexOf(a.dataset.rarity) - rarityOrder.indexOf(b.dataset.rarity);
  });

  cardsArray.forEach(card => container.appendChild(card));
});

// Tri par prix croissant
document.getElementById("sortPriceAsc").addEventListener("click", () => {
  const container = document.querySelector(".images-container");
  const cardsArray = Array.from(imageCards);
  
  cardsArray.sort((a,b) => Number(a.dataset.price) - Number(b.dataset.price));
  
  cardsArray.forEach(card => container.appendChild(card));
});

// Tri par prix décroissant
document.getElementById("sortPriceDesc").addEventListener("click", () => {
  const container = document.querySelector(".images-container");
  const cardsArray = Array.from(imageCards);
  
  cardsArray.sort((a,b) => Number(b.dataset.price) - Number(a.dataset.price));
  
  cardsArray.forEach(card => container.appendChild(card));
});
