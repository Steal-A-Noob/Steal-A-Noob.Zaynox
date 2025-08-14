const searchBar = document.getElementById("searchBar");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupRarity = document.getElementById("popupRarity");
const popupPrice = document.getElementById("popupPrice");
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

    // Couleur rareté
    let rarityColor = "#ccc";
    if (rarity.toLowerCase() === "rare") rarityColor = "deepskyblue";
    else if (rarity.toLowerCase() === "commun") rarityColor = "lightgray";
    else if (rarity.toLowerCase() === "légendaire") rarityColor = "orange";
    else if (rarity.toLowerCase() === "mythique") rarityColor = "deeppink";
    else if (rarity.toLowerCase() === "uncommun") rarityColor = "lime";

    popupRarity.innerHTML = `Rareté: <span style="color:${rarityColor}">${rarity}</span>`;

    // Prix en vert sauf le mot
    popupPrice.innerHTML = `Prix: <span class="price-value">${price}</span>`;

    // Bonus uniquement valeur en jaune
    popupBonus.innerHTML = `<span class="bonus-value">${bonus}</span>`;
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
