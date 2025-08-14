// Particles.js
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles loaded!');
});

// Variables
const cards = document.querySelectorAll('.image-card');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const popupRarity = document.getElementById('popupRarity');
const popupBonus = document.getElementById('popupBonus');
const popupClose = document.getElementById('popupClose');
const searchBar = document.getElementById('searchBar');

// Afficher popup
cards.forEach(card => {
  card.addEventListener('click', () => {
    popupImage.src = card.querySelector('img').src;
    popupTitle.textContent = card.dataset.title;
    popupRarity.textContent = `Rareté: ${card.dataset.rarity}`;
    popupBonus.textContent = `Bonus: ${card.dataset.bonus}`;
    popup.classList.add('show');
  });
});

// Fermer popup
popupClose.addEventListener('click', () => {
  popup.classList.remove('show');
});

// Filtre recherche
searchBar.addEventListener('input', () => {
  const term = searchBar.value.toLowerCase();
  cards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    card.style.display = title.includes(term) ? 'block' : 'none';
  });
});

// Tri boutons
document.getElementById('sortRarity').addEventListener('click', () => {
  const container = document.querySelector('.images-container');
  const sorted = [...cards].sort((a,b) => a.dataset.rarity.localeCompare(b.dataset.rarity));
  sorted.forEach(c => container.appendChild(c));
});

document.getElementById('sortPriceAsc').addEventListener('click', () => {
  const container = document.querySelector('.images-container');
  const sorted = [...cards].sort((a,b) => parseInt(a.dataset.price) - parseInt(b.dataset.price));
  sorted.forEach(c => container.appendChild(c));
});

document.getElementById('sortPriceDesc').addEventListener('click', () => {
  const container = document.querySelector('.images-container');
  const sorted = [...cards].sort((a,b) => parseInt(b.dataset.price) - parseInt(a.dataset.price));
  sorted.forEach(c => container.appendChild(c));
});
