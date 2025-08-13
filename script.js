const searchBar = document.getElementById("searchBar");
const noobImage = document.getElementById("noobImage");
const noirFondImage = document.getElementById("noirFondImage");

const popup = document.getElementById("popup");
const popupClose = document.getElementById("popupClose");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupRarity = document.getElementById("popupRarity");
const priceText = document.getElementById("priceText");
const popupBonus = document.getElementById("popupBonus");

const imagesData = {
  "noob": {
    title: "Noob",
    image: "noob.png",
    rarity: "Rareté: Commum",
    price: "Prix: $250",
    bonus: "+1$/s"
  },
  "noir fond": {
    title: "Noob Boxeur",
    image: "noir fond.png",
    rarity: "Rareté: Rare",
    price: "Prix: $2k",
    bonus: "+6$/s"
  }
};

function openPopup(data) {
  popupImage.src = data.image;
  popupTitle.textContent = data.title;
  popupRarity.textContent = data.rarity;
  priceText.textContent = data.price;
  popupBonus.textContent = data.bonus;
  popup.style.display = "block";
}

noobImage.addEventListener("click", () => openPopup(imagesData["noob"]));
noirFondImage.addEventListener("click", () => openPopup(imagesData["noir fond"]));

popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

searchBar.addEventListener("input", () => {
  const value = searchBar.value.toLowerCase();
  if (value.includes("noob")) {
    openPopup(imagesData["noob"]);
  } else if (value.includes("boxeur") || value.includes("noir")) {
    openPopup(imagesData["noir fond"]);
  }
});
