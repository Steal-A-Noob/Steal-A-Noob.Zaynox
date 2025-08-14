const searchBar = document.getElementById("searchBar");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupRarity = document.getElementById("popupRarity");
const priceText = document.getElementById("priceText");
const popupBonus = document.getElementById("popupBonus");
const popupClose = document.getElementById("popupClose");

const imageCards = document.querySelectorAll(".image-card");

imageCards.forEach(card => {
  card.addEventListener("click", () => {
    const title = card.getAttribute("data-title");
    const rarity = card.getAttribute("data-rarity");
    const price = card.getAttribute("data-price");
    const bonus = card.getAttribute("data-bonus");
    const img = card.getAttribute("data-img");

    popup.style.display = "block";
    popupImage.src = img;
    popupTitle.textContent = title;
    popupRarity.textContent = `Rareté: ${rarity}`;
    priceText.textContent = `Prix: ${price}`;
    popupBonus.textContent = bonus;

    // Couleur rareté popup selon la carte
    switch(rarity) {
      case "Commun": popupRarity.style.color = "lightgray"; break;
      case "UnCommun": popupRarity.style.color = "orange"; break;
      case "Rare": popupRarity.style.color = "#00bfff"; break;
      case "Légendaire": popupRarity.style.color = "gold"; break;
      case "Mythique": popupRarity.style.color
