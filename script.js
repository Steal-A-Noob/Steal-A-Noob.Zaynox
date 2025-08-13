const searchBar = document.getElementById("searchBar");
const cards = document.querySelectorAll(".card");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const rarityText = document.getElementById("rarityText");
const priceText = document.getElementById("priceText");
const popupBonus = document.getElementById("popupBonus");
const popupClose = document.getElementById("popupClose");

// Infos cartes
const cardData = {
  "Noob": {
    rarity: "Commum",
    rarityColor: "#b0b0b0",
    price: "$250",
    bonus: "+1$/s"
  },
  "Noob Boxeur": {
    rarity: "Rare",
    rarityColor: "blue",
    price: "$2k",
    bonus: "+6$/s"
  }
};

// Filtrer les cartes
searchBar.addEventListener("input", () => {
  const value = searchBar.value.toLowerCase();
  cards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    card.style.display = name.includes(value) ? "block" : "none";
  });
});

// Ouvrir popup
cards.forEach(card => {
  card.addEventListener("click", () => {
    const title = card.dataset.title;
    const data = cardData[title];
    popupImage.src = card.querySelector(".card-image").src;
    popupTitle.textContent = title;
    rarityText.textContent = data.rarity;
    rarityText.style.color = data.rarityColor;
    priceText.textContent = data.price;
    popupBonus.textContent = data.bonus;
    popup.style.display = "flex";
  });
});

// Fermer popup
popupClose.addEventListener("click", () => popup.style.display = "none");
window.addEventListener("click", (e) => { if(e.target == popup) popup.style.display = "none"; });
