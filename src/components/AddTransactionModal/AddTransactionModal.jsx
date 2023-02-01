import { ModalTitle, ModalWindow, Overlay } from './AddTransactionModal.styled';
import { theme } from 'Styles/theme';
import AddTransactionForm from './AddTransactionForm/AddTransactionForm';
import { ToastNotification } from 'components/ToastNotification/ToastNotification';

const { createPortal } = require('react-dom');
const modalElement = document.querySelector('#modal-root');

export default function AddTransactionModal() {
  return createPortal(
    <>
      <ToastNotification />
      <Overlay>
        <ModalWindow theme={theme}>
          <ModalTitle theme={theme}>Add transaction</ModalTitle>
          <AddTransactionForm />
        </ModalWindow>
      </Overlay>
    </>,
    modalElement
  );
}
