import styled from '@emotion/styled';

export const Logo = styled.img(({ theme }) => ({
  width: '181px',
  height: '40px',
}));

export const LogoMob = styled.img(({ theme }) => ({
  width: '119px',
  height: '30px',
}));

export const UserImg = styled.img(({ theme }) => ({
  width: '30px',
  height: '30px',
  marginRight: '12px',
  marginLeft: 'auto',
}));

export const ClientName = styled.p(({ theme }) => ({
  color: theme.colors.placeholder,
  fontFamily: theme.fonts.secondary,
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '24px',
  marginRight: '12px',
  '::after': {
    content: '"|"',
    marginLeft: '12px',
  },
}));

export const ClientNameMob = styled.p(({ theme }) => ({
  color: theme.colors.placeholder,
  fontFamily: theme.fonts.secondary,
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '24px',
  marginRight: '12px',
  marginLeft: 'auto',
}));

export const LogoutButton = styled.button(({ theme }) => ({
  color: theme.colors.placeholder,
  fontFamily: theme.fonts.secondary,
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '24px',
  background: 'none',
  border: 'none',
  display: 'flex',
  gap: '8px',
}));

export const LogoutImg = styled.img({
  width: '18px',
  height: '18px',
});
