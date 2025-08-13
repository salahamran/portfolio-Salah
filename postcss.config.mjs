import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: {
    '@tailwindcss/postcss': tailwindcss(),
    autoprefixer: autoprefixer(),
  },
};
