import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx,html}'],
  daisyui: {
    themes: ['dracula'],
    base: true,
  },
  plugins: [daisyui],
};
