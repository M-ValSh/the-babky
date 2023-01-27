import { theme } from 'Styles/theme';
import { WalletBtn } from './WalletButtons.styled';

// вставляючи кнопки в розмітку, потрібно передати два пропси: текст першої та другої кнопки
// приклад: <WalletButtons textNormal={'register'} textTransparent={'log in'} />

export default function WalletButtons({ textNormal, textTransparent }) {
  return (
    <>
      <WalletBtn theme={theme} type={'normal'}>
        {textNormal}
      </WalletBtn>
      <WalletBtn theme={theme} type={'transparent'}>
        {textTransparent}
      </WalletBtn>
    </>
  );
}
