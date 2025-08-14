// Popup
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupRarity = document.getElementById("popupRarity");
const priceText = document.getElementById("priceText");
const popupBonus = document.getElementById("popupBonus");
const popupClose = document.getElementById("popupClose");

const imageCards = document.querySelectorAll(".image-card");

// Affichage popup
imageCards.forEach(card => {
  card.addEventListener("click", () => {
    const imgSrc = card.querySelector("img").src;
    const title = card.getAttribute("data-title");
    const rarity = card.getAttribute("data-rarity");
    const price = card.getAttribute("data-price");
    const bonus = card.getAttribute("data-bonus");

    popupImage.src = imgSrc; // Image au-dessus
    popupTitle.textContent = title;

    // Couleur rareté
    let rarityColor;
    switch (rarity.toLowerCase()) {
      case "commun": rarityColor = "#FFFFFF"; break;
      case "uncommun": rarityColor = "#00FF00"; break;
      case "rare": rarityColor = "#0000FF"; break;
      case "légendaire": rarityColor = "#FFA500"; break;
      case "mythique": rarityColor = "#FF00FF"; break;
      default: rarityColor = "#FFFFFF";
    }
    popupRarity.innerHTML = `<span style="color:${rarityColor}">Rareté: ${rarity}</span>`;
    priceText.innerHTML = `<span style="color:#FFD700">Prix: ${price} $</span>`;
    popupBonus.textContent = `Bonus: ${bonus}`;

    popup.style.display = "flex";
  });
});

// Fermeture popup
popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

// Tri
const sortRarityBtn = document.getElementById("sortRarity");
const sortPriceAscBtn = document.getElementById("sortPriceAsc");
const sortPriceDescBtn = document.getElementById("sortPriceDesc");

const container = document.querySelector(".images-container");

// Ordre rareté
const rarityOrder = ["mythique", "légendaire", "rare", "commun", "uncommun"];

// Tri par rareté
sortRarityBtn.addEventListener("click", () => {
  const cards = Array.from(imageCards);
  cards.sort((a, b) => {
    return rarityOrder.indexOf(a.getAttribute("data-rarity").toLowerCase()) - 
           rarityOrder.indexOf(b.getAttribute("data-rarity").toLowerCase());
  });
  cards.forEach(card => container.appendChild(card));
});

// Tri par prix croissant
sortPriceAscBtn.addEventListener("click", () => {
  const cards = Array.from(imageCards);
  cards.sort((a, b) => parseInt(a.getAttribute("data-price")) - parseInt(b.getAttribute("data-price")));
  cards.forEach(card => container.appendChild(card));
});

// Tri par prix décroissant
sortPriceDescBtn.addEventListener("click", () => {
  const cards = Array.from(imageCards);
  cards.sort((a, b) => parseInt(b.getAttribute("data-price")) - parseInt(a.getAttribute("data-price")));
  cards.forEach(card => container.appendChild(card));
});

// Recherche
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", () => {
  const term = searchBar.value.toLowerCase();
  imageCards.forEach(card => {
    const title = card.getAttribute("data-title").toLowerCase();
    card.style.display = title.includes(term) ? "block" : "none";
  });
});
