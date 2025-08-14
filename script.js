const images = document.querySelectorAll('.image-card');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const popupRarity = document.getElementById('popupRarity');
const priceText = document.getElementById('priceText');
const popupBonus = document.getElementById('popupBonus');
const popupClose = document.getElementById('popupClose');
const searchBar = document.getElementById('searchBar');

images.forEach(card => {
  card.addEventListener('click', () => {
    popup.style.display = 'block';
    popupImage.src = card.dataset.img;
    popupTitle.textContent = card.dataset.title;
    popupRarity.innerHTML = `Rareté: <span style="color:${getRarityColor(card.dataset.rarity)}">${card.dataset.rarity}</span>`;
    priceText.textContent = `$${card.dataset.price}`;
    popupBonus.textContent = `+${card.dataset.bonus}`;
  });
});

popupClose.addEventListener('click', () => popup.style.display = 'none');
window.addEventListener('click', e => { if (e.target === popup) popup.style.display = 'none'; });

// Tris
document.getElementById('sortRarity').addEventListener('click', () => sortCards('rarity'));
document.getElementById('sortPriceAsc').addEventListener('click', () => sortCards('priceAsc'));
document.getElementById('sortPriceDesc').addEventListener('click', () => sortCards('priceDesc'));

// Recherche
searchBar.addEventListener('input', () => {
  const term = searchBar.value.toLowerCase();
  images.forEach(card => {
    card.style.display = card.dataset.title.toLowerCase().includes(term) ? '' : 'none';
  });
});

function sortCards(type) {
  const container = document.querySelector('.images-container');
  const cards = Array.from(container.children);
  let sorted;
  if(type === 'rarity') {
    const order = ['Commun','UnCommun','Rare','Légendaire','Mythique'];
    sorted = cards.sort((a,b) => order.indexOf(a.dataset.rarity) - order.indexOf(b.dataset.rarity));
  } else if(type === 'priceAsc') {
    sorted = cards.sort((a,b) => a.dataset.price - b.dataset.price);
  } else if(type === 'priceDesc') {
    sorted = cards.sort((a,b) => b.dataset.price - a.dataset.price);
  }
  sorted.forEach(card => container.appendChild(card));
}

function getRarityColor(rarity) {
  switch(rarity) {
    case 'Commun': return 'white';
    case 'UnCommun': return '#8A2BE2';
    case 'Rare': return '#00FFFF';
    case 'Légendaire': return '#FFD700';
    case 'Mythique': return '#FF69B4';
    default: return 'white';
  }
}
