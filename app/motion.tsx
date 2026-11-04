'use client';
import { useEffect } from 'react';
import { initMotion } from './lib-motion';

/** Animações GSAP + ScrollTrigger. A lógica está em lib-motion.ts. */
export default function Motion() {
  useEffect(() => initMotion(), []);
  return null;
}
