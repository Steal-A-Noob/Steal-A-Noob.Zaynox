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

    let rarityColor = "#ccc";
    if (rarity.toLowerCase() === "rare") rarityColor = "#00bfff";
    if (rarity.toLowerCase() === "légendaire") rarityColor = "gold";

    popupRarity.innerHTML = `Rareté: <span style="color:${rarityColor}">${rarity}</span>`;
    priceText.innerHTML = `Prix: <span style="color:lime">${price}</span>`;
    popupBonus.innerHTML = `<span style="color:yellow">${bonus}</span>`;
  });
});

popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

searchBar.addEventListener("input", function() {
  const value = searchBar.value.toLowerCase();
  imageCards.forEach(card => {
    const title = card.getAttribute("data-title").toLowerCase();
    card.style.display = title.includes(value) ? "inline-block" : "none";
  });
});
