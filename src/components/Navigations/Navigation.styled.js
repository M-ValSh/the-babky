import styled from '@emotion/styled';
import BublePurp from 'assets/images/ellipse-purple.svg';
import BublRed from 'assets/images/ellipse-pink.svg';

export const BubleWrapper = styled.div(({ theme }) => ({
  width: '100%',
  zIndex: 1,
  background: theme.colors.BgMain,
  position: 'relative',
  height: '100rem',

  '::after': {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 0,
    content: '""',
    filter: 'blur(25px)',
    background: `url('${BublePurp}') bottom left no-repeat, url('${BublRed}') top right no-repeat, #f1f2f7 `,
  },
}));

export const NavigationMob = styled.div(({ theme }) => ({
  display: 'flex',
  gap: '38px',
  justifyContent: 'center',
  alightItems: 'center',
  padding: '15px 65px',
}));

export const NavigationTab = styled.div(({ theme }) => ({
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
  zIndex: 1,
}));

export const NavigationIcon = styled.img(({ theme }) => ({
  width: '18px',
  height: '18px',
  marginRight: '23px',
  fill: '#6E78E8',
}));

export const NavigationIconMob = styled.img(({ theme }) => ({
  width: '38px',
  height: '38px',
}));
