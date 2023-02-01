import { ToastContainer, toast } from 'react-toastify';

export const ToastNotification = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};

export const notifySuccess = () =>
  toast('Your new transaction was successfully added 🤑');

export const notifyError = () =>
  toast('Something went wrong 🤯 Please, try again later');
