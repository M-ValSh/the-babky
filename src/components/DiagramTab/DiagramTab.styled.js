import styled from '@emotion/styled';

export const WrapperDesk = styled.div`
  display: flex;
  gap: 32px;
`;

export const TableWrapperDesk = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const SelectWrapperDesk = styled.div`
  width: 395px;
  display: flex;
  gap: 16px;
`;

export const ChartWrapperDesk = styled.div`
  display: flex;
  flex-direction: column;
`

export const StatsTitleDesk = styled.h4`
  margin-left: 20px;

  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: calc(45 / 30);
  color: ${p => (p.theme.colors.textMain)};
`


// TABLET

export const WrapperTablet = styled.div`
  display: flex;
  gap: 32px;
`;

export const TableWrapperTablet = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 23px;
`;

export const SelectWrapperTablet = styled.div`
  width: 336px;
  display: flex;
  gap: 16px;
`;

export const ChartWrapperTablet = styled.div`
  width: 336px;
  height: 336px;
  display: flex;
  flex-direction: column;
`

export const StatsTitleTablet = styled.h4`
  margin-left: 20px;

  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: calc(45 / 30);
  color: ${p => (p.theme.colors.textMain)};
`


// MOBILE

export const WrapperMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 280px;
  /* margin: 0 auto; */
`;

export const TableWrapperMobile = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectWrapperMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ChartWrapperMobile = styled.div`
  display: flex;
  flex-direction: column;
`

export const StatsTitleMobile = styled.h4`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: calc(45 / 30);
  color: ${p => (p.theme.colors.textMain)};
`