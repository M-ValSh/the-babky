import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);

  overflow-y: hidden;
`;

export const ModalWindow = styled.div(({ theme }) => ({
  width: '100%',
  height: '100%',
  padding: '20px 10px',
  backgroundColor: theme.colors.textSecondary,
  textAlign: 'center',

  overflow: 'scroll',
}));

export const ModalTitle = styled.p(({ theme }) => ({
  marginBottom: '40px',
  fontFamily: theme.fonts.main,
  fontSize: '1.5rem',
  fontWeight: theme.fontWeights.medium,
}));
