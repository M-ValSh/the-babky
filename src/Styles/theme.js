import { extendTheme } from '@chakra-ui/react';

const colors = {
  mainBgDarker: '#E5E5E5',
  mainBgLighter: 'rgba(255, 255, 255, 0.4)',
  mainBgUnderColor: '#E7EAF2',
  BgforCurrency: '#4A56E2',
  BgBtnGreen: '#24CCA7',
  BgBtnRed: '#FF6596',

  whiteColor: '#FFFFFF',

  textMain: '#000000',
  textSecondary: '#FFFFFF',
  placeholder: '#BDBDBD',
  textForBtn: '#4A56E2',

  etc: 'use declarative names (not black, green, red)',
};

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '1280px',
  xl: '1536px',
  '2xl': '1920px',
};

const radii = {
  button: '20px',
  modal: '20px',
  currency: '30px',
};

const fonts = {
  main: 'Poppins',
  secondary: 'Circe',
};

export const theme = extendTheme({
  colors,
  breakpoints,
  radii,
  fonts,
});
