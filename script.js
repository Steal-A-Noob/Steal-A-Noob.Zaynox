const searchBar = document.getElementById("searchBar");
const resetBtn = document.getElementById("resetBtn");
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

    popupImage.src = img;
    popupTitle.textContent = title;
    priceText.textContent = `Prix: ${price}`;
    popupBonus.textContent = bonus;

    if (rarity.toLowerCase() === "rare") {
      popupRarity.innerHTML = `Rareté: <span class="rarity-rare">${rarity}</span>`;
    } else if (rarity.toLowerCase() === "mythique") {
      popupRarity.innerHTML = `Rareté: <span class="rarity-mythique">${rarity}</span>`;
   
