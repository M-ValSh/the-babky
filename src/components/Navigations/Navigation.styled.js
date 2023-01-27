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
}));

export const NavigationDesk = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  justifyContent: 'center',
  alightItems: 'center',
  padding: '40px 35px 28px 19px',
}));
