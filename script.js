const contactForm = document.querySelector('#contact-form');

// Formspree handles the contact form directly. Keeping the submission native
// avoids client-side CORS issues and ensures the request reaches the form endpoint.
contactForm?.addEventListener('submit', () => {
  const button = contactForm.querySelector('button');
  if (button) {
    button.disabled = true;
    button.textContent = 'Odesílám…';
  }
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