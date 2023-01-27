import { injectGlobal } from '@emotion/css';

import PoppinsWoff from './Poppins/Poppins-Regular.woff';
import PoppinsWoff2 from './Poppins/Poppins-Regular.woff2';
import PoppinsBoldWoff from './Poppins/Poppins-Bold.woff';
import PoppinsBoldWoff2 from './Poppins/Poppins-Bold.woff2';

import CirceWoff from './Circe/Circe-Regular.woff';
import CirceWoff2 from './Circe/Circe-Regular.woff2';
import CirceBoldWoff from './Circe/Circe-Bold.woff';
import CirceBoldWoff2 from './Circe/Circe-Bold.woff2';

injectGlobal`
@font-face {
    font-family: 'Poppins Regular';
        src: local('Poppins'), local('Poppins'),
        url(${PoppinsWoff2}) format('woff2'),
        url(${PoppinsWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
}
@font-face {
  font-family: 'Poppins Bold';
  src: local('Poppins Bold'), local('Poppins-Bold'),
    url(${PoppinsBoldWoff2}) format('woff2'),
    url(${PoppinsBoldWoff}) format('woff'),
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'Circe Regular';
  src: local('Circe'), local('Circe-Regular'),
    url(${CirceWoff2}) format('woff2'),
    url(${CirceWoff}) format('woff'),

  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Circe Bold';
  src: local('Circe Bold'), local('Circe-Bold'),
    url(${CirceBoldWoff2}) format('woff2'),
    url(${CirceBoldWoff}) format('woff'),
  font-weight: bold;
  font-style: normal;
}
`;
