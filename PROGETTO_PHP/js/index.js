
/* mostra i dettagli del libro */
function toggleDetails(button) {
  const details = button.closest('.card-body').querySelector('.details');
  const icon = button.querySelector('.bi');
  const isVisible = details.classList.contains('show');

  details.classList.toggle('show');
  button.setAttribute('aria-expanded', String(!isVisible));
  icon.classList.toggle('bi-chevron-up', !isVisible);
  icon.classList.toggle('bi-chevron-down', isVisible);
}

/* Animazione “smooth scroll” tra le sezioni */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/*Espansione automatica di una sola card per volta*/
function toggleDetails(button) {
  const details = button.closest('.card-body').querySelector('.details');
  const icon = button.querySelector('.bi');
  const allDetails = document.querySelectorAll('.details');

  // Chiudi tutti gli altri
  allDetails.forEach(d => {
    if (d !== details) {
      d.classList.remove('show');
      const otherBtn = d.closest('.card-body').querySelector('[aria-expanded]');
      if (otherBtn) {
        otherBtn.setAttribute('aria-expanded', 'false');
        const otherIcon = otherBtn.querySelector('.bi');
        otherIcon.classList.add('bi-chevron-down');
        otherIcon.classList.remove('bi-chevron-up');
      }
    }
  });

  // Apri/chiudi quello cliccato
  const isVisible = details.classList.contains('show');
  details.classList.toggle('show');
  button.setAttribute('aria-expanded', String(!isVisible));
  icon.classList.toggle('bi-chevron-up', !isVisible);
  icon.classList.toggle('bi-chevron-down', isVisible);
}
