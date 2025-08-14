// Sélection des éléments
const images = document.querySelectorAll('.image-card');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const popupRarity = document.getElementById('popupRarity');
const priceText = document.getElementById('priceText');
const popupBonus = document.getElementById('popupBonus');
const popupClose = document.getElementById('popupClose');

const searchBar = document.getElementById('searchBar');
const sortRarity = document.getElementById('sortRarity');
const sortPriceAsc = document.getElementById('sortPriceAsc');
const sortPriceDesc = document.getElementById('sortPriceDesc');
const imagesContainer = document.querySelector('.images-container');

// Ouvrir popup quand on clique sur une image
images.forEach(img => {
    img.addEventListener('click', () => {
        const title = img.dataset.title;
        const rarity = img.dataset.rarity;
        const price = img.dataset.price;
        const bonus = img.dataset.bonus;
        const imgSrc = img.dataset.img; // <- On prend le data-img pour être sûr

        popupImage.src = imgSrc; // image en haut
        popupTitle.textContent = title;
        popupRarity.textContent = "Rareté : " + rarity;
        priceText.textContent = "Prix : " + price;
        popupBonus.textContent = "Bonus : " + bonus;

        popup.style.display = 'flex';
    });
});

// Fermer popup
popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Recherche par nom
searchBar.addEventListener('input', () => {
    const value = searchBar.value.toLowerCase();
    images.forEach(img => {
        const title = img.dataset.title.toLowerCase();
        img.style.display = title.includes(value) ? 'flex' : 'none';
    });
});

// Trier par rareté
sortRarity.addEventListener('click', () => {
    const rarityOrder = ["Commun", "UnCommun", "Rare", "Légendaire", "Mythique"];
    const cards = Array.from(imagesContainer.children);
    cards.sort((a, b) => {
        return rarityOrder.indexOf(a.dataset.rarity) - rarityOrder.indexOf(b.dataset.rarity);
    });
    cards.forEach(card => imagesContainer.appendChild(card));
});

// Trier par prix croissant
sortPriceAsc.addEventListener('click', () => {
    const cards = Array.from(imagesContainer.children);
    cards.sort((a, b) => parseInt(a.dataset.price.replace(/\s/g,'')) - parseInt(b.dataset.price.replace(/\s/g,'')));
    cards.forEach(card => imagesContainer.appendChild(card));
});

// Trier par prix décroissant
sortPriceDesc.addEventListener('click', () => {
    const cards = Array.from(imagesContainer.children);
    cards.sort((a, b) => parseInt(b.dataset.price.replace(/\s/g,'')) - parseInt(a.dataset.price.replace(/\s/g,'')));
    cards.forEach(card => imagesContainer.appendChild(card));
});
