// ---------- Theme toggle ----------
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

const savedTheme = localStorage.getItem('theme')
  || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

// ---------- Mobile menu ----------
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---------- Active nav link on scroll ----------
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });

sections.forEach(section => navObserver.observe(section));

// ---------- Reveal on scroll ----------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---------- Back to top ----------
const backToTop = document.getElementById('backToTop');
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---------- Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Contact form validation ----------
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

const validators = {
  name: value => value.trim().length >= 2 || 'Ingresa tu nombre (mínimo 2 caracteres).',
  email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Ingresa un email válido.',
  message: value => value.trim().length >= 10 || 'Tu mensaje debe tener al menos 10 caracteres.',
};

function validateField(field) {
  const input = form[field];
  const errorEl = document.getElementById(`${field}Error`);
  const result = validators[field](input.value);
  const isValid = result === true;
  input.classList.toggle('invalid', !isValid);
  errorEl.textContent = isValid ? '' : result;
  return isValid;
}

['name', 'email', 'message'].forEach(field => {
  form[field].addEventListener('blur', () => validateField(field));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const results = ['name', 'email', 'message'].map(validateField);
  const allValid = results.every(Boolean);

  successMsg.hidden = !allValid;
  if (allValid) {
    form.reset();
  }
});
