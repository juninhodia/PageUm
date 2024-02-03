document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    let currentIndex = 0;
    const slides = carousel.children;
    const totalSlides = slides.length;

    function moveCarousel() {
        if (currentIndex >= totalSlides - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(moveCarousel, 3000); // Muda a imagem a cada 3 segundos
});

document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector('.carrosselDeProdutos');
  let scrollAmount = 0;

  document.querySelector('.carousel-button-right').addEventListener('click', () => {
      scrollAmount += carousel.offsetWidth / 2; // Move metade da largura do carrossel
      carousel.scrollLeft = scrollAmount;
  });

  document.querySelector('.carousel-button-left').addEventListener('click', () => {
      scrollAmount -= carousel.offsetWidth / 2; // Move metade da largura do carrossel
      carousel.scrollLeft = scrollAmount;
  });
});
