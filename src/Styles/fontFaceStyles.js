import { css } from '@emotion/react';

import PoppinsWoff from 'assets/fonts/Poppins/Poppins-Regular.woff';
import PoppinsWoff2 from 'assets/fonts/Poppins/Poppins-Regular.woff2';
import PoppinsBoldWoff from 'assets/fonts/Poppins/Poppins-Bold.woff';
import PoppinsBoldWoff2 from 'assets/fonts/Poppins/Poppins-Bold.woff2';

import CirceWoff from 'assets/fonts/Circe/Circe-Regular.woff';
import CirceWoff2 from 'assets/fonts/Circe/Circe-Regular.woff2';
import CirceBoldWoff from 'assets/fonts/Circe/Circe-Bold.woff';
import CirceBoldWoff2 from 'assets/fonts/Circe/Circe-Bold.woff2';

export const fontFaceStyles = css`
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsWoff2}) format('woff2'),
      url(${PoppinsWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsBoldWoff2}) format('woff2'),
      url(${PoppinsBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Circe';
    src: url(${CirceWoff2}) format('woff2'), url(${CirceWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Circe';
    src: url(${CirceBoldWoff2}) format('woff2'),
      url(${CirceBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
`;
