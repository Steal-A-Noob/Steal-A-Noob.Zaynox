const imagesData = [
  { title: "Noob", rarity: "Commun", price: "$250", bonus: "+1$/s", img: "noob.png" },
  { title: "Noob Boxeur", rarity: "Rare", price: "$2k", bonus: "+6$/s", img: "noir fond.png" },
  { title: "Noob Ninja", rarity: "Rare", price: "$10k", bonus: "+20$/s", img: "noir fond.png" },
  { title: "Agent Noob", rarity: "Commun", price: "$250", bonus: "+1$/s", img: "noir fond.png" },
  { title: "Surf Noob", rarity: "Commun", price: "$550", bonus: "+2$/s", img: "noir fond.png" },
  { title: "Hacker Noob", rarity: "Légendaire", price: "$30k", bonus: "+20$/s", img: "noir fond.png" },
  { title: "Magic Noob", rarity: "UnCommun", price: "$250", bonus: "+1$/s", img: "noir fond.png" },
  { title: "God Noob", rarity: "Mythique", price: "$30k", bonus: "+20$/s", img: "noir fond.png" }
];

const imagesContainer = document.getElementById("imagesContainer");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupRarity = document.getElementById("popupRarity");
const priceText = document.getElementById("priceText");
const popupBonus = document.getElementById("popupBonus");
const popupEffect = document.getElementById("popupEffect");
const popupClose = document.getElementById("popupClose");
const searchBar = document.getElementById("searchBar");
const rarityFilter = document.getElementById("rarityFilter");

function generateCards() {
  imagesContainer.innerHTML = "";
  const searchValue = searchBar.value.toLowerCase();
  const rarityValue = rarityFilter.value;

  imagesData.forEach(item => {
    if ((item.title.toLowerCase().includes(searchValue)) && (rarityValue === "all" || item.rarity === rarityValue)) {
      const card = document.createElement("div");
      card.className = "image-card";
      card.dataset.title = item.title;
      card.dataset.rarity = item.rarity;
      card.dataset.price = item.price;
      card.dataset.bonus = item.bonus;
      card.dataset.img = item.img;

      card.innerHTML = `
        <img src="${item.img}" alt="${item.title}">
        <div class="image-title">${item.title}</div>
      `;

      card.addEventListener("click", () => {
        popup.style.display = "block";
        popupImage.src = item.img;
        popupTitle.textContent = item.title;
        popupRarity.textContent = `Rareté: ${item.rarity}`;
        popupRarity.className = item.rarity;
        priceText.textContent = `Prix: ${item.price}`;
        popupBonus.textContent = item.bonus;
        popupEffect.textContent = item.bonus;
      });

      imagesContainer.appendChild(card);
    }
  });
}

// Fermeture popup
popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

// Recherches et filtres
searchBar.addEventListener("input", generateCards);
rarityFilter.addEventListener("change", generateCards);

// Initialisation
generateCards();
