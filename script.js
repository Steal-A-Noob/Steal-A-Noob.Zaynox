 // Particles.js
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

// --- Recherche ---
searchBar.addEventListener('input', () => {
  const filter = searchBar.value.toLowerCase();
  imageCards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    if(title.includes(filter)){
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
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
    popupRarity.textContent = 'Rareté: ' + card.dataset.rarity;
    priceText.textContent = 'Prix: ' + card.dataset.price + ' 💰';
    priceText.style.color = '#7CFC00'; // <-- vert clair
    popupBonus.textContent = 'Bonus: ' + card.dataset.bonus;
  });
});

popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Fermer popup en cliquant en dehors
window.addEventListener('click', e => {
  if(e.target === popup) popup.style.display = 'none';
});
