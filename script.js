// Script principal

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
    const imgSrc = card.getAttribute("data-img");
    const title = card.getAttribute("data-title");
    const rarity = card.getAttribute("data-rarity");
    const price = card.getAttribute("data-price");
    const bonus = card.getAttribute("data-bonus");

    popupImage.src = imgSrc; // Image au-dessus
    popupTitle.textContent = title;

    // Couleurs rareté
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

    // Couleur argent
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
const imagesContainer = document.querySelector(".images-container");

sortRarityBtn.addEventListener("click", () => {
  let cards = Array.from(imageCards);
  cards.sort((a,b) => a.getAttribute("data-rarity").localeCompare(b.getAttribute("data-rarity")));
  cards.forEach(card => imagesContainer.appendChild(card));
});

sortPriceAscBtn.addEventListener("click", () => {
  let cards = Array.from(imageCards);
  cards.sort((a,b) => parseInt(a.getAttribute("data-price")) - parseInt(b.getAttribute("data-price")));
  cards.forEach(card => imagesContainer.appendChild(card));
});

sortPriceDescBtn.addEventListener("click", () => {
  let cards = Array.from(imageCards);
  cards.sort((a,b) => parseInt(b.getAttribute("data-price")) - parseInt(a.getAttribute("data-price")));
  cards.forEach(card => imagesContainer.appendChild(card));
});

// Recherche
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", () => {
  const value = searchBar.value.toLowerCase();
  imageCards.forEach(card => {
    const title = card.getAttribute("data-title").toLowerCase();
    card.style.display = title.includes(value) ? "block" : "none";
  });
});
