// script.js

const images = document.querySelectorAll('.image-card');
const popup = document.getElementById('popup');
const popupClose = document.getElementById('popupClose');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const popupRarity = document.getElementById('popupRarity');
const priceText = document.getElementById('priceText');
const popupBonus = document.getElementById('popupBonus');

images.forEach(card => {
  card.addEventListener('click', () => {
    // On récupère les infos de la carte
    const imgSrc = card.getAttribute('data-img'); // image principale
    const title = card.getAttribute('data-title');
    const rarity = card.getAttribute('data-rarity');
    const price = card.getAttribute('data-price');
    const bonus = card.getAttribute('data-bonus');

    // On met à jour le popup
    popupImage.src = imgSrc; // <--- image affichée en haut
    popupTitle.textContent = title;
    popupRarity.textContent = `Rareté : ${rarity}`;
    priceText.innerHTML = `Prix: <span style="color: green;">$${price}</span>`;
    popupBonus.innerHTML = `Bonus: <span style="color: yellow;">${bonus}</span>`;

    // On affiche le popup
    popup.style.display = 'flex';
  });
});

// Fermer le popup
popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
});
