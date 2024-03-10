import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

/**
 * Color Palette
 */
const colorPalette = {
  // Primary Color Palette
  primary: {
    '50': '#b4dbf1',
    '100': '#8dc6f3',
    '200': '#66b2f5',
    '300': '#3f9df7',
    '400': '#1889f9',
    '500': '#007bff', // reference color
    '600': '#006ccc',
    '700': '#0057aa',
    '800': '#004389',
    '900': '#002f67',
    '950': '#001a44',
  },

  // Secondary Color Palette
  secondary: {
    '50': '#ccabf9',
    '100': '#ad86f8',
    '200': '#8e61f7',
    '300': '#6f3cf6',
    '400': '#5017f5',
    '500': '#692eff', // reference color
    '600': '#541fdc',
    '700': '#401bb9',
    '800': '#2b1496',
    '900': '#170e73',
    '950': '#030950',
  },

  // Custom Neutral Color Palette
  customNeutral: {
    '50': '#e8e7e4',
    '100': '#dffbff',
    '200': '#c4dce3',
    '300': '#a8bcc7',
    '400': '#8d9dab',
    '500': '#727e8f',
    '600': '#565e72',
    '700': '#3b3f56',
    '800': '#1f1f3a',
    '900': '#04001e',
    '950': '#000004',
  },

  // Accent Color Palette 1
  accent1: {
    '50': '#d7fafa',
    '100': '#a1e5e5',
    '200': '#6bd0d0',
    '300': '#35baba',
    '400': '#00a5a5',
    '500': '#10fefe',
    '600': '#00d1d1',
    '700': '#00aaaa',
    '800': '#008383',
    '900': '#005c5c',
    '950': '#002828',
  },

  // Accent Color Palette 2
  accent2: {
    '50': '#ffafc3',
    '100': '#ff8cba',
    '200': '#ff63b2',
    '300': '#ff3ba9',
    '400': '#ff12a0',
    '500': '#f00070',
    '600': '#ff006f',
    '700': '#ff005d',
    '800': '#ff004b',
    '900': '#ff0039',
    '950': '#ff0026',
  },

  // Accent Color Palette 3
  accent3: {
    '50': '#ffffdf',
    '100': '#ffffb4',
    '200': '#ffff89',
    '300': '#ffff5e',
    '400': '#ffff33',
    '500': '#fff326',
    '600': '#ffed00',
    '700': '#e4d400',
    '800': '#c9b500',
    '900': '#ae9b00',
    '950': '#938100',
  },

  // Accent Color Palette 4
  accent4: {
    '50': '#7dff8b',
    '100': '#61ff80',
    '200': '#44ff75',
    '300': '#28ff69',
    '400': '#0bff5e',
    '500': '#26ff3b',
    '600': '#0cff38',
    '700': '#00ff34',
    '800': '#00e62f',
    '900': '#00cc2b',
    '950': '#00b327',
  },

  // Accent Color Palette 5
  accent5: {
    '50': '#c5d0ff',
    '100': '#9babff',
    '200': '#7776ff',
    '300': '#5351ff',
    '400': '#2e2bff',
    '500': '#6a77ff',
    '600': '#4f64ff',
    '700': '#3451ff',
    '800': '#1a3dff',
    '900': '#002aff',
    '950': '#001318',
  },

  // Accent Color Palette 6
  accent6: {
    '50': '#76a757',
    '100': '#639f4b',
    '200': '#4f9640',
    '300': '#3c8d34',
    '400': '#298628',
    '500': '#407321',
    '600': '#356c1c',
    '700': '#2b6216',
    '800': '#205a11',
    '900': '#16510b',
    '950': '#0b4805',
  },

  // Accent Color Palette 7
  accent7: {
    '50': '#00bf73',
    '100': '#00aa63',
    '200': '#009552',
    '300': '#008142',
    '400': '#006d31',
    '500': '#00a252',
    '600': '#008c46',
    '700': '#00763f',
    '800': '#006039',
    '900': '#004b32',
    '950': '#003527',
  },
};

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: colors.slate,
        light: colors.slate,
        customNeutral: colorPalette.customNeutral,
        primary: colorPalette.primary,
        secondary: colorPalette.secondary,
        accent1: colorPalette.accent1,
        accent2: colorPalette.accent2,
        accent3: colorPalette.accent3,
        accent4: colorPalette.accent4,
        accent5: colorPalette.accent5,
        accent6: colorPalette.accent6,
        accent7: colorPalette.accent7,
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
