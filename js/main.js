/* ==========================================
   main.js — Site interactions
   Language toggle · Nav behavior · Project filter · Animations
   ========================================== */

/* ==========================================
   Language System
   ========================================== */
let currentLang = 'pt';

function applyTranslations(lang) {
  // Update the HTML lang attribute (used by browsers and screen readers)
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  // Find every element with data-i18n and update its text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const value = translations[lang][key];
    if (value !== undefined) el.innerHTML = value;
  });

  // Flip the toggle button label to show the OTHER language
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = lang === 'pt' ? 'EN' : 'PT';
  });

  currentLang = lang;

  // Remember the user's choice so it persists on page reload
  localStorage.setItem('portfolio_lang', lang);
}

function toggleLanguage() {
  applyTranslations(currentLang === 'pt' ? 'en' : 'pt');
}

document.getElementById('langToggle').addEventListener('click', toggleLanguage);
document.getElementById('langToggleMobile').addEventListener('click', toggleLanguage);

// On load: restore saved language (defaults to 'pt' if none saved)
const saved = localStorage.getItem('portfolio_lang');
if (saved && saved !== 'pt') applyTranslations(saved);

/* ==========================================
   Navigation — Scroll behavior
   Nav becomes solid when user scrolls down
   ========================================== */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ==========================================
   Navigation — Active link highlight
   The nav link for the current section turns bright
   ========================================== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

/* ==========================================
   Navigation — Mobile hamburger menu
   ========================================== */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu when any link inside it is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ==========================================
   Project Filter
   Clicking a filter button shows only cards
   whose data-category matches.
   ========================================== */
const filterBtns  = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    // Mark this button active, remove active from others
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Show cards that match, hide the rest
    projectCards.forEach(card => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !matches);
    });
  });
});

/* ==========================================
   Scroll-in Animations (IntersectionObserver)
   Elements with class .fade-up animate in
   when they enter the visible area of the page.
   ========================================== */
const fadeEls = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate once, not every time
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach(el => observer.observe(el));

/* ==========================================
   Smooth scroll for anchor links
   ========================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
