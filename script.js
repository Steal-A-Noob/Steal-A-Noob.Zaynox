document.addEventListener("DOMContentLoaded", () => {

  const searchBar = document.getElementById("searchBar");
  const popup = document.getElementById("popup");
  const popupImage = document.getElementById("popupImage");
  const popupTitle = document.getElementById("popupTitle");
  const popupRarity = document.getElementById("popupRarity");
  const priceText = document.getElementById("priceText");
  const popupBonus = document.getElementById("popupBonus");
  const popupClose = document.getElementById("popupClose");

  const imageCards = document.querySelectorAll(".image-card");

  // Afficher le popup
  imageCards.forEach(card => {
    card.addEventListener("click", () => {
      const title = card.getAttribute("data-title");
      const rarity = card.getAttribute("data-rarity");
      const price = card.getAttribute("data-price");
      const bonus = card.getAttribute("data-bonus");
      const img = card.getAttribute("data-img");

      popupImage.src = img;
      popupTitle.textContent = title;
      popupRarity.innerHTML = `<span style="color:${getRarityColor(rarity)}">${rarity}</span>`;
      priceText.textContent = `Prix: ${price}`;
      popupBonus.textContent = `Bonus: ${bonus}`;

      popup.style.display = "block";
    });
  });

  // Fermer le popup
  popupClose.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Fermer si clique en dehors
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });

  // Fonction pour obtenir couleur rareté
  function getRarityColor(rarity) {
    switch(rarity) {
      case "Commun": return "gray";
      case "UnCommun": return "lightgreen";
      case "Rare": return "deepskyblue";
      case "Légendaire": return "orange";
      case "Mythique": return "deeppink";
      default: return "white";
    }
  }

  // Filtrer les cartes via la recherche
  searchBar.addEventListener("input", () => {
    const filter = searchBar.value.toLowerCase();
    imageCards.forEach(card => {
      const title = card.getAttribute("data-title").toLowerCase();
      card.style.display = title.includes(filter) ? "inline-block" : "none";
    });
  });

});
