import { theme } from 'Styles/theme';
import { WalletBtn } from './WalletButton.styled';

// вставляючи кнопки в розмітку, потрібно передати два пропси: текст кнопки та тип кнопки ('normal' - для зеленої, 'transparent' - для білої)
// приклад: <WalletButton text={'register'} type={'normal'} />
//          <WalletButton text={'log in'} type={'transparent'} />

export default function WalletButton({ text, type }) {
  return (
    <>
      <WalletBtn theme={theme} type={type}>
        {text}
      </WalletBtn>
    </>
  );
}
