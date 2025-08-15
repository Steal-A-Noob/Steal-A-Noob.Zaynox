// --- Particles.js ---
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles loaded ✅');
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

// --- Glow dynamique & Hover ---
function getGlow(rarity, hover=false) {
  const glows = {
    Commun: hover ? '0 0 15px #95a5a6, 0 0 30px #95a5a6' : '0 0 10px #95a5a6',
    UnCommun: hover ? '0 0 20px #27ae60, 0 0 40px #27ae60' : '0 0 15px #27ae60',
    Rare: hover ? '0 0 20px #3498db, 0 0 40px #3498db' : '0 0 15px #3498db',
    Legendaire: hover ? '0 0 25px #e74c3c, 0 0 50px #e74c3c' : '0 0 20px #e74c3c',
    Mythique: hover ? '0 0 30px #8e44ad, 0 0 60px #8e44ad' : '0 0 25px #8e44ad',
    Secret: hover ? '0 0 35px #f1c40f, 0 0 70px #f1c40f' : '0 0 30px #f1c40f'
  };
  return glows[rarity] || '';
}

imageCards.forEach(card => {
  const rarity = card.dataset.rarity;

  // Glow par défaut
  card.style.boxShadow = getGlow(rarity);

  // Hover
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = getGlow(rarity, true);
    card.style.transform = 'scale(1.05)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = getGlow(rarity, false);
    card.style.transform = 'scale(1)';
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

sortRarity.addEventListener('click', () => {
  const rarityOrder = ['Commun','UnCommun','Rare','Legendaire','Mythique','Secret'];
  sortCards((a, b) => rarityOrder.indexOf(a.dataset.rarity) - rarityOrder.indexOf(b.dataset.rarity));
});

sortPriceAsc.addEventListener('click', () => {
  sortCards((a, b) => parseInt(a.dataset.price) - parseInt(b.dataset.price));
});

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
    switch(rarity) {
      case 'Commun': popupRarity.style.color = 'grey'; break;
      case 'UnCommun': popupRarity.style.color = 'darkgreen'; break;
      case 'Rare': popupRarity.style.color = 'blue'; break;
      case 'Legendaire': popupRarity.style.color = 'red'; break;
      case 'Mythique': popupRarity.style.color = 'purple'; break;
      case 'Secret': popupRarity.style.color = 'gold'; break;
      default: popupRarity.style.color = 'black';
    }

    // Prix et bonus
    priceText.textContent = 'Prix: ' + card.dataset.price + ' 💰';
    priceText.style.color = '#00FF7F';
    popupBonus.textContent = 'Bonus: ' + card.dataset.bonus;
    popupBonus.style.color = '#FFFF00';
  });
});

// Fermer popup
popupClose.addEventListener('click', () => popup.style.display = 'none');
window.addEventListener('click', e => { if(e.target === popup) popup.style.display = 'none'; });
