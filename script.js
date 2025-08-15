// ===== Particles.js =====
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js chargé ✅');
});

// ===== Popup =====
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const popupRarity = document.getElementById('popupRarity');
const popupBonus = document.getElementById('popupBonus');
const priceText = document.getElementById('priceText');
const popupClose = document.getElementById('popupClose');

const cards = document.querySelectorAll('.image-card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        popup.style.display = 'block';
        popupImage.src = card.dataset.img;
        popupTitle.textContent = card.dataset.title;
        popupRarity.textContent = `Rareté: ${card.dataset.rarity}`;
        priceText.textContent = `Prix: ${card.dataset.price} 💰`;
        popupBonus.textContent = `Bonus: ${card.dataset.bonus}`;
    });
});

popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === popup) popup.style.display = 'none';
});

// ===== Recherche =====
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', () => {
    const searchValue = searchBar.value.toLowerCase();
    cards.forEach(card => {
        const title = card.dataset.title.toLowerCase();
        card.style.display = title.includes(searchValue) ? 'block' : 'none';
    });
});

// ===== Tri =====
function sortCards(compareFn) {
    const container = document.querySelector('.images-container');
    const cardsArray = Array.from(cards);
    cardsArray.sort(compareFn);
    cardsArray.forEach(card => container.appendChild(card));
}

// Trier par rareté
document.getElementById('sortRarity').addEventListener('click', () => {
    const rarityOrder = { 'Commun': 1, 'UnCommun': 2, 'Rare': 3, 'Legendaire': 4, 'Mythique': 5, 'Secret': 6 };
    sortCards((a, b) => rarityOrder[a.dataset.rarity] - rarityOrder[b.dataset.rarity]);
});

// Trier par prix croissant
document.getElementById('sortPriceAsc').addEventListener('click', () => {
    sortCards((a, b) => parseInt(a.dataset.price) - parseInt(b.dataset.price));
});

// Trier par prix décroissant
document.getElementById('sortPriceDesc').addEventListener('click', () => {
    sortCards((a, b) => parseInt(b.dataset.price) - parseInt(a.dataset.price));
});
