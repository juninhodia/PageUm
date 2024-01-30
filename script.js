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

// Armazene os elementos dos botões
const previousButton = document.querySelector(".button-previous");
const nextButton = document.querySelector(".button-next");

// Armazene os elementos da imagem e do texto
const image = document.querySelector(".image");
const productName = document.querySelector(".product-name");
const productPrice = document.querySelector(".product-price");

// Armazene o índice atual do produto
let currentIndex = 0;

// Eventos de clique nos botões
previousButton.addEventListener("click", () => {
  // Decrementa o índice atual
  currentIndex--;

  // Verifica se o índice atual está fora do intervalo
  if (currentIndex < 0) {
    // Reinicia o índice para o último produto
    currentIndex = 4;
  }

  // Atualiza os elementos da imagem e do texto
  updateElements();
});

nextButton.addEventListener("click", () => {
  // Incrementa o índice atual
  currentIndex++;

  // Verifica se o índice atual está fora do intervalo
  if (currentIndex > 4) {
    // Reinicia o índice para o primeiro produto
    currentIndex = 0;
  }

  // Atualiza os elementos da imagem e do texto
  updateElements();
});

// Função para atualizar os elementos da imagem e do texto
function updateElements() {
  // Obtém os dados do produto atual
  const productData = products[currentIndex];

  // Atualiza a imagem
  image.src = productData.image;

  // Atualiza o nome do produto
  productName.textContent = productData.name;

  // Atualiza o preço do produto
  productPrice.textContent = productData.price;
}

// Dados dos produtos
const products = [
  {
    image: "product1.jpg",
    name: "Product 1",
    price: "R$ 100,00",
  },
  {
    image: "product2.jpg",
    name: "Product 2",
    price: "R$ 200,00",
  },
  {
    image: "product3.jpg",
    name: "Product 3",
    price: "R$ 300,00",
  },
  {
    image: "product4.jpg",
    name: "Product 4",
    price: "R$ 400,00",
  },
  {
    image: "product5.jpg",
    name: "Product 5",
    price: "R$ 500,00",
  },
];
