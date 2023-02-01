import { ModalTitle, ModalWindow, Overlay } from './AddTransactionModal.styled';
import { theme } from 'Styles/theme';
import AddTransactionForm from './AddTransactionForm/AddTransactionForm';
import { ToastNotification } from 'components/ToastNotification/ToastNotification';
import { closeModalWindow } from 'redux/global/global-slice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const { createPortal } = require('react-dom');
const modalElement = document.querySelector('#modal-root');

export default function AddTransactionModal() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleEscapeClick = event => {
      if (event.code === 'Escape') {
        dispatch(closeModalWindow());
      }
    };
    document.addEventListener('keydown', handleEscapeClick);
    return () => {
      document.removeEventListener('keydown', handleEscapeClick);
    };
  }, [dispatch]);

  const handleClick = event => {
    if (event.target === event.currentTarget) {
      dispatch(closeModalWindow());
    }
  };

  return createPortal(
    <>
      <ToastNotification />
      <Overlay onClick={handleClick}>
        <ModalWindow theme={theme}>
          <ModalTitle theme={theme}>Add transaction</ModalTitle>
          <AddTransactionForm />
        </ModalWindow>
      </Overlay>
    </>,
    modalElement
  );
}
