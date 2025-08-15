// --- Particles.js ---
particlesJS("particles-js", {
  "particles": { 
    "number": { "value": 100 }, 
    "color": { "value": "#ffffff" }, 
    "shape": { "type": "circle" }, 
    "opacity": { "value": 0.5 }, 
    "size": { "value": 3 }, 
    "move": { "enable": true, "speed": 2 } 
  }
});

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
const popupNext = document.getElementById('popupNext');
const popupPrev = document.getElementById('popupPrev');

// Couleurs selon rareté
const rarityColors = { 'Commun': 'grey', 'UnCommun': 'darkgreen', 'Rare': 'blue', 'Legendaire': 'red', 'Mythique': 'purple', 'Secret': 'gold' };

// --- Glow pulsant et hover ---
imageCards.forEach(card => {
  const rarity = card.dataset.rarity;
  const color = rarityColors[rarity] || 'white';
  card.style.color = color; // pour pulseGlow currentColor
  card.style.boxShadow = `0 0 20px 5px ${color}`;
  card.style.transition = 'transform 0.3s, box-shadow 0.5s';
  card.style.animation = `pulseGlow 2s infinite alternate`;

  card.addEventListener('mouseover', () => { card.style.transform = 'scale(1.05)'; });
  card.addEventListener('mouseout', () => { card.style.transform = 'scale(1)'; });

  card.addEventListener('click', () => showPopup(card));
});

// --- Popup ---
let currentIndex = 0;
let glowInterval = null;

function showPopup(card) {
  clearInterval(glowInterval); // stop glow précédent

  currentIndex = imageCards.indexOf(card);
  popup.style.display = 'flex';
  popup.style.animation = 'popupZoom 0.3s';
  popupImage.src = card.dataset.img;
  popupTitle.textContent = card.dataset.title;

  const rarity = card.dataset.rarity;
  popupRarity.textContent = 'Rareté: ' + rarity;
  popupRarity.style.color = rarityColors[rarity] || 'black';

  priceText.textContent = 'Prix: ' + parseInt(card.dataset.price).toLocaleString() + ' 💰';
  priceText.style.color = '#00FF7F';

  popupBonus.textContent = 'Bonus: ' + card.dataset.bonus;
  popupBonus.style.color = '#FFFF00';

  // Glow dynamique pour Mythique/Secret
  if(['Mythique','Secret'].includes(rarity)) {
    let toggle = false;
    glowInterval = setInterval(() => {
      popupImage.style.boxShadow = toggle ? 
        `0 0 25px 10px ${rarityColors[rarity]}` : 
        `0 0 15px 5px ${rarityColors[rarity]}`;
      toggle = !toggle;
    }, 500);
  } else {
    popupImage.style.boxShadow = `0 0 20px 5px ${rarityColors[rarity] || 'white'}`;
  }
}

// --- Navigation popup ---
popupNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imageCards.length;
  showPopup(imageCards[currentIndex]);
});
popupPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imageCards.length) % imageCards.length;
  showPopup(imageCards[currentIndex]);
});

// --- Fermer popup ---
popupClose.addEventListener('click', () => { popup.style.display = 'none'; clearInterval(glowInterval); });
window.addEventListener('click', e => { if(e.target === popup) { popup.style.display = 'none'; clearInterval(glowInterval); } });
window.addEventListener('keydown', e => { if(e.key === 'Escape') { popup.style.display = 'none'; clearInterval(glowInterval); } });

// --- Recherche ---
searchBar.addEventListener('input', () => {
  const filter = searchBar.value.toLowerCase();
  imageCards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    card.style.display = title.includes(filter) ? 'inline-block' : 'none';
  });
  // Mise à jour imageCards après filtrage
  imageCards = Array.from(document.querySelectorAll('.image-card')).filter(c => c.style.display !== 'none');
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
  sortCards((a, b) => parseInt(a.dataset.price) - parseInt(b.dataset.price));
});

// Trier par prix décroissant
sortPriceDesc.addEventListener('click', () => {
  sortCards((a, b) => parseInt(b.dataset.price) - parseInt(a.dataset.price));
});

/* --- CSS Animations (à mettre dans <style>) ---
@keyframes pulseGlow {
  0% { box-shadow: 0 0 15px 3px currentColor; }
  100% { box-shadow: 0 0 30px 10px currentColor; }
}

@keyframes popupZoom {
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
*/
