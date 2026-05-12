/* ==========================================
   gallery.js — Slideshow + language toggle
   for project gallery pages
   ========================================== */

// Language — mirrors main.js but scoped to gallery pages
let currentLang = 'pt';

function applyTranslations(lang) {
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = translations[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = lang === 'pt' ? 'EN' : 'PT';
  });
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyTranslations(currentLang === 'pt' ? 'en' : 'pt');
});

const saved = localStorage.getItem('portfolio_lang');
if (saved && saved !== 'pt') applyTranslations(saved);

// Slideshow
const slideshow = document.querySelector('.slideshow');
const slides    = Array.from(document.querySelectorAll('.slide'));
const dots      = Array.from(document.querySelectorAll('.dot'));
const counter   = document.querySelector('.slide-counter');

if (slides.length <= 1) slideshow.classList.add('single');

let current = 0;

function updateCounter() {
  if (counter) counter.textContent = `${current + 1} / ${slides.length}`;
}

function goTo(n) {
  slides[current].classList.remove('active');
  if (dots[current]) dots[current].classList.remove('active');
  current = ((n % slides.length) + slides.length) % slides.length;
  slides[current].classList.add('active');
  if (dots[current]) dots[current].classList.add('active');
  updateCounter();
}

document.querySelector('.slide-prev')?.addEventListener('click', () => goTo(current - 1));
document.querySelector('.slide-next')?.addEventListener('click', () => goTo(current + 1));
dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft')  goTo(current - 1);
  if (e.key === 'ArrowRight') goTo(current + 1);
});

// Touch / swipe
let touchX = 0;
document.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
document.addEventListener('touchend',   e => {
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) goTo(current + (dx < 0 ? 1 : -1));
}, { passive: true });

updateCounter();
