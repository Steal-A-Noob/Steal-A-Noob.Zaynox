const searchBar = document.getElementById("searchBar");
const imagesContainer = document.querySelector(".images-container");
const imageCards = document.querySelectorAll(".image-card");

const popup = document.getElementById("popup");
const popupClose = document.getElementById("popupClose");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupRarity = document.getElementById("popupRarity");
const priceText = document.getElementById("priceText");
const popupBonus = document.getElementById("popupBonus");

// ===== Filtre de recherche =====
searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();
  imageCards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    card.style.display = title.includes(query) ? "block" : "none";
  });
});

// ===== Tri =====
function sortByPrice(asc = true) {
  const cardsArray = Array.from(imageCards);
  cardsArray.sort((a, b) => {
    const priceA = parseInt(a.dataset.price.replace(/\s/g, ""));
    const priceB = parseInt(b.dataset.price.replace(/\s/g, ""));
    return asc ? priceA - priceB : priceB - priceA;
  });
  cardsArray.forEach(card => imagesContainer.appendChild(card));
}

function sortByRarity() {
  const rarityOrder = ["Commun", "UnCommun", "Rare", "Légendaire", "Mythique"];
  const cardsArray = Array.from(imageCards);
  cardsArray.sort((a, b) => {
    return rarityOrder.indexOf(a.dataset.rarity) - rarityOrder.indexOf(b.dataset.rarity);
  });
  cardsArray.forEach(card => imagesContainer.appendChild(card));
}

document.getElementById("sortPriceAsc").addEventListener("click", () => sortByPrice(true));
document.getElementById("sortPriceDesc").addEventListener("click", () => sortByPrice(false));
document.getElementById("sortRarity").addEventListener("click", sortByRarity);

// ===== Popup =====
imageCards.forEach(card => {
  card.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImage.src = card.dataset.img; // image au-dessus
    popupTitle.textContent = card.dataset.title;

    // Couleur rareté
    let rarity = card.dataset.rarity;
    let rarityColor = "#fff";
    switch(rarity) {
      case "Commun": rarityColor = "gray"; break;
      case "UnCommun": rarityColor = "#00BFFF"; break;
      case "Rare": rarityColor = "#1E90FF"; break;
      case "Légendaire": rarityColor = "orange"; break;
      case "Mythique": rarityColor = "purple"; break;
    }
    popupRarity.innerHTML = `<span style="color:${rarityColor}">Rareté: ${rarity}</span>`;

    // Prix avec couleur argent
    let price = card.dataset.price;
    priceText.innerHTML = `<span style="color:silver">Prix: ${price} $</span>`;

    popupBonus.textContent = `Bonus: ${card.dataset.bonus}`;
  });
});

popupClose.addEventListener("click", () => popup.style.display = "none"));
