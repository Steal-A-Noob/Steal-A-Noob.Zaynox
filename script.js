// Récupération des éléments
const cards = document.querySelectorAll('.image-card');
const popup = document.getElementById('popup');
const popupClose = document.getElementById('popupClose');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const popupRarity = document.getElementById('popupRarity');
const priceText = document.getElementById('priceText');
const popupBonus = document.getElementById('popupBonus');
const popupUpgrades = document.getElementById('popupUpgrades');
const searchBar = document.getElementById('searchBar');

// Fonction pour ouvrir le popup
cards.forEach(card => {
  card.addEventListener('click', () => {
    const imgSrc = card.dataset.img;
    const title = card.dataset.title;
    const rarity = card.dataset.rarity;
    const price = card.dataset.price;
    const bonus = card.dataset.bonus;
    const upgrades = card.dataset.upgrades;

    popupImage.src = imgSrc;
    popupTitle.textContent = title;
    popupRarity.textContent = `Rareté: ${rarity}`;
    priceText.textContent = `Prix: ${price}`;
    popupBonus.textContent = `Bonus: ${bonus}`;
    popupUpgrades.textContent = upgrades;

    popup.style.display = 'block';
  });
});

// Fermeture du popup
popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Fermeture si clic en dehors
window.addEventListener('click', e => {
  if(e.target === popup) popup.style.display = 'none';
});

// Filtrage par recherche
searchBar.addEventListener('input', e => {
  const searchTerm = e.target.value.toLowerCase();
  cards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    if(title.includes(searchTerm)) {
      card.style.display = 'inline-block';
    } else {
      card.style.display = 'none';
    }
  });
});

// Glow et couleur rareté dynamique
cards.forEach(card => {
  switch(card.dataset.rarity) {
    case 'Commun':
      card.style.boxShadow = '0 0 15px #ccc, 0 0 25px #eee';
      break;
    case 'Rare':
      card.style.boxShadow = '0 0 15px #00f, 0 0 25px #0ff';
      break;
    case 'UnCommun':
      card.style.boxShadow = '0 0 15px #0ff, 0 0 25px #0ff';
      break;
    case 'Légendaire':
      card.style.boxShadow = '0 0 15px gold, 0 0 25px yellow';
      break;
    case 'Mythique':
      card.style.boxShadow = '0 0 15px #ff00ff, 0 0 25px #ff69b4';
      break;
  }
});
