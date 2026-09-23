document.querySelector('#contact-form')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector('button');
  const original = button.textContent;
  button.disabled = true;
  button.textContent = 'Odesílám…';
  try {
    const data = Object.fromEntries(new FormData(form).entries());
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || 'Chyba');
    form.reset();
    alert('Děkujeme! Poptávka byla odeslána. Ozveme se vám co nejdříve.');
  } catch (error) {
    alert('Poptávku se nepodařilo odeslat. Zkuste to prosím znovu.');
  } finally {
    button.disabled = false;
    button.textContent = original;
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