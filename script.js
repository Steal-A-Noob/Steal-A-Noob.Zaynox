const imageCards = document.querySelectorAll('.image-card');
const popup = document.getElementById('popup');
const popupClose = document.getElementById('popupClose');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const popupRarity = document.getElementById('popupRarity');
const priceText = document.getElementById('priceText');
const popupBonus = document.getElementById('popupBonus');
const searchBar = document.getElementById('searchBar');
const imagesContainer = document.querySelector('.images-container');

function showPopup(card) {
  const title = card.dataset.title;
  const rarity = card.dataset.rarity;
  const price = card.dataset.price;
  const bonus = card.dataset.bonus;
  const img = card.dataset.img;

  popupImage.src = img;
  popupTitle.textContent = title;

  let rarityColor;
  switch(rarity) {
    case 'Commun': rarityColor = 'gray'; break;
    case 'UnCommun': rarityColor = '#00BFFF'; break;
    case 'Rare': rarityColor = '#1E90FF'; break;
    case 'Légendaire': rarityColor = 'orange'; break;
    case 'Mythique': rarityColor = 'purple'; break;
    default: rarityColor = 'white';
  }

  popupRarity.innerHTML = `Rareté: <span style="color:${rarityColor}">${rarity}</span>`;
  priceText.innerHTML = `Prix: <span style="color:green;">${price} $</span>`;
  popupBonus.textContent = `Bonus: ${bonus}`;

  popup.style.display = 'flex';
}

imageCards.forEach(card => {
  card.addEventListener('click', () => showPopup(card));
});

popupClose.addEventListener('click', () => popup.style.display = 'none');
window.addEventListener('click', e => { if (e.target === popup) popup.style.display = 'none'; });

// Recherche
searchBar.addEventListener('input', () => {
  const term = searchBar.value.toLowerCase();
  imageCards.forEach(card => {
    card.style.display = card.dataset.title.toLowerCase().includes(term) ? 'block' : 'none';
  });
});

// Tri par rareté
document.getElementById('sortRarity').addEventListener('click', () => {
  const rarityOrder = ['Commun','UnCommun','Rare','Légendaire','Mythique'];
  const cards = Array.from(imageCards);
  cards.sort((a,b) => rarityOrder.indexOf(a.dataset.rarity) - rarityOrder.indexOf(b.dataset.rarity));
  cards.forEach(c => imagesContainer.appendChild(c));
});

// Tri par prix
document.getElementById('sortPriceAsc').addEventListener('click', () => {
  const cards = Array.from(imageCards);
  cards.sort((a,b) => Number(a.dataset.price.replace(/\s/g,'')) - Number(b.dataset.price.replace(/\s/g,'')));
  cards.forEach(c => imagesContainer.appendChild(c));
});

document.getElementById('sortPriceDesc').addEventListener('click', () => {
  const cards = Array.from(imageCards);
  cards.sort((a,b) => Number(b.dataset.price.replace(/\s/g,'')) - Number(a.dataset.price.replace(/\s/g,'')));
  cards.forEach(c => imagesContainer.appendChild(c));
});
