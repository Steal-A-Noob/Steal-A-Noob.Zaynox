// --------------------
// Variables du popup
// --------------------
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupRarity = document.getElementById("popupRarity");
const popupPriceBonus = document.getElementById("popupPriceBonus"); // Nouveau container pour prix + bonus
const popupClose = document.getElementById("popupClose");

const imageCards = document.querySelectorAll(".image-card");

// --------------------
// Lueur autour des cartes selon rareté
// --------------------
imageCards.forEach(card => {
  const rarity = card.getAttribute("data-rarity").toLowerCase();
  let glowColor;

  switch (rarity) {
    case "commun": glowColor = "#FFFFFF"; break;
    case "uncommun": glowColor = "#006400"; break;
    case "rare": glowColor = "#0000FF"; break;
    case "légendaire": glowColor = "#FFA500"; break;
    case "mythique": glowColor = "#FF00FF"; break;
    default: glowColor = "#FFFFFF";
  }

  card.style.boxShadow = `0 0 15px ${glowColor}`;
});

// --------------------
// Affichage du popup
// --------------------
imageCards.forEach(card => {
  card.addEventListener("click", () => {
    const imgSrc = card.querySelector("img").src;
    const title = card.getAttribute("data-title");
    const rarity = card.getAttribute("data-rarity");
    const price = card.getAttribute("data-price");
    const bonus = card.getAttribute("data-bonus");

    popupImage.src = imgSrc;
    popupTitle.textContent = title;

    // Couleur rareté
    let rarityColor;
    switch (rarity.toLowerCase()) {
      case "commun": rarityColor = "#FFFFFF"; break;
      case "uncommun": rarityColor = "#006400"; break;
      case "rare": rarityColor = "#0000FF"; break;
      case "légendaire": rarityColor = "#FFA500"; break;
      case "mythique": rarityColor = "#FF00FF"; break;
      default: rarityColor = "#FFFFFF";
    }
    popupRarity.innerHTML = `<span style="color:${rarityColor}">Rareté: ${rarity}</span>`;

    // Prix + Bonus juste en dessous du titre
    popupPriceBonus.innerHTML = `
      <div style="color:#90EE90; font-weight:bold">Prix: ${price} $</div>
      <div style="color:yellow; font-weight:bold">${bonus}</div>
    `;

    popup.style.display = "flex";
  });
});

// --------------------
// Fermeture popup
// --------------------
popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

// --------------------
// Barre de recherche
// --------------------
document.getElementById("searchBar").addEventListener("input", function () {
  const searchValue = this.value.toLowerCase();
  imageCards.forEach(card => {
    const title = card.getAttribute("data-title").toLowerCase();
    card.style.display = title.includes(searchValue) ? "inline-block" : "none";
  });
});

// --------------------
// Tri par rareté
// --------------------
document.getElementById("sortRarity").addEventListener("click", () => {
  const order = ["mythique", "légendaire", "rare", "commun", "uncommun"];
  const sorted = Array.from(imageCards).sort((a, b) => {
    return order.indexOf(a.getAttribute("data-rarity").toLowerCase()) -
           order.indexOf(b.getAttribute("data-rarity").toLowerCase());
  });

  const container = document.querySelector(".images-container");
  sorted.forEach(card => container.appendChild(card));
});

// --------------------
// Tri par prix croissant
// --------------------
document.getElementById("sortPriceAsc").addEventListener("click", () => {
  const sorted = Array.from(imageCards).sort((a, b) => 
    parseInt(a.getAttribute("data-price")) - parseInt(b.getAttribute("data-price"))
  );
  const container = document.querySelector(".images-container");
  sorted.forEach(card => container.appendChild(card));
});

// --------------------
// Tri par prix décroissant
// --------------------
document.getElementById("sortPriceDesc").addEventListener("click", () => {
  const sorted = Array.from(imageCards).sort((a, b) => 
    parseInt(b.getAttribute("data-price")) - parseInt(a.getAttribute("data-price"))
  );
  const container = document.querySelector(".images-container");
  sorted.forEach(card => container.appendChild(card));
});


