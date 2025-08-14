// script.js

// Ordre de rareté
const rarityOrder = {
  "mythique": 1,
  "légendaire": 2,
  "rare": 3,
  "commun": 4,
  "uncommun": 5
};

// Récupération des éléments
const searchBar = document.getElementById("searchBar");
const sortRarityBtn = document.getElementById("sortRarity");
const sortPriceAscBtn = document.getElementById("sortPriceAsc");
const sortPriceDescBtn = document.getElementById("sortPriceDesc");
const container = document.querySelector(".images-container");
const popup = document.getElementById("popup");
const popupClose = document.getElementById("popupClose");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupRarity = document.getElementById("popupRarity");
const priceText = document.getElementById("priceText");
const popupBonus = document.getElementById("popupBonus");

// Ouvrir popup en cliquant sur une image
document.querySelectorAll(".image-card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.getAttribute("data-title");
    const rarity = card.getAttribute("data-rarity");
    const price = card.getAttribute("data-price");
    const bonus = card.getAttribute("data-bonus");
    const imgSrc = card.getAttribute("data-img");

    popupImage.src = imgSrc; // image au-dessus
    popupTitle.textContent = title;
    popupRarity.innerHTML = `<span style="color: orange;">Rareté:</span> ${rarity}`;
    priceText.innerHTML = `<span style="color: green;">Prix:</span> ${price}$`;
    popupBonus.textContent = `Bonus: ${bonus}`;

    popup.style.display = "flex"; // afficher popup
  });
});

// Fermer popup
popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

// Tri rareté
sortRarityBtn.addEventListener("click", () => {
  const cards = Array.from(container.children);
  cards.sort((a, b) => {
    const rarityA = a.getAttribute("data-rarity").toLowerCase();
    const rarityB = b.getAttribute("data-rarity").toLowerCase();
    return rarityOrder[rarityA] - rarityOrder[rarityB];
  });
  cards.forEach(card => container.appendChild(card));
});

// Tri prix croissant
sortPriceAscBtn.addEventListener("click", () => {
  const cards = Array.from(container.children);
  cards.sort((a, b) => Number(a.getAttribute("data-price").replace(/\s/g, '')) - Number(b.getAttribute("data-price").replace(/\s/g, '')));
  cards.forEach(card => container.appendChild(card));
});

// Tri prix décroissant
sortPriceDescBtn.addEventListener("click", () => {
  const cards = Array.from(container.children);
  cards.sort((a, b) => Number(b.getAttribute("data-price").replace(/\s/g, '')) - Number(a.getAttribute("data-price").replace(/\s/g, '')));
  cards.forEach(card => container.appendChild(card));
});

// Recherche par nom
searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();
  document.querySelectorAll(".image-card").forEach(card => {
    const title = card.getAttribute("data-title").toLowerCase();
    if(title.includes(query)){
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
