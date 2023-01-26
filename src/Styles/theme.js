import { extendTheme } from '@chakra-ui/react';

const colors = {
  mainBrand: '#',
  secondaryBrand: '#',

  textMain: '#',
  textSecondary: '#',
  placeholder: '#',

  backgroundMain: '#',
  backgroundDark: '#',

  backDrop: 'rgba(0, 0, 0, 0.6)',

  accent: '#',
  hover: '#',
  focus: '#',
  muted: '#',
  disabled: '',

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
};

const space = {
  spacing: value => `${4 * value}px`,
};

const fonts = {
  main: '',
};

const fontSizes = {};

export const theme = extendTheme({
  colors,
  breakpoints,
  radii,
  space,
  fonts,
  fontSizes,
});
