const images = document.querySelectorAll('.image-card');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const popupRarity = document.getElementById('popupRarity');
const priceText = document.getElementById('priceText');
const popupBonus = document.getElementById('popupBonus');
const popupClose = document.getElementById('popupClose');

images.forEach(imgCard => {
  imgCard.addEventListener('click', () => {
    const title = imgCard.getAttribute('data-title');
    const rarity = imgCard.getAttribute('data-rarity');
    const price = imgCard.getAttribute('data-price');
    const bonus = imgCard.getAttribute('data-bonus');
    const imgSrc = imgCard.getAttribute('data-img');

    popupImage.src = imgSrc;
    popupTitle.textContent = title;
    popupRarity.textContent = `Rareté: ${rarity}`;
    priceText.textContent = `Prix: ${price}`;
    popupBonus.textContent = `Bonus: ${bonus}`;

    popup.style.display = 'flex';
  });
});

popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == popup) {
    popup.style.display = 'none';
  }
});
