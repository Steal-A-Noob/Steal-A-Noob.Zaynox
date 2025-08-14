const searchBar = document.getElementById("searchBar");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupRarity = document.getElementById("popupRarity");
const priceText = document.getElementById("priceText");
const popupBonus = document.getElementById("popupBonus");
const popupClose = document.getElementById("popupClose");

const imageCards = document.querySelectorAll(".image-card");

// Ouvrir popup au clic
imageCards.forEach(card => {
  card.addEventListener("click", () => {
    const title = card.getAttribute("data-title");
    const rarity = card.getAttribute("data-rarity");
    const price = card.getAttribute("data-price");
    const bonus = card.getAttribute("data
