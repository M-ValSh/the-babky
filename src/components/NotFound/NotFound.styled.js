import styled from '@emotion/styled';

export const ErrorDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 4;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 30px;
  padding-bottom: 100px;
`;
export const Img = styled.img`
  max-width: 30%;
  z-index: 4;
`;

export const ErrorTitle = styled.h3`
  font-weight: 700;
  font-size: 80px;
`;
