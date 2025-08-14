// Variables
const cards = document.querySelectorAll('.image-card');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const popupRarity = document.getElementById('popupRarity');
const popupBonus = document.getElementById('popupBonus');
const popupClose = document.getElementById('popupClose');
const searchBar = document.getElementById('searchBar');

// Dictionnaire couleurs rareté
const rarityColors = {
  'Commun': '#00ff00',
  'Rare': '#1e90ff',
  'UnCommun': '#ff1493',
  'Legendaire': '#ffa500',
  'Mythique': '#ff0000',
  'Secret': '#9400d3'
};

// Appliquer couleur glow selon rareté
cards.forEach(card => {
  const rarity = card.dataset.rarity;
  if(rarityColors[rarity]){
    card.style.boxShadow = `0 0 15px ${rarityColors[rarity]}`;
  }
});

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
  const sorted = [...cards].sort((a,b) => {
    const rarities = ['Commun','UnCommun','Rare','Legendaire','Mythique','Secret'];
    return rarities.indexOf(a.dataset.rarity) - rarities.indexOf(b.dataset.rarity);
  });
  sorted.forEach(c => container.appendChild(c));
});

document.getElementById('sortPriceAsc').addEventListener('click', () => {
  const container = document.querySelector('.images-container');
  const sorted = [...cards].sort((a,b) => parseInt(a.dataset.price.replace(/\s/g,'')) - parseInt(b.dataset.price.replace(/\s/g,'')));
  sorted.forEach(c => container.appendChild(c));
});

document.getElementById('sortPriceDesc').addEventListener('click', () => {
  const container = document.querySelector('.images-container');
  const sorted = [...cards].sort((a,b) => parseInt(b.dataset.price.replace(/\s/g,'')) - parseInt(a.dataset.price.replace(/\s/g,'')));
  sorted.forEach(c => container.appendChild(c));
});
