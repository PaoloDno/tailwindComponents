/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this based on your project structure
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          primary: withOpacity('--color-text-primary'),
          secondary: withOpacity('--color-text-secondary'),
          inverted: withOpacity('--color-text-inverted'),
        },
      },
      backgroundColor: {
        skin: {
          primary: withOpacity('--color-fill-primary'),
          secondary: withOpacity('--color-fill-secondary'),
          inverted: withOpacity('--color-fill-inverted'),
          'button-primary': withOpacity('--color-button-primary'),
          'button-secondary': withOpacity('--color-button-secondary'),
          'button-inverted': withOpacity('--color-button-inverted'),
        },
      },
      borderColor: {
        skin: {
          primary: withOpacity('--color-border-primary'),
          inverted: withOpacity('--color-border-inverted'),
        },
      },
      gradientColorStops: {
        skin: {
          start: withOpacity('--color-gradient-start'),
          end: withOpacity('--color-gradient-end'),
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

