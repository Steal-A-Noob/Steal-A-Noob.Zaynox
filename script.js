// --- Variables ---
const searchBar = document.getElementById('searchBar');
const container = document.querySelector('.images-container');
let imageCards = Array.from(document.querySelectorAll('.image-card'));
const sortRarity = document.getElementById('sortRarity');
const sortPriceAsc = document.getElementById('sortPriceAsc');
const sortPriceDesc = document.getElementById('sortPriceDesc');

// Popup
const popup = document.getElementById('popup');
const popupClose = document.getElementById('popupClose');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const popupRarity = document.getElementById('popupRarity');
const priceText = document.getElementById('priceText');
const popupBonus = document.getElementById('popupBonus');

let currentIndex = 0;

// Couleurs selon rareté
const rarityColors = { 
  'Commun': 'grey', 
  'UnCommun': 'darkgreen', 
  'Rare': 'blue', 
  'Legendaire': 'red', 
  'Mythique': 'purple', 
  'Secret': 'gold' 
};

// --- Glow pulsant et hover ---
imageCards.forEach((card, index) => {
  const rarity = card.dataset.rarity;
  const color = rarityColors[rarity] || 'white';
  card.style.boxShadow = `0 0 20px 5px ${color}`;
  card.style.transition = 'transform 0.3s, box-shadow 0.5s';
  card.style.animation = `pulseGlow 2s infinite alternate`;

  card.addEventListener('mouseover', () => { card.style.transform = 'scale(1.05)'; });
  card.addEventListener('mouseout', () => { card.style.transform = 'scale(1)'; });

  card.addEventListener('click', () => { 
    currentIndex = index;
    showPopup(card);
  });
});

// --- Popup ---
function showPopup(card) {
  popup.style.display = 'flex';
  popup.style.animation = 'popupZoom 0.3s';
  popupImage.src = card.dataset.img;
  popupTitle.textContent = card.dataset.title;

  const rarity = card.dataset.rarity;
  popupRarity.textContent = 'Rareté: ' + rarity;
  popupRarity.style.color = rarityColors[rarity] || 'black';

  priceText.textContent = 'Prix: ' + parseInt(card.dataset.price.replace(/\s/g, '')).toLocaleString() + ' 💰';
  priceText.style.color = '#00FF7F';

  popupBonus.textContent = 'Bonus: ' + card.dataset.bonus;
  popupBonus.style.color = '#FFFF00';
}

// Fermer popup
popupClose.addEventListener('click', () => { popup.style.display = 'none'; });
window.addEventListener('click', e => { if(e.target === popup) popup.style.display = 'none'; });
window.addEventListener('keydown', e => { 
  if(e.key === 'Escape') popup.style.display = 'none'; 
  if(e.key === 'ArrowRight') navigatePopup(1);
  if(e.key === 'ArrowLeft') navigatePopup(-1);
});

// --- Navigation Next/Prev ---
function navigatePopup(step) {
  currentIndex += step;
  if(currentIndex < 0) currentIndex = imageCards.length - 1;
  if(currentIndex >= imageCards.length) currentIndex = 0;
  showPopup(imageCards[currentIndex]);
}

// --- Recherche ---
searchBar.addEventListener('input', () => {
  const filter = searchBar.value.toLowerCase();
  imageCards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    card.style.display = title.includes(filter) ? 'inline-block' : 'none';
  });
});

// --- Tri animé ---
function sortCards(compareFn) {
  imageCards.sort(compareFn);
  imageCards.forEach((card) => container.appendChild(card));
}

// Trier par rareté
sortRarity.addEventListener('click', () => {
  const rarityOrder = ['Commun','UnCommun','Rare','Legendaire','Mythique','Secret'];
  sortCards((a, b) => rarityOrder.indexOf(a.dataset.rarity) - rarityOrder.indexOf(b.dataset.rarity));
});

// Trier par prix croissant
sortPriceAsc.addEventListener('click', () => {
  sortCards((a, b) => parseInt(a.dataset.price.replace(/\s/g, '')) - parseInt(b.dataset.price.replace(/\s/g, '')));
});

// Trier par prix décroissant
sortPriceDesc.addEventListener('click', () => {
  sortCards((a, b) => parseInt(b.dataset.price.replace(/\s/g, '')) - parseInt(a.dataset.price.replace(/\s/g, '')));
});
