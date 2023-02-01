import styled from '@emotion/styled';

export const AddTransactionButton = styled.button(({ theme }) => ({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: theme.colors.BgBtnGreen,
  zIndex: '100',
  color: theme.colors.whiteColor,
  boxShadow: '0px 6px 15px rgba(36, 204, 167, 0.5)',
  borderRadius: '50px',
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
