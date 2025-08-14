const searchBar = document.getElementById("searchBar");
const rarityFilter = document.getElementById("rarityFilter");
const imagesContainer = document.getElementById("imagesContainer");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupRarity = document.getElementById("popupRarity");
const priceText = document.getElementById("priceText");
const popupBonus = document.getElementById("popupBonus");
const popupClose = document.getElementById("popupClose");

const noobs = [
  { title: "Noob", img:"noob.png", rarity:"Commun", price:"$250", bonus:"+1$/s"},
  { title: "Noob Boxeur", img:"noir fond.png", rarity:"Rare", price:"$2k", bonus:"+6$/s"},
  { title: "Noob Ninja", img:"noir fond.png", rarity:"Rare", price:"$10k", bonus:"+20$/s"},
  { title: "Agent Noob", img:"noir fond.png", rarity:"Commun", price:"$250", bonus:"+1$/s"},
  { title: "Surf Noob", img:"noir fond.png", rarity:"Commun", price:"$550", bonus:"+2$/s"},
  { title: "Hacker Noob", img:"noir fond.png", rarity:"Légendaire", price:"$30k", bonus:"+20$/s"},
  { title: "Magic Noob", img:"noir fond.png", rarity:"UnCommun", price:"$250", bonus:"+1$/s"},
  { title: "God Noob", img:"noir fond.png", rarity:"Mythique", price:"$30k", bonus:"+20$/s"}
];

function displayNoobs(list){
  imagesContainer.innerHTML = '';
  list.forEach(noob => {
    const card = document.createElement('div');
    card.className = `image-card glow-${noob.rarity}`;
    card.dataset.title = noob.title;
    card.dataset.rarity = noob.rarity;
    card.dataset.price = noob.price;
    card.dataset.bonus = noob.bonus;
    card.dataset.img = noob.img;

    card.innerHTML = `
      <img src="${noob.img}" alt="${noob.title}">
      <div class="image-title">${noob.title}</div>
    `;
    imagesContainer.appendChild(card);

    card.addEventListener('click', () => {
      popup.style.display = "block";
      popupImage.src = noob.img;
      popupTitle.textContent = noob.title;
      popupRarity.textContent = `Rareté: ${noob.rarity}`;
      priceText.textContent = `Prix: ${noob.price}`;
      popupBonus.textContent = noob.bonus;
    });
  });
}

displayNoobs(noobs);

popupClose.addEventListener("click", ()=> popup.style.display = "none");

// Filtre recherche
searchBar.addEventListener("input", function(){
  const value = searchBar.value.toLowerCase();
  const filtered = noobs.filter(noob => noob.title.toLowerCase().includes(value));
  displayNoobs(filtered);
});

// Filtre rareté
rarityFilter.addEventListener("change", function(){
  const value = rarityFilter.value;
  const filtered = value === 'all' ? noobs : noobs.filter(noob => noob.rarity === value);
  displayNoobs(filtered);
});
