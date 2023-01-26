import { useMediaQuery } from 'react-responsive';
import { MediaContext } from './MediaContext';

const Media = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const isNotMobile = !isMobile;
  const isBelowDesktop = !isDesktop;

  return (
    <MediaContext.Provider
      value={{
        isMobile,
        isTablet,
        isDesktop,
        isNotMobile,
        isBelowDesktop,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

export default Media;
