// Data de início: 06 de Setembro de 2025
const startDate = new Date('2025-09-06T00:00:00').getTime();

// Listas de imagens
const couplePhotos = [
    'images/Carol.jpg',
    'images/carol2.jpg',
    'images/Carol3.jpg',
    'images/Carol4.jpg',
    'images/Carol5.jpg',
    'images/Carol6.jpg',
    'images/Carol7.jpg',
];

const instagramCollagen = [
    'images/Captura de tela 2026-01-14 182415.png',
    'images/Captura de tela 2026-01-14 182432.png',
    'images/Captura de tela 2026-01-14 182441.png',
    'images/Captura de tela 2026-01-14 182449.png',
    'images/Captura de tela 2026-01-14 182516.png',
];

// Estado dos carrosséis
let currentPhotoIndex = 0;
let currentCollagenIndex = 0;

// Elementos do DOM
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const mainPhoto = document.getElementById('main-photo');
const photoCounter = document.getElementById('photo-counter');
const thumbnailGallery = document.getElementById('thumbnail-gallery');

const mainCollagen = document.getElementById('main-collagen');
const collagenCounter = document.getElementById('collagen-counter');
const collagenThumbnailGallery = document.getElementById('collagen-thumbnail-gallery');

// Função do Contador
function updateCounter() {
    const now = new Date().getTime();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
}

// Lógica do Carrossel de Fotos
function updatePhoto(index) {
    currentPhotoIndex = index;
    mainPhoto.style.opacity = 0;
    
    setTimeout(() => {
        mainPhoto.src = couplePhotos[currentPhotoIndex];
        mainPhoto.style.opacity = 1;
        photoCounter.textContent = `${currentPhotoIndex + 1} / ${couplePhotos.length}`;
        
        // Atualizar thumbnails ativas
        document.querySelectorAll('.thumb-btn').forEach((btn, i) => {
            if (i === currentPhotoIndex) btn.classList.add('active');
            else btn.classList.remove('active');
        });
    }, 200);
}

function nextPhoto() {
    let next = (currentPhotoIndex + 1) % couplePhotos.length;
    updatePhoto(next);
}

function prevPhoto() {
    let prev = (currentPhotoIndex - 1 + couplePhotos.length) % couplePhotos.length;
    updatePhoto(prev);
}

// Lógica do Carrossel de Colagens
function updateCollagen(index) {
    currentCollagenIndex = index;
    mainCollagen.style.opacity = 0;
    
    setTimeout(() => {
        mainCollagen.src = instagramCollagen[currentCollagenIndex];
        mainCollagen.style.opacity = 1;
        collagenCounter.textContent = `${currentCollagenIndex + 1} / ${instagramCollagen.length}`;
        
        // Atualizar thumbnails ativas
        collagenThumbnailGallery.querySelectorAll('.thumb-btn').forEach((btn, i) => {
            if (i === currentCollagenIndex) btn.classList.add('active');
            else btn.classList.remove('active');
        });
    }, 200);
}

function nextCollagen() {
    let next = (currentCollagenIndex + 1) % instagramCollagen.length;
    updateCollagen(next);
}

function prevCollagen() {
    let prev = (currentCollagenIndex - 1 + instagramCollagen.length) % instagramCollagen.length;
    updateCollagen(prev);
}

// Inicializar Thumbnails
function initThumbnails() {
    // Thumbnails de Fotos
    couplePhotos.forEach((photo, index) => {
        const btn = document.createElement('button');
        btn.className = `thumb-btn ${index === 0 ? 'active' : ''}`;
        btn.innerHTML = `<img src="${photo}" alt="Thumbnail ${index + 1}">`;
        btn.onclick = () => updatePhoto(index);
        thumbnailGallery.appendChild(btn);
    });

    // Thumbnails de Colagens
    instagramCollagen.forEach((photo, index) => {
        const btn = document.createElement('button');
        btn.className = `thumb-btn ${index === 0 ? 'active' : ''}`;
        btn.innerHTML = `<img src="${photo}" alt="Colagem ${index + 1}">`;
        btn.onclick = () => updateCollagen(index);
        collagenThumbnailGallery.appendChild(btn);
    });
}

// Event Listeners
document.getElementById('next-photo').onclick = nextPhoto;
document.getElementById('prev-photo').onclick = prevPhoto;
document.getElementById('next-collagen').onclick = nextCollagen;
document.getElementById('prev-collagen').onclick = prevCollagen;

// Auto-play
setInterval(nextPhoto, 5000);
setInterval(nextCollagen, 6000);

// Iniciar
updateCounter();
setInterval(updateCounter, 1000);
initThumbnails();
//flor
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };