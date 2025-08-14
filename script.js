const searchBar = document.getElementById("searchBar");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupRarity = document.getElementById("popupRarity");
const priceText = document.getElementById("priceText");
const popupBonus = document.getElementById("popupBonus");
const popupClose = document.getElementById("popupClose");

const imageCards = document.querySelectorAll(".image-card");

imageCards.forEach(card => {
  card.addEventListener("click", () => {
    const title = card.getAttribute("data-title");
    const rarity = card.getAttribute("data-rarity");
    const price = card.getAttribute("data-price");
    const bonus = card.getAttribute("data-bonus");
    const img = card.getAttribute("data-img");

    popup.style.display = "block";
    popupImage.src = img;
    popupTitle.textContent = title;

    let rarityColor = "white";
    switch(rarity) {
      case "Commun": rarityColor="gray"; break;
      case "UnCommun": rarityColor="lightgreen"; break;
      case "Rare": rarityColor="deepskyblue"; break;
      case "Légendaire": rarityColor="orange"; break;
      case "Mythique": rarityColor="deeppink"; break;
    }

    popupRarity.innerHTML =
