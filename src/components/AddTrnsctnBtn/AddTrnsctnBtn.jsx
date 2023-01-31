import { theme } from 'Styles/theme';
import { AddTransactionButton } from './AddTrnsctnBtn.styled';
import { useDispatch } from 'react-redux';
import { openModalAddTransaction } from 'redux/global/global-slice';

export default function AddTrnsctnBtn() {
  const dispatch = useDispatch();
  return (
    <AddTransactionButton
      theme={theme}
      onClick={event => {
        event.preventDefault();
        dispatch(openModalAddTransaction());
      }}
    >
      Add transaction
    </AddTransactionButton>
  );
}
