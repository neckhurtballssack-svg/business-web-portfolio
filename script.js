const contactForm = document.querySelector('#contact-form');

// Formspree handles the contact form directly.
contactForm?.addEventListener('submit', () => {
  const button = contactForm.querySelector('button');
  if (button) {
    button.disabled = true;
    button.textContent = 'Odesílám…';
  }
});

// Guide visitors from the hero CTA to the contact form with a small visual cue.
document.querySelector('a[href="#kontakt"].primary')?.addEventListener('click', (event) => {
  const target = document.querySelector('#kontakt');
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  const firstField = target.querySelector('input');
  const formButton = target.querySelector('button');
  target.classList.remove('contact-focus');
  void target.offsetWidth;
  target.classList.add('contact-focus');
  setTimeout(() => firstField?.focus({ preventScroll: true }), 850);
  setTimeout(() => formButton?.classList.add('attention'), 650);
  setTimeout(() => formButton?.classList.remove('attention'), 2400);
});

document.querySelector('.menu')?.addEventListener('click', () => {
  const nav = document.querySelector('nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.position = 'absolute';
  nav.style.top = '78px';
  nav.style.right = '6vw';
  nav.style.padding = '18px';
  nav.style.background = '#f7f6f2';
  nav.style.border = '1px solid #ddd';
});