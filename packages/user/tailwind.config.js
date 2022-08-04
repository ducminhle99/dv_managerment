module.exports = {
  important: true,
  content: ['./src/modules/**/*.{js,ts,jsx,tsx}', '../shared/common/**/*.{js,ts,jsx,tsx}'],
  media: false,
  theme: {
    extend: {
      colors: {
        while: {
          'while-1': '#FFFFFF',
          'while-2': '#cccccc',
        },
        primary: '#1890ff',
        danger: '#FF3737',
        'primary-strong': '#cb6669',
        'primary-light': '#ffeff0',
        'primary-strong-100': '#FE9699',
        'primary-light-100': '#FCEAEA',
        'primary-light-200': '#ffb8ba',
        'primary-light-300': '#ffb1b3',
        'primary-light-400': '#FED7D9',
        'primary-light-500': '#FFEFF0',
        'primary-light-600': '#fa4710',
        pink: {
          DEFAULT: '#FE9699',
          lighter: '#FED7D9',
          'light-1': '#E87ACB',
          'light-2': '#FFF0FB',
        },
        gray: {
          DEFAULT: '#dddddd',
          darker: '#555555',
          'darker-1': '#EEEEEE',
          'darker-2': '#979797',
        },
        orange: {
          DEFAULT: '#FCAD0E',
          lighter: '#FFF3E4',
          'light-1': '#FC950E',
          'light-2': '#FFF3E4',
          'light-3': '#FF8E25',
          'light-4': '#e67e1c',
        },
        black: {
          lighter: '#4D4D4D',
          'lighter-1': '#777777',
          'lighter-2': '#333333',
          'lighter-3': '#cccccc',
          'lighter-4': '#999999',
        },
        yellow: {
          'light-1': '#F2C200',
          'light-2': '#FFF9DF',
        },
      },
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },
      keyframes: (theme) => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
    screens: {
      xl: { max: '1367px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1280px',
          padding: '0 1.25rem',
          overflow: 'hidden',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },
          '@screen xl': {
            // maxWidth: '1400px',
          },
        },
      });
    },
    require('@tailwindcss/line-clamp'),
  ],
  corePlugins: {
    preflight: false,
  },
  mode: 'jit',
};
