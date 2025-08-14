const cards = document.querySelectorAll('.image-card');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const popupRarity = document.getElementById('popupRarity');
const popupPrice = document.getElementById('popupPrice');
const popupBonus = document.getElementById('popupBonus');
const popupClose = document.getElementById('popupClose');

cards.forEach(card => {
  card.addEventListener('click', () => {
    popup.style.display = 'block';
    popupImage.src = card.dataset.img;
    popupTitle.textContent = card.dataset.title;
    popupRarity.textContent = `Rareté: ${card.dataset.rarity}`;
    popupPrice.textContent = `$${card.dataset.price}`;
    popupBonus.textContent = `+${card.dataset.bonus}`;
  });
});

popupClose.addEventListener('click', () => popup.style.display = 'none');
window.addEventListener('click', e => { if(e.target === popup) popup.style.display = 'none'; });

// Recherche
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', () => {
  const search = searchBar.value.toLowerCase();
  cards.forEach(card => {
    card.style.display = card.dataset.title.toLowerCase().includes(search) ? 'block' : 'none';
  });
});

// Tri
const rarityOrder = ['Commun', 'UnCommun', 'Rare', 'Légendaire', 'Mythique'];

document.getElementById('sortRarity').addEventListener('click', () => {
  const container = document.querySelector('.images-container');
  [...cards].sort((a,b) => rarityOrder.indexOf(a.dataset.rarity) - rarityOrder.indexOf(b.dataset.rarity))
           .forEach(card => container.appendChild(card));
});

document.getElementById('sortPriceAsc').addEventListener('click', () => {
  const container = document.querySelector('.images-container');
  [...cards].sort((a,b) => parseInt(a.dataset.price) - parseInt(b.dataset.price))
           .forEach(card => container.appendChild(card));
});

document.getElementById('sortPriceDesc').addEventListener('click', () => {
  const container = document.querySelector('.images-container');
  [...cards].sort((a,b) => parseInt(b.dataset.price) - parseInt(a.dataset.price))
           .forEach(card => container.appendChild(card));
});
