import styled from '@emotion/styled';

export const ChartWrapperDesk = styled.div`
  position: relative;
  width: 288px;
  height: 288px;
`;

export const ChartText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 18px;
  line-height: calc(27 / 18);
  font-weight: 700;
  text-align: center;
  color: ${p => p.theme.colors.textMain};
`;

export const ChartWrapperTablet = styled.div`
  position: relative;
  width: 336px;
  height: 336px;
`;

export const ChartWrapperMobile = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
`;
