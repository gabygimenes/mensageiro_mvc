const resposta = await fetch('/mensagens', { cache: 'no-store' });
if (!resposta.ok) throw new Error('Não foi possível carregar mensagens.');
const mensagens = await resposta.json();
lista.replaceChildren();

const resposta = await fetch('/mensagens', {
  method: 'POST', headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ usuario: nome.value, texto: texto.value })
});
