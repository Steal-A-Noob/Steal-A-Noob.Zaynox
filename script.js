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

// Popups
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

    let rarityClass = "";
    if (rarity.toLowerCase() === "rare") rarityClass = "rarity-rare";
    else if (rarity.toLowerCase() === "uncommun") rarityClass = "rarity-uncommun";
    else if (rarity.toLowerCase() === "mythique") rarityClass = "rarity-mythique";

    popupRarity.innerHTML = `Rareté: <span class="${rarityClass}">${rarity}</span>`;

    popup.classList.add("show");
  });
});

popupClose.addEventListener("click", () => {
  popup.classList.remove("show");
});

// Recherche
searchBar.addEventListener("input", function() {
  const value = searchBar.value.toLower
