import { theme } from 'Styles/theme';
import { WalletBtn } from './WalletButton.styled';

export default function WalletButton({ text, styleType, ...otherProps }) {
  return (
    <>
      <WalletBtn theme={theme} styleType={styleType} {...otherProps}>
        {text}
      </WalletBtn>
    </>
  );
}
