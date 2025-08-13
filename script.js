const searchBar = document.getElementById("searchBar");
const cards = document.querySelectorAll(".card");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const rarityText = document.getElementById("rarityText");
const priceText = document.getElementById("priceText");
const popupBonus = document.getElementById("popupBonus");
const popupClose = document.getElementById("popupClose");

// Filtrer les cartes
searchBar.addEventListener("input", () => {
  const value = searchBar.value.toLowerCase();
  cards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    if (name.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// Ouvrir popup
cards.forEach(card => {
  card.addEventListener("click", () => {
    const img = card.querySelector(".card-image").src;
    const title = card.dataset.title;
    popupImage.src = img;
    popupTitle.textContent = title;
    rarityText.textContent = "Commum";
    priceText.textContent = "$250";
    popupBonus.textContent = "+1$/s";
    popup.style.display = "flex";
  });
});

// Fermer popup
popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == popup) {
    popup.style.display = "none";
  }
});
