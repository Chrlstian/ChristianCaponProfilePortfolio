
const profileImage = document.querySelector('.profile-image');
const lightboxOverlay = document.querySelector('.lightbox-overlay');
const closeButton = document.querySelector('.close-button');

profileImage.addEventListener('click', function() {
  lightboxOverlay.classList.add('active');
});

closeButton.addEventListener('click', function() {
  lightboxOverlay.classList.remove('active');
});