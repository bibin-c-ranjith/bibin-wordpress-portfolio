const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
const setMenu = open => {
  menu.setAttribute('aria-expanded', String(open));
  links.classList.toggle('open', open);
};
menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menu.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('nav')) setMenu(false);
});
const desktop = matchMedia('(min-width: 921px)');
desktop.addEventListener('change', () => setMenu(false));
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window) {
  const revealElements = document.querySelectorAll('.section-head, .about-grid, .stats, .project, .performance-item, .skill-group, .two-col, .experience, .process > div');
  if (!reduceMotion.matches) {
    const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        reveal.unobserve(entry.target);
      }
    }), { threshold: 0.06, rootMargin: '0px 0px -15px 0px' });
    revealElements.forEach(element => {
      element.classList.add('reveal-ready');
      reveal.observe(element);
    });
    reduceMotion.addEventListener('change', () => {
      if (reduceMotion.matches) {
        reveal.disconnect();
        revealElements.forEach(element => element.classList.add('is-visible'));
      }
    });
    // Anchor navigation must reveal its content immediately.
    document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
      const target = document.getElementById(link.hash.slice(1));
      if (target) {
        target.classList.add('is-visible');
        target.querySelectorAll('.reveal-ready').forEach(element => element.classList.add('is-visible'));
      }
    }));
  }
  const navLinks = Array.from(links.querySelectorAll('a'));
  const sections = navLinks.map(link => document.querySelector(link.hash)).filter(Boolean);
  const activeSection = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) navLinks.forEach(link => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-12% 0px -65% 0px', threshold: 0 });
  sections.forEach(section => activeSection.observe(section));
}
