import { theme } from 'Styles/theme';
import { AddTransactionButton } from './AddTrnsctnBtn.styled';
import { useDispatch } from 'react-redux';
import { openModalAddTransaction } from 'redux/global/global-slice';
import Plus from 'assets/images/plus.svg';

export default function AddTrnsctnBtn() {
  const dispatch = useDispatch();

  const handleClick = event => {
    event.preventDefault();
    window.scrollTo(0, 0);
    dispatch(openModalAddTransaction());
    document.body.style.overflow = 'hidden';
  };

  return (
    <AddTransactionButton theme={theme} onClick={handleClick}>
      <img src={Plus} alt="" />
    </AddTransactionButton>
  );
}
