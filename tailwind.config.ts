/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
// @ts-ignore
import animations from '@midudev/tailwind-animations';

/**
 * Color Palette
 */
const colorPalette = {
  // Primary Color Palette
  primary: {
    '50': '#eff8ff',
    '100': '#dff0ff',
    '200': '#b8e3ff',
    '300': '#78cdff',
    '400': '#1eadff',
    '500': '#069bf1',
    '600': '#007ace',
    '700': '#0061a7',
    '800': '#02528a',
    '900': '#084572',
    '950': '#062b4b',
  },

  // Secondary Color Palette
  secondary: {
    '50': '#f3f2ff',
    '100': '#eae7ff',
    '200': '#d6d2ff',
    '300': '#b9aeff',
    '400': '#9680ff',
    '500': '#764dff',
    '600': '#692eff',
    '700': '#5716eb',
    '800': '#4912c5',
    '900': '#3d11a1',
    '950': '#22076e',
  },

  // Custom Neutral Color Palette
  customNeutral: {
    '50': '#f5f7f8',
    '100': '#ecf1f3',
    '200': '#dde4e8',
    '300': '#c8d3d9',
    '400': '#b1bec8',
    '500': '#9cabb8',
    '600': '#8693a5',
    '700': '#727e8f',
    '800': '#5e6775',
    '900': '#4f5660',
    '950': '#2e3238',
  },

  // Accent Color Palette 1
  accent1: {
    '50': '#ebfffc',
    '100': '#cbfffa',
    '200': '#9efff9',
    '300': '#5cfff7',
    '400': '#10fefe',
    '500': '#00dfe4',
    '600': '#00b2bf',
    '700': '#048e9a',
    '800': '#0d717d',
    '900': '#105d69',
    '950': '#033e49',
  },

  // Accent Color Palette 2
  accent2: {
    '50': '#fff0f8',
    '100': '#ffe3f5',
    '200': '#ffc6ea',
    '300': '#ff98d7',
    '400': '#ff58bb',
    '500': '#ff279e',
    '600': '#f00070',
    '700': '#df005c',
    '800': '#b8004c',
    '900': '#980342',
    '950': '#5f0023',
  },

  // Accent Color Palette 3
  accent3: {
    '50': '#fdfee8',
    '100': '#fbffc2',
    '200': '#fbff87',
    '300': '#fffe43',
    '400': '#fff326',
    '500': '#efd803',
    '600': '#ceaa00',
    '700': '#a47a04',
    '800': '#885f0b',
    '900': '#734d10',
    '950': '#432905',
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
    '50': '#edf1ff',
    '100': '#dee6ff',
    '200': '#c4d0ff',
    '300': '#a0b1ff',
    '400': '#6a77ff',
    '500': '#5b5df9',
    '600': '#483dee',
    '700': '#3d2fd3',
    '800': '#3229aa',
    '900': '#2c2986',
    '950': '#1c184e',
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
    '50': '#f3fbea',
    '100': '#e3f5d2',
    '200': '#c8ecaa',
    '300': '#a5dd79',
    '400': '#85cc4f',
    '500': '#66b131',
    '600': '#4d8d23',
    '700': '#407321',
    '800': '#33561e',
    '900': '#2c4a1d',
    '950': '#14280b',
  },
};

const config: Config = {
  darkMode: ['class'],
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
      backgroundImage: {
        bgSection1: "url('../../public/assets/bgSection1.png')",
        bgSection2: "url('../../public/assets/bgSection2.png')",
        bgSection3: "url('../../public/assets/bgSection3.png')",
        blurCyan: "url('../../public/assets/blurCyan.webp')",
        backgroundBlue: "url('../../public/assets/background-blue.webp')",
      },
    },
  },
  plugins: [animations],
};
export default config;
