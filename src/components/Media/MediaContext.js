import { createContext } from 'react';

export const MediaContext = createContext({
  isMobile: true,
  isTablet: false,
  isDesktop: false,
  isNotMobile: false,
  isBelowDesktop: true,
});
