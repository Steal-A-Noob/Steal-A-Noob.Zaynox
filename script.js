const searchBar = document.getElementById("searchBar");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupRarity = document.getElementById("popupRarity");
const priceText = document.getElementById("priceText");
const popupBonus = document.getElementById("popupBonus");
const popupUpgrades = document.getElementById("popupUpgrades");
const popupClose = document.getElementById("popupClose");

const imageCards = document.querySelectorAll(".image-card");

// Popup
imageCards.forEach(card => {
  card.addEventListener("click", () => {
    popupImage.src = card.dataset.img;
    popupTitle.textContent = card.dataset.title;
    popupRarity.textContent = card.dataset.rarity;
    
    // Couleur rareté
    switch(card.dataset.rarity) {
      case "Commun": popupRarity.style.color="#ccc"; break;
      case "Rare": popupRarity.style.color="#00f"; break;
      case "UnCommun": popupRarity.style.color="#0ff"; break;
      case "Légendaire": popupRarity.style.color="gold"; break;
      case "Mythique": popupRarity.style.color="#ff00ff"; break;
      default: popupRarity.style.color="#fff";
    }

    priceText.textContent = card.dataset.price;
    popupBonus.textContent = card.dataset.bonus;
    popupUpgrades.textContent = "Améliorations possibles: " + card.dataset.upgrades;
    popup.classList.add("show");
  });
});

popupClose.addEventListener("click", () => {
  popup.classList.remove("show");
});

// Recherche
searchBar.addEventListener("input", () => {
  const filter = searchBar.value.toLowerCase();
  imageCards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    card.style.display = title.includes(filter) ? "inline-block" : "none";
  });
});
