// Mobile navigation
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuButton.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    if (menuButton) {
      menuButton.setAttribute('aria-label', 'Open navigation');
      menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });
});

// Dark/light theme toggle, remembered for this browser session/device.
const themeButton = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') document.body.classList.add('light-mode');
updateThemeIcon();
themeButton?.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  localStorage.setItem('portfolio-theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
  updateThemeIcon();
});
function updateThemeIcon() {
  if (!themeButton) return;
  themeButton.innerHTML = document.body.classList.contains('light-mode')
    ? '<i class="fa-regular fa-sun"></i>'
    : '<i class="fa-regular fa-moon"></i>';
  themeButton.setAttribute('aria-label', document.body.classList.contains('light-mode') ? 'Switch to dark theme' : 'Switch to light theme');
}

// Rotating role text
const roles = ['Java Developer', 'Spring Boot Developer', 'Full Stack Developer'];
const roleText = document.querySelector('#role-text');
let roleIndex = 0;
if (roleText) {
  window.setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleText.classList.add('role-changing');
    roleText.textContent = roles[roleIndex];
    window.setTimeout(() => roleText.classList.remove('role-changing'), 220);
  }, 2400);
}

// Reveal sections as they enter the viewport.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

// Highlight the current navigation section.
const sections = document.querySelectorAll('main section[id]');
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav-links a').forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach((section) => sectionObserver.observe(section));
}

// Keep the footer year current.
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
