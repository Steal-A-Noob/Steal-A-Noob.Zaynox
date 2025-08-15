// ==========================
// POPUP
// ==========================
const cards = document.querySelectorAll('.image-card');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const popupRarity = document.getElementById('popupRarity');
const priceText = document.getElementById('priceText');
const popupBonus = document.getElementById('popupBonus');
const popupClose = document.getElementById('popupClose');

cards.forEach(card => {
  card.addEventListener('click', () => {
    popupImage.src = card.dataset.img;
    popupTitle.textContent = card.dataset.title;
    popupRarity.textContent = `Rareté : ${card.dataset.rarity}`;
    priceText.textContent = `Prix : ${card.dataset.price} 💰`;
    popupBonus.textContent = `Bonus : ${card.dataset.bonus}`;
    popup.style.display = 'block';
  });
});

popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === popup) popup.style.display = 'none';
});

// ==========================
// TRI ET RECHERCHE
// ==========================
const container = document.querySelector('.images-container');
const searchBar = document.getElementById('searchBar');
const cardsList = document.querySelectorAll('.image-card');

document.getElementById('sortPriceAsc').addEventListener('click', () => {
  [...container.children]
    .sort((a, b) => a.dataset.price - b.dataset.price)
    .forEach(card => container.appendChild(card));
});

document.getElementById('sortPriceDesc').addEventListener('click', () => {
  [...container.children]
    .sort((a, b) => b.dataset.price - a.dataset.price)
    .forEach(card => container.appendChild(card));
});

const rarityOrder = ["Commun","UnCommun","Rare","Legendaire","Mythique","Secret"];
document.getElementById('sortRarity').addEventListener('click', () => {
  [...container.children]
    .sort((a,b) => rarityOrder.indexOf(a.dataset.rarity) - rarityOrder.indexOf(b.dataset.rarity))
    .forEach(card => container.appendChild(card));
});

searchBar.addEventListener('input', () => {
  const query = searchBar.value.toLowerCase();
  cardsList.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    card.style.display = title.includes(query) ? 'block' : 'none';
  });
});

// ==========================
// PARTICLES.JS
// ==========================
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#00ff99" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5, "random": false },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": true, "distance": 150, "color": "#00ff99", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 4, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
    "modes": { "repulse": { "distance": 100 }, "push": { "particles_nb": 4 } }
  },
  "retina_detect": true
});
