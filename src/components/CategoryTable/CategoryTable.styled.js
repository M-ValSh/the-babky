import styled from '@emotion/styled';

export const TableWrapperDesc = styled.div`
  margin: 50px 0px 0px 18px;
  width: 395px;
`;

export const TRHeadDesc = styled.tr`
  width: 395px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 30px;
  font-family:  ${p => p.theme.fonts.secondary};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: calc(27 / 18);
  padding: 16px 20px 15px 20px;
`;


export const TRBodyDesc = styled.tr`
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

export const TRFooterDesc = styled.tr`
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

export const BoxDesc = styled.label`
  display: inline-block;
  margin-right: 16px;
  width: 24px;
  height: 24px;
  border-radius: 2px;
  /* Pass color via callback function */
  /* background-color: green; */
  background-color: ${p => p.color};
`;

export const THDesc = styled.th`
  display: flex;
`

export const THRedDesc = styled.th`
  color: red;
`
export const THGreenDesc = styled.th`
  color: green;
`





// export const Data = styled.tr`
//   border-bottom: 1px solid #dcdcdf;
//   box-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
// `;

// export const CatData = styled.td`
//   padding-left: 16px;
//   height: 52px;
//   display: flex;
//   align-items: center;
//   gap: 16px;
// `;

// export const SumData = styled.td`
//   padding-right: 16px;
//   text-align: right;
// `;

// export const CatTotal = styled.th`
//   padding-left: 20px;
//   height: 52px;
//   text-align: left;
//   font-weight: 700;
// `;

// export const ExpTotal = styled.th`
//   padding-right: 16px;
//   width: 100%;
//   text-align: right;
//   color: ${p => p.theme.colors.car};
// `;

// export const IncTotal = styled.th`
//   padding-right: 16px;
//   width: 100%;
//   text-align: right;
//   color: ${p => p.theme.colors.leisure};
// `;