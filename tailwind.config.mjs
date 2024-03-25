/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export const content = ['./src/**/*.{js,ts,jsx,tsx,mdx,astro,html}'];
export const theme = {
  extend: {
    animation: {
      glitch: 'glitch 2s infinite',
    },
    colors: {
      bsod: '#000A5F',
      mainSilver: '#C5CBD3',
      mainPurple: '#695A88',
      textPurple: '#79689c',
      backgreen: '#A7AAAB',
      matteBlack: '#28282B',
      border: '#AAAAAA',
    },
    fontFamily: {
      firacode: ['Fira Code', 'monospace'],
      geist: ['Geist', 'sans-serif'],
      w95fa: ['w95fa', 'sans-serif'],
      sans: ['var(--font-geist-sans)'],
    },
  },
};
export const variants = [];
export const plugins = [];
