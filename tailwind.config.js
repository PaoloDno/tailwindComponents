/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
        }
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          'button-accent': 'var(--color-button-accent)',
          'button-accent-hover': 'var(--color-button-hover)',
          'button-accent-muted': 'var(--color-button-muted)',
        }
      },
      borderColor: {
        skin: {
          base: 'var(--color-border-base)',
          muted: 'var(--color-border-muted)',
        }
      },
      gradientColorStops: {
        skin: {
          start: 'var(--color-gradient-start)',
          end: 'var(--color-gradient-end)'
        }
      }
    },
  },
  plugins: [],
}

