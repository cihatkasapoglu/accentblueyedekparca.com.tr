const urunler = [
    "accent-blue-bagaj-kapagi-cikma.JPEG",
    "accent-blue-bagaj-kapagi.JPEG"
];
const grid = document.getElementById('productsGrid');
urunler.forEach(urun => {
    const card = document.createElement('div');
    card.innerHTML = `<img src="images/${urun}" alt="${urun}" style="width:200px;">`;
    grid.appendChild(card);
});
