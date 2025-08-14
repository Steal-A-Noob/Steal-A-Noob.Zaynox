const searchBar = document.getElementById("searchBar");
const resetBtn = document.getElementById("resetBtn");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupRarity = document.getElementById("popupRarity");
const priceText = document.getElementById("priceText");
const popupBonus = document.getElementById("popupBonus");
const popupClose = document.getElementById("popupClose");

const imageCards = document.querySelectorAll(".image-card");

// Popups
imageCards.forEach(card => {
  card.addEventListener("click", () => {
    const title = card.getAttribute("data-title");
    const rarity = card.getAttribute("data-rarity");
    const price = card.getAttribute("data-price");
    const bonus = card.getAttribute("data-bonus");
    const img = card.getAttribute("data-img");

    popupImage.src = img;
    popupTitle.textContent = title;
    priceText.textContent = `Prix: ${price}`;
    popupBonus.textContent = bonus;

    let rarityClass = "";
    switch(rarity.toLowerCase()){
      case "rare": rarityClass = "rarity-rare"; break;
      case "uncommun": rarityClass = "rarity-uncommun"; break;
      case "mythique": rarityClass = "rarity-mythique"; break;
      default: rarityClass = ""; break;
    }

    popupRarity.innerHTML = `Rareté: <span class="${rarityClass}">${rarity}</span>`;
    popup.classList.add("show");
  });
});

popupClose.addEventListener("click", () => {
  popup.classList.remove("show");
});

// Recherche
searchBar.addEventListener("input", function() {
  const value = searchBar.value.toLowerCase();
  imageCards.forEach(card => {
    const title = card.getAttribute("data-title").toLowerCase();
    if(title.includes(value)){
      card.style.display = "inline-block";
    } else {
      card.style.display = "none";
    }
  });
});

// Reset
resetBtn.addEventListener("click", () => {
  searchBar.value = "";
  imageCards.forEach(card => card.style.display = "inline-block");
});
