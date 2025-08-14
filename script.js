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
    popupImage.src = card.getAttribute("data-img");
    popupTitle.textContent = card.getAttribute("data-title");
    popupRarity.textContent = "Rareté : " + card.getAttribute("data-rarity");
    priceText.textContent = "Prix : " + card.getAttribute("data-price");
    popupBonus.textContent = "Bonus : " + card.getAttribute("data-bonus");
    popup.style.display = "block";
  });
});

// Fermer popup
popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

// Fermer si clic en dehors
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

// Recherche
searchBar.addEventListener("input", () => {
  const filter = searchBar.value.toLowerCase();
  imageCards.forEach(card => {
    const title = card.getAttribute("data-title").toLowerCase();
    const rarity = card.getAttribute("data-rarity").toLowerCase();
    const price = card.getAttribute("data-price").toLowerCase();
    if (title.includes(filter) || rarity.includes(filter) || price.includes(filter)) {
      card.style.display = "inline-block";
    } else {
      card.style.display = "none";
    }
  });
});
