const pages = document.querySelectorAll('.page');
let currentPage = 0;

const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function updatePages() {
  pages.forEach((page, index) => {
    if (index < currentPage) {
      page.style.transform = 'rotateY(-180deg)';
    } else if (index === currentPage) {
      page.style.transform = 'rotateY(0deg)';
    } else {
      page.style.transform = 'rotateY(180deg)';
    }
  });

  // Deshabilitar botones si estamos en el inicio o final
  prevButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage === pages.length - 1;
}

prevButton.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updatePages();
  }
});

nextButton.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePages();
  }
});

// Inicializar páginas al inicio
updatePages();
