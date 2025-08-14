// Références DOM
const searchBar = document.getElementById("searchBar");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupRarity = document.getElementById("popupRarity");
const priceText = document.getElementById("priceText");
const popupBonus = document.getElementById("popupBonus");
const popupClose = document.getElementById("popupClose");
const imagesContainer = document.querySelector(".images-container");

// Rareté et couleurs
const rarityColors = {
  "Commun": "gray",
  "UnCommun": "orange",
  "Rare": "deepskyblue",
  "Légendaire": "gold",
  "Mythique": "magenta"
};

// Glow autour des images selon rareté
function setGlow(card, rarity) {
  const color = rarityColors[rarity] || "white";
  card.style.boxShadow = `0 0 15px ${color}`;
}

// Fermer popup
popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

// Création des cartes
const noobs = [
  {title:"Noob", rarity:"Commun", price:"$250", bonus:"+1$/s", img:"noob.png"},
  {title:"Noob Boxeur", rarity:"Rare", price:"$2k", bonus:"+6$/s", img:"noir fond.png"},
  {title:"Noob Ninja", rarity:"Rare", price:"$10k", bonus:"+20$/s", img:"noir fond.png"},
  {title:"Agent Noob", rarity:"Commun", price:"$250", bonus:"+1$/s", img:"noir fond.png"},
  {title:"Surf Noob", rarity:"Commun", price:"$550", bonus:"+2$/s", img:"noir fond.png"},
  {title:"Hacker Noob", rarity:"Légendaire", price:"$30k", bonus:"+20$/s", img:"noir fond.png"},
  {title:"Magic Noob", rarity:"UnCommun", price:"$250", bonus:"+1$/s", img:"noir fond.png"},
  {title:"God Noob", rarity:"Mythique", price:"$30k", bonus:"+20$/s", img:"noir fond.png"}
];

function createCards() {
  imagesContainer.innerHTML = ""; // Evite doublons
  noobs.forEach(n => {
    const card = document.createElement("div");
    card.classList.add("image-card");
    card.dataset.title = n.title;
    card.dataset.rarity = n.rarity;
    card.dataset.price = n.price;
    card.dataset.bonus = n.bonus;
    card.dataset.img = n.img;

    const img = document.createElement("img");
    img.src = n.img;
    img.alt = n.title;
    card.appendChild(img);

    const title = document.createElement("div");
    title.classList.add("image-title");
    title.textContent = n.title;
    card.appendChild(title);

    // Glow
    setGlow(card, n.rarity);

    // Popup click
    card.addEventListener("click", () => {
      popup.style.display = "block";
      popupImage.src = n.img;
      popupTitle.textContent = n.title;
      popupRarity.innerHTML = `Rareté: <span style="color:${rarityColors[n.rarity]}">${n.rarity}</span>`;
      priceText.innerHTML = `<span style="color:green">${n.price}</span>`;
      popupBonus.innerHTML = `<span style="color:yellow">${n.bonus}</span>`;
    });

    imagesContainer.appendChild(card);
  });
}

createCards();

// Recherche en direct
searchBar.addEventListener("input", () => {
  const value = searchBar.value.toLowerCase();
  document.querySelectorAll(".image-card").forEach(card => {
    const title = card.dataset.title.toLowerCase();
    card.style.display = title.includes(value) ? "inline-block" : "none";
  });
});

// Tri boutons
document.getElementById("sortRarity").addEventListener("click", () => {
  const order = ["Commun","UnCommun","Rare","Légendaire","Mythique"];
  noobs.sort((a,b) => order.indexOf(a.rarity) - order.indexOf(b.rarity));
  createCards();
});

document.getElementById("sortPriceAsc").addEventListener("click", () => {
  noobs.sort((a,b) => parseInt(a.price.replace(/\$|k/g, m=>m==='k'? '000':'') ) - parseInt(b.price.replace(/\$|k/g, m=>m==='k'? '000':'') ));
  createCards();
});

document.getElementById("sortPriceDesc").addEventListener("click", () => {
  noobs.sort((a,b) => parseInt(b.price.replace(/\$|k/g, m=>m==='k'? '000':'') ) - parseInt(a.price.replace(/\$|k/g, m=>m==='k'? '000':'') ));
  createCards();
});
