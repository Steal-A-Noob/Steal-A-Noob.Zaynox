// --------------------
// Variables du popup
// --------------------
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupRarity = document.getElementById("popupRarity");
const priceText = document.getElementById("priceText");
const popupBonus = document.getElementById("popupBonus");
const popupClose = document.getElementById("popupClose");

const imageCards = document.querySelectorAll(".image-card");

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

    // Couleur de rareté
    let rarityColor;
    switch (rarity.toLowerCase()) {
      case "commun": rarityColor = "#FFFFFF"; break;
      case "uncommun": rarityColor = "#00FF00"; break;
      case "rare": rarityColor = "#0000FF"; break;
      case "légendaire": rarityColor = "#FFA500"; break;
      case "mythique": rarityColor = "#FF00FF"; break;
      default: rarityColor = "#FFFFFF";
    }
    popupRarity.innerHTML = `<span style="color:${rarityColor}">Rareté: ${rarity}</span>`;

    // Prix couleur or
    priceText.innerHTML = `<span style="color:#006400">Prix: ${price} $</span>`;

// Bonus en jaune (sans texte "Bonus:")
popupBonus.innerHTML = `<span style="color:yellow">${bonus}</span>`;o

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
    if (title.includes(searchValue)) {
      card.style.display = "inline-block";
    } else {
      card.style.display = "none";
    }
  });
});

// --------------------
// Tri par rareté
// --------------------
document.getElementById("sortRarity").addEventListener("click", () => {
  const order = ["mythique", "légendaire", "rare", "commun", "uncommun"];
  const sorted = Array.from(imageCards).sort((a, b) => {
    const rarityA = a.getAttribute("data-rarity").toLowerCase();
    const rarityB = b.getAttribute("data-rarity").toLowerCase();
    return order.indexOf(rarityA) - order.indexOf(rarityB);
  });

  const container = document.querySelector(".images-container");
  sorted.forEach(card => container.appendChild(card));
});

// --------------------
// Tri par prix croissant
// --------------------
document.getElementById("sortPriceAsc").addEventListener("click", () => {
  const sorted = Array.from(imageCards).sort((a, b) => {
    return parseInt(a.getAttribute("data-price")) - parseInt(b.getAttribute("data-price"));
  });

  const container = document.querySelector(".images-container");
  sorted.forEach(card => container.appendChild(card));
});

// --------------------
// Tri par prix décroissant
// --------------------
document.getElementById("sortPriceDesc").addEventListener("click", () => {
  const sorted = Array.from(imageCards).sort((a, b) => {
    return parseInt(b.getAttribute("data-price")) - parseInt(a.getAttribute("data-price"));
  });

  const container = document.querySelector(".images-container");
  sorted.forEach(card => container.appendChild(card));
});


