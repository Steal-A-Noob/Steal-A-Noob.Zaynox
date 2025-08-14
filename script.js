// ========================
// Variables principales
// ========================
const imagesContainer = document.querySelector('.images-container');
const searchBar = document.getElementById('searchBar');
const sortRarityBtn = document.getElementById('sortRarity');
const sortPriceAscBtn = document.getElementById('sortPriceAsc');
const sortPriceDescBtn = document.getElementById('sortPriceDesc');

const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const popupRarity = document.getElementById('popupRarity');
const priceText = document.getElementById('priceText');
const popupBonus = document.getElementById('popupBonus');
const popupClose = document.getElementById('popupClose');

// ========================
// Affichage du popup
// ========================
imagesContainer.addEventListener('click', e => {
    const card = e.target.closest('.image-card');
    if (!card) return;

    popupImage.src = card.dataset.img;
    popupTitle.textContent = card.dataset.title;
    popupRarity.textContent = `Rareté: ${card.dataset.rarity}`;
    priceText.textContent = `Prix: ${card.dataset.price}`;
    popupBonus.textContent = `Bonus: ${card.dataset.bonus}`;

    popup.classList.add('inverted'); // rotation 180° pour effet inversé
    popup.style.display = 'block';
});

// Fermeture du popup
popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
});

// ========================
// Recherche par titre
// ========================
searchBar.addEventListener('input', () => {
    const search = searchBar.value.toLowerCase();
    document.querySelectorAll('.image-card').forEach(card => {
        const title = card.dataset.title.toLowerCase();
        card.style.display = title.includes(search) ? 'block' : 'none';
    });
});

// ========================
// Tri par rareté
// ========================
sortRarityBtn.addEventListener('click', () => {
    const rarityOrder = ['Commun','UnCommun','Rare','Legendaire','Mythique','Secret'];
    const cards = Array.from(document.querySelectorAll('.image-card'));
    cards.sort((a, b) => rarityOrder.indexOf(a.dataset.rarity) - rarityOrder.indexOf(b.dataset.rarity));
    cards.forEach(card => imagesContainer.appendChild(card));
});

// ========================
// Tri par prix
// ========================
sortPriceAscBtn.addEventListener('click', () => {
    const cards = Array.from(document.querySelectorAll('.image-card'));
    cards.sort((a, b) => parseInt(a.dataset.price) - parseInt(b.dataset.price));
    cards.forEach(card => imagesContainer.appendChild(card));
});

sortPriceDescBtn.addEventListener('click', () => {
    const cards = Array.from(document.querySelectorAll('.image-card'));
    cards.sort((a, b) => parseInt(b.dataset.price) - parseInt(a.dataset.price));
    cards.forEach(card => imagesContainer.appendChild(card));
});

// ========================
// Glow selon rareté (optionnel si pas en CSS)
// ========================
document.querySelectorAll('.image-card').forEach(card => {
    switch(card.dataset.rarity){
        case 'Commun':
            card.classList.add('glow-Commun');
            break;
        case 'UnCommun':
            card.classList.add('glow-Uncommun');
            break;
        case 'Rare':
            card.classList.add('glow-Rare');
            break;
        case 'Legendaire':
            card.classList.add('glow-Legendaire');
            break;
        case 'Mythique':
            card.classList.add('glow-Mythique');
            break;
        case 'Secret':
            card.classList.add('glow-Secret');
            break;
    }
});
