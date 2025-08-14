// script.js - popup et tri des cartes

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image-card");
  const popup = document.getElementById("popup");
  const popupClose = document.getElementById("popupClose");
  const popupImage = document.getElementById("popupImage");
  const popupTitle = document.getElementById("popupTitle");
  const popupRarity = document.getElementById("popupRarity");
  const priceText = document.getElementById("priceText");
  const popupBonus = document.getElementById("popupBonus");

  images.forEach(img => {
    img.addEventListener("click", () => {
      // Remplit le popup avec les data-* de l'image
      popupImage.src = img.dataset.img;
      popupTitle.textContent = img.dataset.title;

      // Rarete en couleur
      let rarityColor = "white";
      switch(img.dataset.rarity.toLowerCase()) {
        case "commun": rarityColor = "#ffffff"; break;
        case "rare": rarityColor = "#00ffff"; break;
        case "uncommun": rarityColor = "#ff8c00"; break;
        case "légendaire": rarityColor = "#ffa500"; break;
        case "mythique": rarityColor = "#ff00ff"; break;
      }

      popupRarity.innerHTML = `Rareté: <span style="color:${rarityColor}">${img.dataset.rarity}</span>`;
      priceText.innerHTML = `Prix: <span style="color:green">$${img.dataset.price}</span>`;
      popupBonus.innerHTML = `<span style="color:yellow">+${img.dataset.bonus}</span>`;

      popup.style.display = "flex"; // vertical
      popup.style.flexDirection = "column";
    });
  });

  popupClose.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Tri (exemple rapide)
  const sortRarity = document.getElementById("sortRarity");
  const sortPriceAsc = document.getElementById("sortPriceAsc");
  const sortPriceDesc = document.getElementById("sortPriceDesc");
  const container = document.querySelector(".images-container");

  const rarityOrder = ["commun", "uncommun", "rare", "légendaire", "mythique"];

  sortRarity.addEventListener("click", () => {
    const sorted = Array.from(images).sort((a,b) => {
      return rarityOrder.indexOf(a.dataset.rarity.toLowerCase()) - 
             rarityOrder.indexOf(b.dataset.rarity.toLowerCase());
    });
    sorted.forEach(el => container.appendChild(el));
  });

  sortPriceAsc.addEventListener("click", () => {
    const sorted = Array.from(images).sort((a,b) => a.dataset.price - b.dataset.price);
    sorted.forEach(el => container.appendChild(el));
  });

  sortPriceDesc.addEventListener("click", () => {
    const sorted = Array.from(images).sort((a,b) => b.dataset.price - a.dataset.price);
    sorted.forEach(el => container.appendChild(el));
  });
});
