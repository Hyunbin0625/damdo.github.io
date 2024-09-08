const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const totalSlides = slides.length;

function showNextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0; // 마지막 슬라이드 후 첫 슬라이드로
    }
    const offset = -currentIndex * 100; // 각 슬라이드의 100%만큼 이동
    slider.style.transform = `translateX(${offset}%)`;
}

// 5초마다 슬라이드 전환
setInterval(showNextSlide, 5000);
