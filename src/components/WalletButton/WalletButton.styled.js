import styled from '@emotion/styled';

export const WalletBtn = styled.button(({ theme, type }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '300px',
  minHeight: '50px',
  fontFamily: theme.fonts.mainForms,
  fontSize: theme.fontSizes.lg,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',

  marginTop: type === 'transparent' && '20px',

  border:
    type === 'transparent'
      ? '1px solid rgba(74, 86, 226, 1)'
      : theme.colors.transparent,
  borderRadius: theme.radii.button,
  color:
    type === 'transparent'
      ? theme.colors.textForBtn
      : theme.colors.textSecondary,
  backgroundColor:
    type === 'transparent' ? theme.colors.transparent : theme.colors.BgBtnGreen,
}));
