document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Děkujeme! Toto je ukázkový formulář.');
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