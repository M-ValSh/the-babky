import styled from '@emotion/styled';

export const TableWrapperDesk = styled.div`
  margin: 20px 0px 20px 0px;
  width: 395px;
`;

export const TRHeadDesk = styled.tr`
  width: 395px;
  display: flex;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.textSecondary};
  border-radius: 30px;
  font-family:  ${p => p.theme.fonts.secondary};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: calc(27 / 18);
  padding: 16px 20px 15px 20px;
`;


export const TRBodyDesk = styled.tr`
  border-bottom: 1px solid #DCDCDF;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  padding: 0px 20px 0px 16px;
  font-family:  ${p => p.theme.fonts.secondary};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: calc(24 / 16);
`;

export const TRFooterDesk = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  padding: 0px 20px 0px 0px;
  font-family:  ${p => p.theme.fonts.secondary};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: calc(24 / 16);
`;

export const BoxHeadTitle = styled.th`
  font-style: normal;
  font-weight: 700;
  color: ${p => p.theme.colors.textMain}
`

export const THDesk = styled.th`
  display: flex;
`

export const BoxDesk = styled.label`
  display: inline-block;
  margin-right: 16px;
  width: 24px;
  height: 24px;
  border-radius: 2px;
  /* Pass color via callback function */
  background-color: ${p => p.color};
`;

export const BoxTitle = styled.label`
  font-style: normal;
  font-weight: 400;
  color: ${p => p.theme.colors.textMain}
`
export const BoxAmount = styled.th`
  font-style: normal;
  font-weight: 400;
  color: ${p => p.theme.colors.textMain}
`

export const THFooter = styled.th`
  color: ${p => p.theme.colors.textMain}
`

export const THRed = styled.th`
  color: red;
`
export const THGreen = styled.th`
  color: green;
`

// TABLET

export const TableWrapperTablet = styled.div`
  margin: 20px 0px 20px 0px;
  width: 336px;
`;

export const TRHeadTablet = styled.tr`
  width: 336px;
  display: flex;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.textSecondary};
  border-radius: 30px;
  font-family:  ${p => p.theme.fonts.secondary};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: calc(27 / 18);
  padding: 16px 20px 15px 20px;
`;


export const TRBodyTablet = styled.tr`
  border-bottom: 1px solid #DCDCDF;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  padding: 0px 20px 0px 16px;
  font-family:  ${p => p.theme.fonts.secondary};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: calc(24 / 16);
`;

export const TRFooterTablet = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  padding: 0px 20px 0px 0px;
  font-family:  ${p => p.theme.fonts.secondary};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: calc(24 / 16);
`;

export const BoxTablet = styled.label`
  display: inline-block;
  margin-right: 16px;
  width: 24px;
  height: 24px;
  border-radius: 2px;
  background-color: ${p => p.color};
`;

export const THTablet = styled.th`
  display: flex;
`

// MOBILE

export const TableWrapperMobile = styled.div`
  margin-top: 20px;
`;

export const TRHeadMobile = styled.tr`
  width: 280px;
  display: flex;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.textSecondary};
  border-radius: 30px;
  font-family:  ${p => p.theme.fonts.secondary};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: calc(27 / 18);
  padding: 16px 20px 15px 20px;
`;

export const TRBodyMobile = styled.tr`
  border-bottom: 1px solid #DCDCDF;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  padding: 0px 20px 0px 16px;
  font-family:  ${p => p.theme.fonts.secondary};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: calc(24 / 16);
  color: ${p => p.theme.colors.textMain};
`;

export const TRFooterMobile = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  padding: 0px 20px 0px 0px;
  font-family:  ${p => p.theme.fonts.secondary};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: calc(24 / 16);
  color: black;
`;

export const BoxMobile = styled.label`
  display: inline-block;
  margin-right: 16px;
  width: 24px;
  height: 24px;
  border-radius: 2px;
  /* Pass color via callback function */
  background-color: ${p => p.color};
`;

export const THMobile = styled.td`
  display: flex;
`


export const THTextMobile = styled.p`
  display: flex;
`
