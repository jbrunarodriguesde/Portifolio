'use client';
import { useState } from 'react';

/** Copia o e-mail. Funciona mesmo sem app de e-mail instalado no computador. */
export default function CopyEmail({ email, className = '' }: { email: string; className?: string }) {
  const [estado, setEstado] = useState<'pronto' | 'copiado' | 'selecione'>('pronto');

  async function copiar() {
    try {
      await navigator.clipboard.writeText(email);
      setEstado('copiado');
    } catch {
      // Sem acesso à área de transferência: seleciona o texto para Ctrl+C.
      const alvo = document.getElementById('email-contato');
      if (alvo) {
        const r = document.createRange();
        r.selectNodeContents(alvo);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(r);
      }
      setEstado('selecione');
    }
    setTimeout(() => setEstado('pronto'), 2500);
  }

  return (
    <button type="button" onClick={copiar} className={className}>
      <span aria-live="polite">
        {estado === 'copiado' ? 'E-mail copiado' : estado === 'selecione' ? 'Selecionado, use Ctrl+C' : 'Copiar e-mail'}
      </span>
    </button>
  );
}
