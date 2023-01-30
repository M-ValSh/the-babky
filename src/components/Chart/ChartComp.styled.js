import styled from '@emotion/styled';

export const ChartWrapper = styled.div`
  position: relative;
  width: 288px;
  height: 288px;
`;

export const ChartText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 18px;
  line-height: calc(27 / 18);
  font-weight: 700;
  text-align: center;
`;