/**
 * Pedido guiado em etapas: uma pergunta por vez, barra de progresso,
 * avanço automático ao escolher e resumo final que abre o WhatsApp.
 *
 * Sem JavaScript, todas as perguntas aparecem juntas (nada fica escondido).
 */
const WA = 'https://wa.me/5537933001940?text=';

export function initBriefing(form: HTMLFormElement): () => void {
  const steps = Array.from(form.querySelectorAll<HTMLElement>('.brief-q'));
  const bar = form.querySelector<HTMLElement>('.brief-bar span');
  const counter = form.querySelector<HTMLElement>('.brief-count');
  const back = form.querySelector<HTMLButtonElement>('.brief-back');
  const next = form.querySelector<HTMLButtonElement>('.brief-next');
  const preview = form.querySelector<HTMLElement>('.brief-preview pre');
  const city = form.querySelector<HTMLInputElement>('#brief-cidade');
  let atual = 0;
  let timer: number | undefined;

  const valor = (name: string) => (form.querySelector<HTMLInputElement>(`input[name="${name}"]:checked`)?.value ?? '');
  const mensagem = () => [
    'Olá, Bruna! Quero um site para o meu negócio.',
    valor('negocio') && `• Negócio: ${valor('negocio')}`,
    valor('hoje') && `• Hoje eu tenho: ${valor('hoje')}`,
    valor('objetivo') && `• Quero que o site ajude a: ${valor('objetivo').toLowerCase()}`,
    city?.value.trim() && `• Cidade: ${city.value.trim()}`,
  ].filter(Boolean).join('\n');

  const respondida = (i: number) => {
    const name = steps[i]?.dataset.name;
    return name ? Boolean(valor(name)) : true;
  };

  function mostrar(i: number, focar = true) {
    atual = Math.max(0, Math.min(steps.length - 1, i));
    steps.forEach((s, j) => {
      const on = j === atual;
      s.classList.toggle('is-active', on);
      s.hidden = !on;
      s.classList.toggle('from-back', j < atual);
    });
    if (bar) bar.style.transform = `scaleX(${(atual + 1) / steps.length})`;
    if (counter) counter.textContent = `${atual + 1} de ${steps.length}`;
    if (back) back.hidden = atual === 0;
    const ultima = atual === steps.length - 1;
    if (next) { next.hidden = ultima; next.disabled = !respondida(atual); }
    if (preview) preview.textContent = mensagem();
    if (focar) {
      const alvo = steps[atual].querySelector<HTMLElement>('input:checked, input');
      alvo?.focus({ preventScroll: true });
    }
  }

  function aoMudar(e: Event) {
    const t = e.target as HTMLInputElement;
    if (t.type === 'radio') {
      form.querySelectorAll<HTMLInputElement>(`input[name="${t.name}"]`).forEach(r => r.closest('.opt')?.classList.toggle('is-on', r.checked));
      if (next) next.disabled = false;
      // Avança sozinho, com uma pausa curta para a escolha ficar visível
      window.clearTimeout(timer);
      timer = window.setTimeout(() => mostrar(atual + 1), 320);
    }
    if (preview) preview.textContent = mensagem();
  }

  const aoDigitar = () => { if (preview) preview.textContent = mensagem(); };
  const aoEnviar = (e: Event) => {
    e.preventDefault();
    if (atual < steps.length - 1) { mostrar(atual + 1); return; }
    const a = document.createElement('a');
    a.href = WA + encodeURIComponent(mensagem());
    a.target = '_blank'; a.rel = 'noopener noreferrer';
    document.body.appendChild(a); a.click(); a.remove();
  };
  const voltar = () => mostrar(atual - 1);
  const avancar = () => mostrar(atual + 1);

  form.classList.add('is-stepper');
  form.addEventListener('change', aoMudar);
  city?.addEventListener('input', aoDigitar);
  form.addEventListener('submit', aoEnviar);
  back?.addEventListener('click', voltar);
  next?.addEventListener('click', avancar);
  mostrar(0, false);

  return () => {
    window.clearTimeout(timer);
    form.classList.remove('is-stepper');
    steps.forEach(s => { s.hidden = false; });
    form.removeEventListener('change', aoMudar);
    city?.removeEventListener('input', aoDigitar);
    form.removeEventListener('submit', aoEnviar);
    back?.removeEventListener('click', voltar);
    next?.removeEventListener('click', avancar);
  };
}
