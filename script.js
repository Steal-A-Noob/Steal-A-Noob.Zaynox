const searchBar = document.getElementById("searchBar");
const resetBtn = document.getElementById("resetBtn");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupRarity = document.getElementById("popupRarity");
const priceText = document.getElementById("priceText");
const popupBonus = document.getElementById("popupBonus");
const popupClose = document.getElementById("popupClose");

const rarityFilter = document.getElementById("rarityFilter");
const sortFilter = document.getElementById("sortFilter");

let imageCards = Array.from(document.querySelectorAll(".image-card"));

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
    priceText.textContent = `Prix: $${price}`;
    popupBonus.textContent = `Bonus: +${bonus}$/s`;

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

popupClose.addEventListener("click", () => popup.classList.remove("show"));

// Recherche
searchBar.addEventListener("input", filterImages);

// Filtre par rareté
rarityFilter.addEventListener("change", filterImages);

// Trier
sortFilter.addEventListener("change", () => {
  const value = sortFilter.value;
  let sortedCards = [...imageCards];

  if(value === "priceAsc") sortedCards.sort((a,b)=> a.dataset.price - b.dataset.price);
  if(value === "priceDesc") sortedCards.sort((a,b)=> b.dataset.price - a.dataset.price);
  if(value === "bonusAsc") sortedCards.sort((a,b)=> a.dataset.bonus - b.dataset.bonus);
  if(value === "bonusDesc") sortedCards.sort((a,b)=> b.dataset.bonus - a.dataset.bonus);

  const container = document.querySelector(".images-container");
  container.innerHTML = "";
  sortedCards.forEach(c => container.appendChild(c));
});

function filterImages(){
  const searchValue = searchBar.value.toLowerCase();
  const rarityValue = rarityFilter.value;

  imageCards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    const rarity = card.dataset.rarity;
    let show = title.includes(searchValue);
    if(rarityValue !== "all") show = show && (rarity === rarityValue);
    card.style.display = show ? "inline-block" : "none";
  });
}

// Reset
resetBtn.addEventListener("click", () => {
  searchBar.value = "";
  rarityFilter.value = "all";
  sortFilter.value = "none";
  filterImages();
});
