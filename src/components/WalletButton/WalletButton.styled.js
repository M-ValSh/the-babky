import styled from '@emotion/styled';

export const WalletBtn = styled.button(({ theme, styleType }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '300px',
  minHeight: '50px',
  fontFamily: theme.fonts.mainForms,
  fontSize: theme.fontSizes.lg,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',

  marginTop: styleType === 'transparent' && '20px',
  transition: 'box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1)',

  border:
    styleType === 'transparent'
      ? '1px solid rgba(74, 86, 226, 1)'
      : theme.colors.transparent,
  borderRadius: theme.radii.button,
  color:
    styleType === 'transparent'
      ? theme.colors.textForBtn
      : theme.colors.textSecondary,
  backgroundColor:
    styleType === 'transparent'
      ? theme.colors.transparent
      : theme.colors.BgBtnGreen,

  '&:hover, &:focus': {
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
  },
}));
