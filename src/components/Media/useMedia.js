import { useContext } from 'react';
import { MediaContext } from './MediaContext';

export const useMedia = () => {
  const media = useContext(MediaContext);

  return media;
};
