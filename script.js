const searchBar = document.getElementById("searchBar");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupRarity = document.getElementById("popupRarity");
const priceText = document.getElementById("priceText");
const popupBonus = document.getElementById("popupBonus");
const popupClose = document.getElementById("popupClose");

const imageCards = document.querySelectorAll(".image-card");

// Fonction pour ouvrir le popup
imageCards.forEach(card => {
  card.addEventListener("click", () => {
    popupImage.src = card.getAttribute("data-img");
    popupTitle.textContent = card.getAttribute("data-title");
    popupRarity.textContent = `Rareté: ${card.getAttribute("data-rarity")}`;
    priceText.textContent = `$${card.getAttribute("data-price")}`;
    popupBonus.textContent = `+${card.getAttribute("data-bonus")}`;
    popup.style.display = "block";
  });
});

// Fermer popup
popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) popup.style.display = "none";
});

// Recherche
searchBar.addEventListener("input", () => {
  const value = searchBar.value.toLowerCase();
  imageCards.forEach(card => {
    const title = card.getAttribute("data-title").toLowerCase();
    card.style.display = title.includes(value) ? "inline-block" : "none";
  });
});

// Tri
document.getElementById("sortRarity").addEventListener("click", () => {
  const rarityOrder = ["Commun","UnCommun","Rare","Légendaire","Mythique"];
  const container = document.querySelector(".images-container");
  Array.from(container.children)
    .sort((a,b) => rarityOrder.indexOf(a.dataset.rarity) - rarityOrder.indexOf(b.dataset.rarity))
    .forEach(node => container.appendChild(node));
});

document.getElementById("sortPriceAsc").addEventListener("click", () => {
  const container = document.querySelector(".images-container");
  Array.from(container.children)
    .sort((a,b) => a.dataset.price - b.dataset.price)
    .forEach(node => container.appendChild(node));
});

document.getElementById("sortPriceDesc").addEventListener("click", () => {
  const container = document.querySelector(".images-container");
  Array.from(container.children)
    .sort((a,b) => b.dataset.price - a.dataset.price)
    .forEach(node => container.appendChild(node));
});
