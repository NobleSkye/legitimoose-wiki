import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'moose-primary': '#4A2C1C',
        'moose-secondary': '#8B5E3C',
        'moose-accent': '#D4A373',
        'moose-light': '#F5E6D3',
        'moose-dark': '#2C1810'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif']
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.moose-dark'),
            a: {
              color: theme('colors.moose-secondary'),
              '&:hover': {
                color: theme('colors.moose-accent'),
              },
            },
            h1: {
              color: theme('colors.moose-dark'),
              fontFamily: theme('fontFamily.display').join(', '),
            },
            h2: {
              color: theme('colors.moose-dark'),
              fontFamily: theme('fontFamily.display').join(', '),
            },
            h3: {
              color: theme('colors.moose-dark'),
              fontFamily: theme('fontFamily.display').join(', '),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
}