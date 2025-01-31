// alert("Site carregado com sucesso!");

// Obtém o botão de troca de modo e o corpo da página
const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

// Verifica o modo atual e altera ao clicar no botão
toggleButton.addEventListener('click', () => {
    body.classList.toggle('night-mode');
    
    // Altera o texto do botão dependendo do modo
    if (body.classList.contains('night-mode')) {
        toggleButton.textContent = 'Modo Claro';
    } else {
        toggleButton.textContent = 'Modo Noturno';
    }
});
// carrosel de imagens
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateCarousel() {
    const imageWidth = document.querySelector('.carousel img').clientWidth;
    const offset = -(currentIndex * imageWidth);
    carousel.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener('click', () => {
    const totalImages = document.querySelectorAll('.carousel img').length;
    currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    const totalImages = document.querySelectorAll('.carousel img').length;
    currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

// Responsividade: Ajustar o carrossel ao redimensionar a janela
window.addEventListener('resize', updateCarousel);
