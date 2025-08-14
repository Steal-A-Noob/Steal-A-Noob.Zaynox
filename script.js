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
    popupImage.src = card.getAttribute("data-img");
    popupTitle.textContent = card.getAttribute("data-title");
    
    // Couleur selon rareté
    let rarity = card.getAttribute("data-rarity");
    if(rarity.toLowerCase() === "rare") popupRarity.innerHTML = `Rareté : <span style="color:deepskyblue">${rarity}</span>`;
    else if(rarity.toLowerCase() === "mythique") popupRarity.innerHTML = `Rareté : <span style="color:#ff00ff">${rarity}</span>`;
    else popupRarity.innerHTML = `Rareté : <span style="color:#ccc">${rarity}</span>`;

    // Prix en vert
    priceText.innerHTML = `Prix : <span style="color:#0f0">${card.getAttribute("data-price")}</span>`;
    // Bonus en jaune
    popupBonus.innerHTML = `<span style="color:yellow">${card.getAttribute("data-bonus")}</span>`;
    popup.style.display = "block";
  });
});

// Fermer popup
popupClose.addEventListener("click", () => popup.style
