let currentSlide = 0;
let slideInterval = setInterval(() => moveSlide(1), 3000); // 自动每3秒滑动到下一张图片

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    currentSlide += direction;
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// 为按钮添加清除定时器的功能，当用户手动切换时
document.querySelector('.prev').addEventListener('click', () => {
    moveSlide(-1);
    resetInterval();
});
document.querySelector('.next').addEventListener('click', () => {
    moveSlide(1);
    resetInterval();
});

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => moveSlide(1), 3000); // 重置定时器，继续自动滑动
}
