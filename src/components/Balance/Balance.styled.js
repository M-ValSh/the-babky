import styled from '@emotion/styled';

export const BalanceBlockMob = styled.div(({ theme }) => ({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '11px',
  justifyContent: 'center',
  width: '280px',
  fontSize: '30px',
  textTransform: 'uppercase',
  backgroundColor: theme.colors.textSecondary,
  color: theme.colors.textMain,
  padding: '11px 32px',
  borderRadius: theme.radii.currency,
}));

export const BalanceBlockTablet = styled.div(({ theme }) => ({
  marginLeft: '32px',
  display: 'flex',
  flexDirection: 'column',
  gap: '11px',
  justifyContent: 'center',
  width: '336px',
  textTransform: 'uppercase',
  backgroundColor: theme.colors.textSecondary,
  color: theme.colors.textMain,
  padding: '8px 32px 11px 40px',
  borderRadius: theme.radii.currency,
}));

export const BalanceSumm = styled.p(({ theme }) => ({
  padding: 0,
  fontFamily: theme.fonts.main,
  fontSize: '30px',
  lineHeight: '36px',
  textTransform: 'uppercase',
  color: theme.colors.textMain,
  fontWeight: 700,
}));

export const BalanceBlockDesk = styled.div(({ theme }) => ({
  marginLeft: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  justifyContent: 'center',
  width: '395px',
  textTransform: 'uppercase',
  backgroundColor: theme.colors.textSecondary,
  color: theme.colors.textMain,
  padding: '8px 40px 11px 40px',
  borderRadius: theme.radii.currency,
}));

export const BalanceTitle = styled.p(({ theme }) => ({
  padding: 0,
  fontFamily: theme.fonts.secondary,
  fontSize: '12px',
  lineHeight: '13px',
  fontWeight: '400',
  textTransform: 'uppercase',
  color: '#A6A6A6',
}));
