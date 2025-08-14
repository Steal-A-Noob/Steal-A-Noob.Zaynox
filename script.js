// --- Popup ---
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const popupRarity = document.getElementById('popupRarity');
const priceText = document.getElementById('priceText');
const popupBonus = document.getElementById('popupBonus');
const popupClose = document.getElementById('popupClose');

const cards = document.querySelectorAll('.image-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    popup.style.display = 'block';
    popupImage.src = card.dataset.img;
    popupTitle.textContent = card.dataset.title;
    popupRarity.textContent = `Rareté : ${card.dataset.rarity}`;
    priceText.textContent = `Prix : $${card.dataset.price}`;
    popupBonus.textContent = `Bonus : ${card.dataset.bonus}`;
  });
});

popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === popup) popup.style.display = 'none';
});

// --- Tri ---
const sortRarityBtn = document.getElementById('sortRarity');
const sortPriceAscBtn = document.getElementById('sortPriceAsc');
const sortPriceDescBtn = document.getElementById('sortPriceDesc');
const container = document.querySelector('.images-container');

const rarityOrder = {
  'Commun': 1,
  'UnCommun': 2,
  'Rare': 3,
  'Légendaire': 4,
  'Mythique': 5
};

function sortCards(compareFn) {
  const cardsArray = Array.from(cards);
  cardsArray.sort(compareFn);
  cardsArray.forEach(card => container.appendChild(card));
}

sortRarityBtn.addEventListener('click', () => {
  sortCards((a, b) => rarityOrder[b.dataset.rarity] - rarityOrder[a.dataset.rarity]);
});

sortPriceAscBtn.addEventListener('click', () => {
  sortCards((a, b) => parseInt(a.dataset.price.replace(/ /g,'')) - parseInt(b.dataset.price.replace(/ /g,'')));
});

sortPriceDescBtn.addEventListener('click', () => {
  sortCards((a, b) => parseInt(b.dataset.price.replace(/ /g,'')) - parseInt(a.dataset.price.replace(/ /g,'')));
});

// --- Recherche ---
const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('input', () => {
  const query = searchBar.value.toLowerCase();
  cards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    card.style.display = title.includes(query) ? 'block' : 'none';
  });
});
