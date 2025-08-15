// --- Sélection des éléments ---
const popup = document.getElementById('popup');
const popupClose = document.getElementById('popupClose');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const popupRarity = document.getElementById('popupRarity');
const popupBonus = document.getElementById('popupBonus');
const priceText = document.getElementById('priceText');
const searchBar = document.getElementById('searchBar');

const sortRarityBtn = document.getElementById('sortRarity');
const sortPriceAscBtn = document.getElementById('sortPriceAsc');
const sortPriceDescBtn = document.getElementById('sortPriceDesc');
const container = document.querySelector('.images-container');

let cards = Array.from(document.querySelectorAll('.image-card'));
const rarityOrder = ["Commun", "UnCommun", "Rare", "Legendaire", "Mythique", "Secret"];

// --- Fonctions utilitaires ---
function openPopup(card) {
  popup.classList.add('visible');
  popupImage.src = card.dataset.img;
  popupTitle.textContent = card.dataset.title;
  popupRarity.textContent = `Rareté : ${card.dataset.rarity}`;
  popupBonus.textContent = `Bonus : ${card.dataset.bonus}`;
  priceText.textContent = `Prix : ${card.dataset.price} 💰`;
}

function closePopup() {
  popup.classList.remove('visible');
}

function sortCards(compareFn) {
  cards.sort(compareFn).forEach(card => container.appendChild(card));
}

// --- Événements ---
// Délégation de clic sur les cartes
container.addEventListener('click', e => {
  const card = e.target.closest('.image-card');
  if (card) openPopup(card);
});

// Fermer popup
popupClose.addEventListener('click', closePopup);
window.addEventListener('click', e => {
  if (e.target === popup) closePopup();
});

// Recherche dynamique
searchBar.addEventListener('input', () => {
  const filter = searchBar.value.toLowerCase();
  cards.forEach(card => {
    card.classList.toggle('hidden', !card.dataset.title.toLowerCase().includes(filter));
  });
});

// Tri
sortRarityBtn.addEventListener('click', () =>
  sortCards((a, b) => rarityOrder.indexOf(a.dataset.rarity) - rarityOrder.indexOf(b.dataset.rarity))
);
sortPriceAscBtn.addEventListener('click', () =>
  sortCards((a, b) => Number(a.dataset.price) - Number(b.dataset.price))
);
sortPriceDescBtn.addEventListener('click', () =>
  sortCards((a, b) => Number(b.dataset.price) - Number(a.dataset.price))
);
