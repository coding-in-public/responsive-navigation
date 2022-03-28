const navBtn = document.querySelector('#menu-btn');
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');

navBtn.addEventListener('click', () => {
  navLinks.classList.add('activated');
  const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
  navBtn.setAttribute('aria-expanded', !isExpanded);
  !isExpanded && nav.classList.add('active');
})

//INTERSECTION OBSERVER

const navObs = new IntersectionObserver((entries) => nav.classList.toggle('active', !entries[0].isIntersecting)
, {threshold: .85})

navObs.observe(document.querySelector('header'));

const fadeUpObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('faded');
      fadeUpObserver.unobserve(entry.target)
    }
  })
}, {
  rootMargin: '-15%'
})

document.querySelectorAll('.fade-up').forEach(el => {
  fadeUpObserver.observe(el);
})
