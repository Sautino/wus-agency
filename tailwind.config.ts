import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  content: [
    './src/app/**/*.tsx',
    './src/components/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0d0c22',
        light: '#e5e5e5',
        button: '#1958c2'
      }
    }
  },
  plugins: []
};
export default config;
