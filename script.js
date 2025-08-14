const images = document.querySelectorAll('.image-card');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const popupRarity = document.getElementById('popupRarity');
const priceText = document.getElementById('priceText');
const popupBonus = document.getElementById('popupBonus');
const popupClose = document.getElementById('popupClose');

// Clique sur une image
images.forEach(imgCard => {
  imgCard.addEventListener('click', () => {
    const title = imgCard.getAttribute('data-title');
    const rarity = imgCard.getAttribute('data-rarity');
    const price = imgCard.getAttribute('data-price');
    const bonus = imgCard.getAttribute('data-bonus');
    const imgSrc = imgCard.getAttribute('data-img');

    popupImage.src = imgSrc;  // Image du noob en haut
    popupTitle.textContent = title;
    popupRarity.textContent = `Rareté: ${rarity}`;
    priceText.textContent = `Prix: ${price}`;
    popupBonus.textContent = `Bonus: ${bonus}`;

    // Supprimer toutes les classes glow popup
    popup.classList.remove(
      'popup-glow-Commun',
      'popup-glow-Rare',
      'popup-glow-UnCommun',
      'popup-glow-Légendaire',
      'popup-glow-Mythique'
    );

    // Ajouter glow selon rareté
    popup.classList.add(`popup-glow-${rarity}`);

    popup.style.display = 'flex';
  });
});

// Fermer le popup
popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
});
