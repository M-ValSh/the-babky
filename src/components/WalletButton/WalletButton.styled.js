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

  marginTop: styleType === 'transparent' && '20px',

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
}));
