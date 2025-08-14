const searchBar = document.getElementById("searchBar");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupRarity = document.getElementById("popupRarity");
const priceText = document.getElementById("priceText");
const popupBonus = document.getElementById("popupBonus");
const popupClose = document.getElementById("popupClose");
const imagesContainer = document.querySelector(".images-container");

const rarityColors = {
  "Commun": "white",
  "Rare": "#00cfff",
  "UnCommun": "orange",
  "Légendaire": "purple",
  "Mythique": "#ff00ff"
};

// Les cartes de noobs
const cardsData = [
  {title: "Noob", rarity: "Commun", price: "$250", bonus: "+1$/s", img: "noob.png"},
  {title: "Noob Boxeur", rarity: "Rare", price: "$2k", bonus: "+6$/s", img: "noir fond.png"},
  {title: "Noob Ninja", rarity: "Rare", price: "$10k", bonus: "+20$/s", img: "noir fond.png"},
  {title: "Agent Noob", rarity: "Commun", price: "$250", bonus: "+1$/s", img: "noir fond.png"},
  {title: "Surf Noob", rarity: "Commun", price: "$550", bonus: "+2$/s", img: "noir fond.png"},
  {title: "Hacker Noob", rarity: "Légendaire", price: "$30k", bonus: "+20$/s", img: "noir fond.png"},
  {title: "Magic Noob", rarity: "UnCommun", price: "$250", bonus: "+1$/s", img: "noir fond.png"},
  {title: "God Noob", rarity: "Mythique", price: "$30k", bonus: "+20$/s", img: "noir fond.png"}
];

// Création dynamique des cartes
function renderCards(cards){
  imagesContainer.innerHTML = "";
  cards.forEach(card => {
    const div = document.createElement("div");
    div.classList.add("image-card");
    div.classList.add(`glow-${card.rarity}`);
    div.setAttribute("data-title", card.title);
    div.setAttribute("data-rarity", card.rarity);
    div.setAttribute("data-price", card.price);
    div.setAttribute("data-bonus", card.bonus);
    div.setAttribute("data-img", card.img);
    div.innerHTML = `
      <img src="${card.img}" alt="${card.title}">
      <div class="image-title">${card.title}</div>
    `;
    div.addEventListener("click", () => openPopup(card));
    imagesContainer.appendChild(div);
  });
}

// Ouvrir le pop-up
function openPopup(card){
  popup.style.display = "block";
  popupImage.src = card.img;
  popupTitle.textContent = card.title;
  popupRarity.innerHTML = `Rareté: <span style="color:${rarityColors[card.rarity]}">${card.rarity}</span>`;
  priceText.innerHTML = `Prix: <span style="color:green">${card.price}</span>`;
  popupBonus.innerHTML = `<span style="color:yellow">${card.bonus}</span>`;
}

// Fermer popup
popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

// Recherche
searchBar.addEventListener("input", () => {
  const value = searchBar.value.toLowerCase();
  renderCards(cardsData.filter(c => c.title.toLowerCase().includes(value)));
});

// Tri
document.getElementById("sortRarity").addEventListener("click", () => {
  const order = ["Commun", "UnCommun", "Rare", "Légendaire", "Mythique"];
  renderCards([...cardsData].sort((a,b) => order.indexOf(a.rarity) - order.indexOf(b.rarity)));
});

document.getElementById("sortPriceAsc").addEventListener("click", () => {
  renderCards([...cardsData].sort((a,b) => parseInt(a.price.replace(/[^0-9]/g,"")) - parseInt(b.price
