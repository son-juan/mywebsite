// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Smooth scroll
document.querySelectorAll('.nav-menu a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    navMenu.classList.remove('open');
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});