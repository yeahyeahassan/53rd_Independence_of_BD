const textOverlay = document.querySelector('.text-overlay');

textOverlay.addEventListener('mouseenter', () => {
    textOverlay.style.textShadow = '0 0 20px #e63946';
});

textOverlay.addEventListener('mouseleave', () => {
    textOverlay.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.7)';
});
