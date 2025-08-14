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

  imageCards.forEach(card => {
    card.addEventListener("click", () => {
      const title = card.getAttribute("data-title");
      const rarity = card.getAttribute("data-rarity");
      const price = card.getAttribute("data-price");
      const bonus = card.getAttribute("data-bonus");
      const img = card.getAttribute("data-img");

      popupImage.src = img;
      popupTitle.textContent = title;
      popupRarity.innerHTML = `Rareté: <span style="color:${getRarityColor(rarity)}">${rarity}</span>`;
      priceText.textContent = `Prix: ${
