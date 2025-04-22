let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const newTransformValue = -currentIndex * 100; // Cada item ocupa 100% da largura
    document.querySelector('.carousel-wrapper').style.transform = `translateX(${newTransformValue}%)`;
}
