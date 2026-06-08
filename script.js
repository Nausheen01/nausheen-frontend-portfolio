/* ══════════════════════════════════════════════════
   NAUSHEEN SAIFI – PORTFOLIO SCRIPT
   Handles: dark/light mode, typing effect, navbar,
            scroll reveal, hamburger, contact form
   ══════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────
   1. DARK / LIGHT THEME TOGGLE
   ───────────────────────────────────────────────── */
const html          = document.documentElement;
const themeToggle   = document.getElementById('themeToggle');

// On page load, apply saved preference
const savedTheme = localStorage.getItem('portfolioTheme') || 'dark';
html.setAttribute('data-theme', savedTheme);
if (savedTheme === 'light') document.body.classList.remove('dark');
else document.body.classList.add('dark');

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', next);
  // body class for Tailwind darkMode:'class'
  if (next === 'dark') document.body.classList.add('dark');
  else document.body.classList.remove('dark');

  localStorage.setItem('portfolioTheme', next);
});


/* ─────────────────────────────────────────────────
   2. TYPING EFFECT
   ───────────────────────────────────────────────── */
const phrases = [
  'pixel-perfect UIs.',
  'fast React apps.',
  'Next.js experiences.',
  'TypeScript solutions.',
  'accessible designs.',
];

let phraseIndex   = 0;
let charIndex     = 0;
let isDeleting    = false;
let typingTimeout;

const typedEl = document.getElementById('typedText');

function type() {
  if (!typedEl) return;

  const current = phrases[phraseIndex];

  if (!isDeleting) {
    // typing forward
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      // finished typing – pause then delete
      isDeleting = true;
      typingTimeout = setTimeout(type, 1800);
      return;
    }
  } else {
    // deleting
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  const speed = isDeleting ? 50 : 90;
  typingTimeout = setTimeout(type, speed);
}

// Start typing after hero reveal delay
setTimeout(type, 600);


/* ─────────────────────────────────────────────────
   3. NAVBAR – SCROLL & ACTIVE LINK
   ───────────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  // Scrolled state
  if (window.scrollY > 20) navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,.3)';
  else                     navbar.style.boxShadow = 'none';

  // Active section highlight
  const sections = document.querySelectorAll('section[id]');
  let current = '';

  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});


/* ─────────────────────────────────────────────────
   4. HAMBURGER / MOBILE MENU
   ───────────────────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);

  // Animate bars into X
  const bars = hamburger.querySelectorAll('span');
  if (isOpen) {
    bars[0].style.transform = 'translateY(7px) rotate(45deg)';
    bars[1].style.opacity   = '0';
    bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    bars[0].style.transform = '';
    bars[1].style.opacity   = '';
    bars[2].style.transform = '';
  }
});

// Called by onclick in HTML links
function closeMobile() {
  mobileMenu.classList.remove('open');
  const bars = hamburger.querySelectorAll('span');
  bars[0].style.transform = '';
  bars[1].style.opacity   = '';
  bars[2].style.transform = '';
}


/* ─────────────────────────────────────────────────
   5. SCROLL REVEAL – Intersection Observer
   ───────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

// Observe every .reveal element
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* ─────────────────────────────────────────────────
   6. CONTACT FORM (client-side validation)
   NOTE: Hook this up to Formspree / EmailJS for
   actual email delivery — see README.md for guide.
   ───────────────────────────────────────────────── */
function handleFormSubmit() {
  const name     = document.getElementById('name').value.trim();
  const email    = document.getElementById('email').value.trim();
  const message  = document.getElementById('message').value.trim();
  const feedback = document.getElementById('formFeedback');
  const btn      = document.getElementById('submitBtn');

  // Basic validation
  if (!name || !email || !message) {
    showFeedback(feedback, 'error', '⚠ Please fill in all fields.');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showFeedback(feedback, 'error', '⚠ Please enter a valid email address.');
    return;
  }

  // Simulate sending (replace with real EmailJS / Formspree call)
  btn.textContent   = 'Sending…';
  btn.style.opacity = '.7';
  btn.disabled      = true;

  setTimeout(() => {
    // ── OPTION A: Formspree (uncomment & replace YOUR_FORM_ID) ──
    // fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email, message }),
    // }).then(...);

    // For now: show success UI
    showFeedback(feedback, 'success', '✓ Message sent! I\'ll get back to you soon.');
    document.getElementById('name').value    = '';
    document.getElementById('email').value   = '';
    document.getElementById('message').value = '';
    btn.textContent   = 'Send Message';
    btn.style.opacity = '1';
    btn.disabled      = false;
  }, 1000);
}

function showFeedback(el, type, msg) {
  el.textContent = msg;
  el.className   = `form-feedback ${type}`;
  el.classList.remove('hidden');
  setTimeout(() => el.classList.add('hidden'), 5000);
}


/* ─────────────────────────────────────────────────
   7. SMOOTH ANCHOR SCROLL (with navbar offset)
   ───────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 72; // navbar height
    const top    = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});


/* ─────────────────────────────────────────────────
   8. CONSOLE EASTER EGG
   ───────────────────────────────────────────────── */
console.log('%c👋 Hey there, fellow dev! Like what you see?', 'color:#e8c97a;font-size:14px;font-weight:bold;');
console.log('%cCheck out github.com/YOUR_GITHUB_USERNAME', 'color:#8a8790;font-size:12px;');
