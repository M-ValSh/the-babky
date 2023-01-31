import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const myStyle = definePartsStyle({
  container: {
    display: 'inline-block',
  },
  thumb: {
    pos: 'absolute',
    top: '-2px',
    left: '-4px',
    w: '44px',
    h: '44px',
    bg: '#24CCA7',
    boxShadow: '0px 6px 15px rgba(36, 204, 167, 0.5)',

    _before: {
      content: '""',
      w: '20px',
      h: '2px',
      bg: 'white',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },

    _after: {
      content: '""',
      w: '2px',
      h: '20px',
      bg: 'white',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },

    _checked: {
      boxShadow: '0px 6px 15px rgba(255, 101, 150, 0.5)',

      transform: 'translateX(100%)',
      bg: '#FF6596',

      _after: {
        content: '""',
        w: '20px',
        h: '2px',
        bg: 'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
    },
  },
  track: {
    pos: 'relative',
    display: 'inline-block',

    w: '80px',
    h: '40px',
    p: '0',
    m: '0',
    bg: 'transparent',
    borderRadius: '30px',
    borderColor: '#E0E0E0',
    borderWidth: '1px',
  },
});

export const switchTheme = defineMultiStyleConfig({ variants: { myStyle } });
