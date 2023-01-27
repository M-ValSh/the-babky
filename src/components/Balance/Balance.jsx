// import authSelectors from 'redux/auth/auth-selectors';
import {
  // BalanceBlockDesk,
  // BalanceBlockTablet,
  // BalanceBlockMob,
  BalanceTitle,
  BalanceSumm,
} from './Balance.styled';
import { theme } from 'Styles/theme';

export const Balance = () => {
  return (
    <>
      <BalanceTitle theme={theme}> Your balance</BalanceTitle>
      <BalanceSumm>₴ 25 000.00</BalanceSumm>
    </>
  );
};
