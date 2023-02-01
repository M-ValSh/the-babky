import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const mySelectStyle = definePartsStyle({
  field: {
    fontFamily: 'Circe',
    w: '280px',
    h: '50px',
    border: '1px solid #000',
    borderRadius: '30px',
    bg: 'transparent',
    color: '#000',
    padding: '0 32px 0 20px',

    '@media (min-width: 768px)': {
      w: '160px',
    },

    '@media (min-width: 1280px)': {
      w: '182px',
    },

    '&>option': {
      width: '182px',
      height: '20px',
      bg: 'rgba(255, 255, 255, 0.7)',
    },
  },
  icon: {
    color: '#000',
  },
});

export const selectTheme = defineMultiStyleConfig({
  variants: { mySelectStyle },
});
