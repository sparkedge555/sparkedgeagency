/* ============================================================
   SparkEdge — Main JavaScript
   ============================================================ */

/* ── Scroll progress bar ── */
function updateScrollProgress() {
  const el = document.getElementById('scroll-progress');
  if (!el) return;
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  el.style.width = (scrollTop / scrollHeight * 100) + '%';
}

/* ── Navbar scroll state ── */
function handleNavbarScroll() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 40);
}

/* ── Active nav link ── */
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  links.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current || a.getAttribute('href') === current + '.html');
  });
}

window.addEventListener('scroll', () => {
  updateScrollProgress();
  handleNavbarScroll();
  updateActiveNavLink();
  revealOnScroll();
}, { passive: true });

/* ── Mobile menu ── */
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── Logo spark effect ── */
function initLogoSpark() {
  const logo = document.getElementById('logo');
  if (!logo) return;
  const container = logo.querySelector('.spark-container');
  if (!container) return;

  function createSparks() {
    for (let i = 0; i < 12; i++) {
      const spark = document.createElement('span');
      spark.classList.add('spark');
      const angle = (i / 12) * Math.PI * 2;
      const dist = 40 + Math.random() * 40;
      spark.style.setProperty('--x', Math.cos(angle) * dist + 'px');
      spark.style.setProperty('--y', Math.sin(angle) * dist + 'px');
      spark.style.animationDelay = (Math.random() * 0.3) + 's';
      container.appendChild(spark);
      setTimeout(() => spark.remove(), 1500);
    }
  }

  logo.addEventListener('mouseenter', createSparks);
  logo.addEventListener('touchstart', createSparks, { passive: true });
}

/* ── Hero word rotate ── */
function initWordRotate() {
  const track = document.getElementById("wordTrack");
  const words = document.querySelectorAll(".word");

  if (!track || !words.length) return;

  let index = 0;
  const step = 1.2;
  const intervalTime = 500; // 🔥 0.5 sec
  const transitionTime = 250; // fast animation

  track.style.transform = "translateY(0)";
  track.style.transition = "none";

  setInterval(() => {
    index++;

    track.style.transition = "transform 0.25s ease-out";
    track.style.transform = `translateY(-${index * step}em)`;

    // smooth loop reset
    if (index === words.length - 1) {
      setTimeout(() => {
        track.style.transition = "none";
        track.style.transform = "translateY(0)";
        index = 0;
      }, transitionTime);
    }

  }, intervalTime);
}

/* ── Counter animation ── */
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target, parseInt(entry.target.dataset.count));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* ── Scroll reveal ── */
function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) el.classList.add('visible');
  });
}

/* ── FAQ accordion ── */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ── Smooth anchor scroll ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ── Cursor glow effect (desktop only) ── */
function initCursorGlow() {
  if (window.innerWidth < 1024) return;
  const glow = document.createElement('div');
  glow.style.cssText = `
    position:fixed; width:400px; height:400px; border-radius:50%;
    background:radial-gradient(circle, rgba(252,101,58,0.06), transparent 70%);
    pointer-events:none; transform:translate(-50%,-50%); z-index:0;
    transition:opacity 0.3s ease;
  `;
  document.body.appendChild(glow);

  window.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  }, { passive: true });
}

/* ── Init all ── */
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initLogoSpark();
  initWordRotate();
  initCounters();
  initFAQ();
  initSmoothScroll();
  initCursorGlow();
  revealOnScroll(); // initial pass
});
