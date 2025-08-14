const searchBar = document.getElementById('searchBar');
const imagesContainer = document.querySelector('.images-container');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const popupRarity = document.getElementById('popupRarity');
const priceText = document.getElementById('priceText');
const popupBonus = document.getElementById('popupBonus');
const popupClose = document.getElementById('popupClose');

const imageCards = Array.from(document.querySelectorAll('.image-card'));

// Affichage du popup
imageCards.forEach(card => {
  card.addEventListener('click', () => {
    popupImage.src = card.dataset.img;
    popupTitle.textContent = card.dataset.title;
    popupRarity.innerHTML = `Rareté: <span style="color:${getRarityColor(card.dataset.rarity)}">${card.dataset.rarity}</span>`;
    priceText.innerHTML = `Prix: <span class="priceValue">$${card.dataset.price}</span>`;
    popupBonus.textContent = `+${card.dataset.bonus}`;
    popup.style.display = 'flex';
  });
});

popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Fermeture popup si clic en dehors
popup.addEventListener('click', e => {
  if(e.target === popup) popup.style.display = 'none';
});

// Recherche
searchBar.addEventListener('input', () => {
  const value = searchBar.value.toLowerCase();
  imageCards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    card.style.display = title.includes(value) ? 'block' : 'none';
  });
});

// Tri par rareté
document.getElementById('sortRarity').addEventListener('click', () => {
  const order = ['Commun', 'UnCommun', 'Rare', 'Légendaire', 'Mythique'];
  const sorted = imageCards.sort((a,b) => order.indexOf(a.dataset.rarity) - order.indexOf(b.dataset.rarity));
  sorted.forEach(card => imagesContainer.appendChild(card));
});

// Tri prix asc
document.getElementById('sortPriceAsc').addEventListener('click', () => {
  const sorted = imageCards.sort((a,b) => Number(a.dataset.price) - Number(b.dataset.price));
  sorted.forEach(card => imagesContainer.appendChild(card));
});

// Tri prix desc
document.getElementById('sortPriceDesc').addEventListener('click', () => {
  const sorted = imageCards.sort((a,b) => Number(b.dataset.price) - Number(a.dataset.price));
  sorted.forEach(card => imagesContainer.appendChild(card));
});

// Couleur rareté
function getRarityColor(rarity) {
  switch(rarity){
    case 'Commun': return '#00ffff';
    case 'UnCommun': return '#8a2be2';
    case 'Rare': return '#00ffff';
    case 'Légendaire': return '#ffd700';
    case 'Mythique': return '#ff1493';
    default: return 'white';
  }
}
