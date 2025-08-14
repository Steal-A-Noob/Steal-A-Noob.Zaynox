// script.js
(() => {
  // Helpers
  const $  = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));

  // --- Sélecteurs popup ---
  const popup       = $('#popup');
  const popupImage  = $('#popupImage');
  const popupTitle  = $('#popupTitle');
  const popupRarity = $('#popupRarity');
  const priceText   = $('#priceText');
  const popupBonus  = $('#popupBonus');
  const popupClose  = $('#popupClose');

  // Sécurité : si un élément du popup manque, on stoppe pour éviter erreurs
  if (!popup || !popupImage || !popupTitle || !popupRarity || !priceText || !popupBonus || !popupClose) {
    console.error('⛔ Éléments du popup introuvables. Vérifie les IDs dans le HTML.');
    return;
  }

  // --- Cartes ---
  const imageCards = $$('.image-card');
  const container  = $('.images-container');

  // Couleurs de lueur par rareté (tolère accents/variantes)
  const glowMap = {
    'commun':     '#ffffff',
    'uncommun':   '#39e75f',  // vert clair
    'uncommon':   '#39e75f',
    'rare':       '#3b82f6',
    'légendaire': '#f59e0b',
    'legendaire': '#f59e0b',
    'mythique':   '#e879f9',
    'secret':     '#a855f7'
  };

  // Lueur + ouverture du popup sur clic
  imageCards.forEach(card => {
    const r = (card.dataset.rarity || '').toLowerCase();
    card.style.boxShadow = `0 0 15px ${glowMap[r] || '#ffffff'}`;
    card.style.cursor = 'pointer';

    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      popupImage.src = img ? img.src : '';
      popupTitle.textContent = card.dataset.title || '';

      const rarity = card.dataset.rarity || '';
      const rarityColor = glowMap[rarity.toLowerCase()] || '#ffffff';
      popupRarity.innerHTML = `<span style="color:${rarityColor}">Rareté: ${rarity}</span>`;

      const priceRaw = card.dataset.price || '';
      priceText.innerHTML = `<span style="color:#39e75f">Prix: ${priceRaw} $</span>`;
      popupBonus.innerHTML = `<span style="color:yellow">${card.dataset.bonus || ''}</span>`;

      openPopup();
    });
  });

  // --- Ouverture / Fermeture ---
  function openPopup() {
    popup.style.display = 'flex';           // visible
    popup.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // bloque le scroll fond
  }

  function closePopup() {
    popup.style.display = 'none';
    popup.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  popupClose.addEventListener('click', closePopup);

  // Clic en dehors du contenu => ferme
  popup.addEventListener('click', (e) => {
    if (e.target === popup) closePopup();
  });

  // Échap => ferme
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePopup();
  });

  // --- Recherche ---
  const searchBar = $('#searchBar');
  if (searchBar) {
    searchBar.addEventListener('input', () => {
      const q = searchBar.value.toLowerCase();
      imageCards.forEach(card => {
        const title = (card.dataset.title || '').toLowerCase();
        card.style.display = title.includes(q) ? 'inline-block' : 'none';
      });
    });
  }

  // --- Tri ---
  const sortRarity    = $('#sortRarity');
  const sortPriceAsc  = $('#sortPriceAsc');
  const sortPriceDesc = $('#sortPriceDesc');

  const parsePrice = p => parseInt(String(p || '').replace(/\s/g, ''), 10) || 0;

  if (sortRarity) {
    sortRarity.addEventListener('click', () => {
      const order = ['secret','mythique','légendaire','legendaire','rare','uncommun','uncommon','commun'];
      const sorted = [...imageCards].sort((a, b) => {
        const ra = (a.dataset.rarity || '').toLowerCase();
        const rb = (b.dataset.rarity || '').toLowerCase();
        return order.indexOf(ra) - order.indexOf(rb);
      });
      sorted.forEach(el => container.appendChild(el));
    });
  }

  if (sortPriceAsc) {
    sortPriceAsc.addEventListener('click', () => {
      const sorted = [...imageCards].sort((a, b) => parsePrice(a.dataset.price) - parsePrice(b.dataset.price));
      sorted.forEach(el => container.appendChild(el));
    });
  }

  if (sortPriceDesc) {
    sortPriceDesc.addEventListener('click', () => {
      const sorted = [...imageCards].sort((a, b) => parsePrice(b.dataset.price) - parsePrice(a.dataset.price));
      sorted.forEach(el => container.appendChild(el));
    });
  }
})();
