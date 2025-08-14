// script.js

const images = document.querySelectorAll('.image-card');
const popup = document.getElementById('popup');
const popupClose = document.getElementById('popupClose');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const popupRarity = document.getElementById('popupRarity');
const priceText = document.getElementById('priceText');
const popupBonus = document.getElementById('popupBonus');
const searchBar = document.getElementById('searchBar');

const sortRarityBtn = document.getElementById('sortRarity');
const sortPriceAscBtn = document.getElementById('sortPriceAsc');
const sortPriceDescBtn = document.getElementById('sortPriceDesc');
const imagesContainer = document.querySelector('.images-container');

// Popup
images.forEach(card => {
  card.addEventListener('click', () => {
    const imgSrc = card.querySelector('img').src;
    const title = card.dataset.title;
    const rarity = card.dataset.rarity;
    const price = card.dataset.price;
    const bonus = card.dataset.bonus;

    popupImage.src = imgSrc; // image en haut
    popupTitle.textContent = title;
    popupRarity.textContent = `Rareté : ${rarity}`;
    priceText.innerHTML = `Prix : <span style="color: green;">$${price}</span>`;
    popupBonus.innerHTML = `Bonus : <span style="color: yellow;">${bonus}</span>`;

    popup.style.display = 'flex';
  });
});

popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Recherche
searchBar.addEventListener('input', () => {
  const query = searchBar.value.toLowerCase();
  images.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    if(title.includes(query)){
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

// Tri
sortRarityBtn.addEventListener('click', () => {
  const sorted = Array.from(images).sort((a,b) => {
    return a.dataset.rarity.localeCompare(b.dataset.rarity);
  });
  sorted.forEach(card => imagesContainer.appendChild(card));
});

sortPriceAscBtn.addEventListener('click', () => {
  const sorted = Array.from(images).sort((a,b) => a.dataset.price - b.dataset.price);
  sorted.forEach(card => imagesContainer.appendChild(card));
});

sortPriceDescBtn.addEventListener('click', () => {
  const sorted = Array.from(images).sort((a,b) => b.dataset.price - a.dataset.price);
  sorted.forEach(card => imagesContainer.appendChild(card));
});
