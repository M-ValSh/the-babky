import styled from '@emotion/styled';

export const NavigationMob = styled.div(({ theme }) => ({
  display: 'flex',
  gap: '38px',
  justifyContent: 'center',
  alightItems: 'center',
  padding: '15px 65px',
}));

export const NavigationTablet = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  justifyContent: 'center',
  alightItems: 'center',
  padding: '40px 35px 28px 35px',
  font: theme.fonts.main,
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '27px',
  color: theme.colors.textMain,
}));

export const NavigationDesk = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  justifyContent: 'center',
  alightItems: 'center',
  padding: '40px 35px 28px 19px',
  font: theme.fonts.main,
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '27px',
  color: theme.colors.textMain,
}));

export const NavigationIconActive = styled.img(({ theme }) => ({
  width: '18px',
  height: '18px',
  marginRight: '23px',
  filter: 'drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5))',
  fill: '#4A56E2',
}));

export const NavigationIcon = styled.img(({ theme }) => ({
  width: '18px',
  height: '18px',
  marginRight: '23px',
  fill: '#6E78E8',
}));

export const NavigationIconActiveMob = styled.img(({ theme }) => ({
  width: '38px',
  height: '38px',
  filter: 'drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5))',
}));

export const NavigationIconMob = styled.img(({ theme }) => ({
  width: '38px',
  height: '38px',
}));
