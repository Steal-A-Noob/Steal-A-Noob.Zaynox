// Initialisation des cartes
const cards = document.querySelectorAll('.image-card');
const popup = document.getElementById('popup');
const popupClose = document.getElementById('popupClose');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const popupRarity = document.getElementById('popupRarity');
const popupBonus = document.getElementById('popupBonus');
const priceText = document.getElementById('priceText');
const searchBar = document.getElementById('searchBar');

cards.forEach(card => {
  card.addEventListener('click', () => {
    popup.style.display = 'block';
    popupImage.src = card.dataset.img;
    popupTitle.textContent = card.dataset.title;
    popupRarity.textContent = `Rareté : ${card.dataset.rarity}`;
    popupBonus.textContent = `Bonus : ${card.dataset.bonus}`;
    priceText.textContent = `Prix : ${card.dataset.price} 💰`;
  });
});

popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target == popup) {
    popup.style.display = 'none';
  }
});

// Recherche dynamique
searchBar.addEventListener('input', () => {
  const filter = searchBar.value.toLowerCase();
  cards.forEach(card => {
    if (card.dataset.title.toLowerCase().includes(filter)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

// Tri par prix ou rareté
const sortRarityBtn = document.getElementById('sortRarity');
const sortPriceAscBtn = document.getElementById('sortPriceAsc');
const sortPriceDescBtn = document.getElementById('sortPriceDesc');
const container = document.querySelector('.images-container');

const rarityOrder = ["Commun", "UnCommun", "Rare", "Legendaire", "Mythique", "Secret"];

function sortCardsByRarity() {
  const sorted = Array.from(cards).sort((a, b) => rarityOrder.indexOf(a.dataset.rarity) - rarityOrder.indexOf(b.dataset.rarity));
  sorted.forEach(card => container.appendChild(card));
}

function sortCardsByPriceAsc() {
  const sorted = Array.from(cards).sort((a, b) => Number(a.dataset.price) - Number(b.dataset.price));
  sorted.forEach(card => container.appendChild(card));
}

function sortCardsByPriceDesc() {
  const sorted = Array.from(cards).sort((a, b) => Number(b.dataset.price) - Number(a.dataset.price));
  sorted.forEach(card => container.appendChild(card));
}

sortRarityBtn.addEventListener('click', sortCardsByRarity);
sortPriceAscBtn.addEventListener('click', sortCardsByPriceAsc);
sortPriceDescBtn.addEventListener('click', sortCardsByPriceDesc);
