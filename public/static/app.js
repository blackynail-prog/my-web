// ===========================
// Mobile nav CTA visibility
// ===========================
const mobileCta = document.getElementById('mobile-nav-cta');
function updateMobileCta() {
  if (window.innerWidth <= 768) {
    mobileCta.style.display = 'flex';
    const desktopNav = document.querySelector('.nav-links');
    if (desktopNav) desktopNav.style.display = 'none';
  } else {
    mobileCta.style.display = 'none';
    const desktopNav = document.querySelector('.nav-links');
    if (desktopNav) desktopNav.style.display = 'flex';
  }
}
updateMobileCta();
window.addEventListener('resize', updateMobileCta);

// ===========================
// Scroll animations (Intersection Observer)
// ===========================
const fadeEls = document.querySelectorAll('.fade-up');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
fadeEls.forEach(el => io.observe(el));

// ===========================
// Floating bar: show after hero
// ===========================
const hero = document.querySelector('.hero');
const floatBar = document.getElementById('floatBar');
if (hero && floatBar) {
  const heroObs = new IntersectionObserver(([e]) => {
    floatBar.classList.toggle('visible', !e.isIntersecting);
  }, { threshold: 0 });
  heroObs.observe(hero);
}

// ===========================
// Curriculum accordion
// ===========================
document.querySelectorAll('[data-curr] .curr-cat-header').forEach(header => {
  header.addEventListener('click', () => {
    const cat = header.closest('[data-curr]');
    const isOpen = cat.classList.contains('open');

    // 다른 항목 닫기 (한 번에 하나만 열림)
    document.querySelectorAll('[data-curr]').forEach(c => {
      c.classList.remove('open');
      c.querySelector('.curr-cat-header').setAttribute('aria-expanded', 'false');
    });

    // 클릭한 항목 토글
    if (!isOpen) {
      cat.classList.add('open');
      header.setAttribute('aria-expanded', 'true');
    }
  });
});

// ===========================
// Scarcity bar animation
// ===========================
const scarcityFill = document.getElementById('scarcity-fill');
const scarcityWrap = document.querySelector('.scarcity-wrap');
if (scarcityFill && scarcityWrap) {
  const scarcityObs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) {
      scarcityFill.style.width = '78%';
      scarcityObs.unobserve(e.target);
      let pct = 78;
      const interval = setInterval(() => {
        pct += 0.1;
        if (pct >= 82) { clearInterval(interval); return; }
        scarcityFill.style.width = pct + '%';
      }, 400);
    }
  }, { threshold: 0.5 });
  scarcityObs.observe(scarcityWrap);
}

// ===========================
// Smooth scroll for anchor links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// ===========================
// Midreview: 지표 바 애니메이션 (스크롤 진입 시)
// ===========================
const midBars = document.querySelectorAll('.midreview-bar');
if (midBars.length) {
  const barObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('animated');
        barObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  midBars.forEach(bar => barObs.observe(bar));
}
