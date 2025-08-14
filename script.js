const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupRarity = document.getElementById("popupRarity");
const priceText = document.getElementById("priceText");
const popupBonus = document.getElementById("popupBonus");
const closeBtn = document.querySelector(".close");

const imageCards = document.querySelectorAll(".card");

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

    // Couleur de rareté
    let rarityColor = "#ccc";
    if (rarity.toLowerCase() === "rare") rarityColor = "blue";

    popupRarity.innerHTML = `Rareté: <span style="color:${rarityColor}">${rarity}</span>`;
    priceText.textContent = price;
    popupBonus.textContent = bonus;
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
