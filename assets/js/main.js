const navToggle = document.querySelector('[data-nav-toggle]');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

document.querySelectorAll('.accordion-item').forEach((item) => {
  const trigger = item.querySelector('.accordion-trigger');
  if (!trigger) return;
  trigger.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

document.querySelectorAll('.js-cta-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const success = form.querySelector('.form-success');
    if (success) {
      success.hidden = false;
    }
  });
});
