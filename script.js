const searchBar = document.getElementById("searchBar");
const sortSelect = document.getElementById("sortSelect");
const imagesContainer = document.getElementById("imagesContainer");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupRarity = document.getElementById("popupRarity");
const priceText = document.getElementById("priceText");
const popupBonus = document.getElementById("popupBonus");
const popupClose = document.getElementById("popupClose");

function showPopup(card) {
  popup.style.display = "block";
  popupImage.src = card.getAttribute("data-img");
  popupTitle.textContent = card.getAttribute("data-title");
  
  const rarity = card.getAttribute("data-rarity");
  popupRarity.textContent = `Rareté: ${rarity}`;
  popupRarity.className = `rarity-${rarity.replace(/ /g,'')}`;

  priceText.textContent = `Prix: $${card.getAttribute("data-price")}`;
  popupBonus.textContent = `+${card.getAttribute("data-bonus")}$/s`;
}

document.querySelectorAll(".image-card").forEach(card => {
  card.addEventListener("click", () => showPopup(card));
});

popupClose.addEvent
