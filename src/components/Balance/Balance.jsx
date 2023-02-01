import { BalanceTitle, BalanceSumm } from './Balance.styled';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

import { theme } from 'Styles/theme';

export const Balance = () => {
  const { selectBalance } = authSelectors;
  const balance = useSelector(selectBalance)
    .toLocaleString('fr-FR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(',', '.');

  return (
    <>
      <BalanceTitle theme={theme}> Your balance</BalanceTitle>
      <BalanceSumm>₴ {balance}</BalanceSumm>
    </>
  );
};
