'use client';
import { useEffect } from 'react';
import { initGlass } from './lib-glass';

/** Liquid Glass com refração. A lógica está em lib-glass.ts. */
export default function Glass() {
  useEffect(() => initGlass(), []);
  return null;
}
