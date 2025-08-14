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
    const imgSrc = card.querySelector("img").src; // ⚡ On prend l'image affichée
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
