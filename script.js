document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const sortRarity = document.getElementById('sortRarity');
    const sortPriceAsc = document.getElementById('sortPriceAsc');
    const sortPriceDesc = document.getElementById('sortPriceDesc');
    const imagesContainer = document.querySelector('.images-container');
    const imageCards = Array.from(document.querySelectorAll('.image-card'));

    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popupImage');
    const popupTitle = document.getElementById('popupTitle');
    const popupRarity = document.getElementById('popupRarity');
    const priceText = document.getElementById('priceText');
    const popupBonus = document.getElementById('popupBonus');
    const popupClose = document.getElementById('popupClose');

    // 🔍 Recherche en direct
    searchBar.addEventListener('input', () => {
        const searchTerm = searchBar.value.toLowerCase();
        imageCards.forEach(card => {
            const title = card.dataset.title.toLowerCase();
            card.style.display = title.includes(searchTerm) ? '' : 'none';
        });
    });

    // 📊 Tri par rareté
    sortRarity.addEventListener('click', () => {
        imageCards.sort((a, b) => a.dataset.rarity.localeCompare(b.dataset.rarity));
        imagesContainer.innerHTML = '';
        imageCards.forEach(card => imagesContainer.appendChild(card));
    });

    // 📈 Tri prix croissant
    sortPriceAsc.addEventListener('click', () => {
        imageCards.sort((a, b) => parseInt(a.dataset.price) - parseInt(b.dataset.price));
        imagesContainer.innerHTML = '';
        imageCards.forEach(card => imagesContainer.appendChild(card));
    });

    // 📉 Tri prix décroissant
    sortPriceDesc.addEventListener('click', () => {
        imageCards.sort((a, b) => parseInt(b.dataset.price) - parseInt(a.dataset.price));
        imagesContainer.innerHTML = '';
        imageCards.forEach(card => imagesContainer.appendChild(card));
    });

    // 📌 Ouverture popup
    imageCards.forEach(card => {
        card.addEventListener('click', () => {
            popupImage.src = card.querySelector('img').src;
            popupTitle.textContent = card.dataset.title;
            popupRarity.textContent = "Rareté : " + card.dataset.rarity;
            priceText.textContent = "Prix : " + card.dataset.price + "$";
            popupBonus.textContent = "Bonus : " + card.dataset.bonus;
            popup.style.display = 'flex';
        });
    });

    // ❌ Fermeture popup
    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // 🚪 Fermeture popup si clic hors de la boîte
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});
