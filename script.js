// --- Particles.js ---
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles loaded!');
});

// --- Variables ---
const searchBar = document.getElementById('searchBar');
const imageCards = document.querySelectorAll('.image-card');
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

// Couleurs des raretés
const rarityColors = {
  Commun: 'grey',
  UnCommun: 'darkgreen',
  Rare: 'blue',
  Legendaire: 'red',
  Mythique: 'purple',
  Secret: 'orange'
};

// --- Glow dynamique ---
imageCards.forEach(card => {
  const rarity = card.dataset.rarity;
  const color = rarityColors[rarity] || 'white';
  card.style.boxShadow = `0 0 15px ${color}`;
  card.style.animation = `pulseGlow 2s infinite alternate`;
  card.addEventListener('mouseover', () => {
    card.style.animation = 'none';
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = `0 0 30px ${color}, 0 0 60px ${color}`;
  });
  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
    card.style.animation = 'pulseGlow 2s infinite alternate';
  });
});

// --- Recherche ---
searchBar.addEventListener('input', () => {
  const filter = searchBar.value.toLowerCase();
  imageCards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    card.style.display = title.includes(filter) ? 'block' : 'none';
  });
});

// --- Tri ---
function sortCards(compareFn) {
  const container = document.querySelector('.images-container');
  Array.from(imageCards)
       .sort(compareFn)
       .forEach(card => container.appendChild(card));
}

// Trier par rareté
sortRarity.addEventListener('click', () => {
  const rarityOrder = ['Commun', 'UnCommun', 'Rare', 'Legendaire', 'Mythique', 'Secret'];
  sortCards((a, b) => rarityOrder.indexOf(a.dataset.rarity) - rarityOrder.indexOf(b.dataset.rarity));
});

// Trier par prix croissant
sortPriceAsc.addEventListener('click', () => {
  sortCards((a, b) => parseInt(a.dataset.price) - parseInt(b.dataset.price));
});

// Trier par prix décroissant
sortPriceDesc.addEventListener('click', () => {
  sortCards((a, b) => parseInt(b.dataset.price) - parseInt(a.dataset.price));
});

// --- Popup ---
imageCards.forEach(card => {
  card.addEventListener('click', () => {
    popup.style.display = 'block';
    popupImage.src = card.dataset.img;
    popupTitle.textContent = card.dataset.title;

    // Rareté avec couleur
    const rarity = card.dataset.rarity;
    popupRarity.textContent = 'Rareté: ' + rarity;
    popupRarity.style.color = rarityColors[rarity] || 'black';

    // Prix en vert clair
    priceText.textContent = 'Prix: ' + card.dataset.price + ' 💰';
    priceText.style.color = '#00FF7F';

    // Bonus en jaune
    popupBonus.textContent = 'Bonus: ' + card.dataset.bonus;
    popupBonus.style.color = '#FFFF00';
  });
});

// Fermer popup
popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Fermer popup en cliquant en dehors
window.addEventListener('click', e => {
  if(e.target === popup) popup.style.display = 'none';
});

// --- Animation keyframes pour le glow pulsant ---
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes pulseGlow {
  0% { box-shadow: 0 0 10px rgba(255,255,255,0.3); }
  50% { box-shadow: 0 0 20px rgba(255,255,255,0.7); }
  100% { box-shadow: 0 0 10px rgba(255,255,255,0.3); }
}`;
document.head.appendChild(styleSheet);
