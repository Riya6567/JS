const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        lightbox.style.display = 'block';
        lightboxImg.src = e.target.src;
    }
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});