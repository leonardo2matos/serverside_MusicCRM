// JavaScript para o Carrossel com Auto-Slide
let currentSlide = 0;
let autoSlideInterval;

function updateSlidePosition() {
    const carousel = document.querySelector('.carousel');
    const slideWidth = document.querySelector('.release-item').offsetWidth;
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.release-item').length;
    const visibleSlides = getVisibleSlides();

    if (currentSlide < totalSlides - visibleSlides) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }

    updateSlidePosition();
    resetAutoSlide();
}

function prevSlide() {
    const totalSlides = document.querySelectorAll('.release-item').length;
    const visibleSlides = getVisibleSlides();

    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - visibleSlides;
    }

    updateSlidePosition();
    resetAutoSlide();
}

function getVisibleSlides() {
    const slideWidth = document.querySelector('.release-item').offsetWidth;
    return Math.floor(document.querySelector('.release-gallery').offsetWidth / slideWidth);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000); // Muda de slide a cada 5 segundos
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
}

document.addEventListener('DOMContentLoaded', function () {
    startAutoSlide();
    window.addEventListener('resize', updateSlidePosition); // Atualiza a posição ao redimensionar a janela
});
