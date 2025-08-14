// script.js

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".image-card");
  const popup = document.getElementById("popup");
  const popupClose = document.getElementById("popupClose");
  const popupImage = document.getElementById("popupImage");
  const popupTitle = document.getElementById("popupTitle");
  const popupRarity = document.getElementById("popupRarity");
  const priceText = document.getElementById("priceText");
  const popupBonus = document.getElementById("popupBonus");
  const searchBar = document.getElementById("searchBar");

  // Ouvrir popup
  cards.forEach(card => {
    card.addEventListener("click", () => {
      popupImage.src = card.dataset.img;
      popupTitle.textContent = card.dataset.title;
      popupRarity.innerHTML = `Rareté: <span style="color:${getRarityColor(card.dataset.rarity)}">${card.dataset.rarity}</span>`;
      priceText.innerHTML = `Prix: <span style="color:green">$${card.dataset.price}</span>`;
      popupBonus.innerHTML = `<span style="color:yellow">+${card.dataset.bonus}</span>`;
      popup.style.display = "flex";
    });
  });

  // Fermer popup
  popupClose.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Fermer popup si clique à l'extérieur
  popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.style.display = "none";
  });

  // Couleur selon rareté
  function getRarityColor(rarity) {
    switch(rarity.toLowerCase()) {
      case "commun": return "white";
      case "rare": return "deepskyblue";
      case "uncommun": return "purple";
      case "légendaire": return "orange";
      case "mythique": return "hotpink";
      default: return "white";
    }
  }

  // Tri
  document.getElementById("sortRarity").addEventListener("click", () => {
    sortCards("rarity");
  });
  document.getElementById("sortPriceAsc").addEventListener("click", () => {
    sortCards("price", "asc");
  });
  document.getElementById("sortPriceDesc").addEventListener("click", () => {
    sortCards("price", "desc");
  });

  function sortCards(type, order) {
    const container = document.querySelector(".images-container");
    const cardsArray = Array.from(cards);

    if (type === "rarity") {
      const rarityOrder = ["commun", "uncommun", "rare", "légendaire", "mythique"];
      cardsArray.sort((a, b) => rarityOrder.indexOf(a.dataset.rarity.toLowerCase()) - rarityOrder.indexOf(b.dataset.rarity.toLowerCase()));
    } else if (type === "price") {
      cardsArray.sort((a, b) => order === "asc" ? a.dataset.price - b.dataset.price : b.dataset.price - a.dataset.price);
    }

    cardsArray.forEach(card => container.appendChild(card));
  }

  // Recherche
  searchBar.addEventListener("input", () => {
    const searchValue = searchBar.value.toLowerCase();
    cards.forEach(card => {
      const title = card.dataset.title.toLowerCase();
      card.style.display = title.includes(searchValue) ? "block" : "none";
    });
  });
});
