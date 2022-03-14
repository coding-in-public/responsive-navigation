const navBtn = document.querySelector('#menu-btn');
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');

navBtn.addEventListener('click', () => {
  navLinks.classList.add('activated');
  const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
  navBtn.setAttribute('aria-expanded', !isExpanded);
  !isExpanded && nav.classList.add('active');
})

// INTERSECTION OBSERVERS
const navObserver = new IntersectionObserver((watchEntry) => {
  !watchEntry[0].isIntersecting ? nav.classList.add('active') : nav.classList.remove('active');
}, {threshold: 0.85});

navObserver.observe(document.querySelector('header'));

const fadeUpObserver = new IntersectionObserver((elsToWatch) => {
  elsToWatch.forEach((el) => {
    if (el.isIntersecting) {
      el.target.classList.add('faded');
      fadeUpObserver.unobserve(el.target);
    }
  });
}, {threshold: 0.25});

document.querySelectorAll('.fade-up').forEach((item) => {
  fadeUpObserver.observe(item);
});
