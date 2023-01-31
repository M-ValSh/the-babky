import styled from '@emotion/styled';

export const OverlayBox = styled.div(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    // zIndices: 9999,
    zIndex: 1200,
  }));

//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.8);
//   z-index: 1200;

export const ModalBox = styled.div(({ theme }) => ({
    display: 'block',
    textAlign: 'center',
    // width: '300px',
    // height: '150px',
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    backgroundColor: '#FFF',
    borderRadius: '25px',
}));

export const ContentBox = styled.div(({ theme }) => ({
    display: 'block',
    margin: '40px',
}));

export const ButtonsBox = styled.div(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '20px auto 0',
    gap: '20px',
}));

export const KeepButton = styled.button(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '125px',
    minHeight: '50px',
    fontFamily: theme.fonts.mainForms,
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    backgroundColor: theme.colors.InputColor,
    color: theme.colors.textMain,
    borderRadius: theme.radii.button,
}))

export const LogoutButton = styled.button(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '125px',
    minHeight: '50px',
    fontFamily: theme.fonts.mainForms,
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    backgroundColor: theme.colors.BgBtnRed,
    color: theme.colors.whiteColor,
    borderRadius: theme.radii.button,
}))

//   max-width: calc(100vw - 48px);
//   max-height: calc(100vh - 24px);