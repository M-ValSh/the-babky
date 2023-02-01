import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader/Loader';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Headers } from 'components/Headers/Headers';
import { selectIsModalLogoutOpen } from 'redux/global/global-selectors';
import { useSelector } from 'react-redux';
import LogOutModal from 'components/Modals/LogOutModal/LogOutModal';

const Layout = () => {
  const isModalOpen = useSelector(selectIsModalLogoutOpen);
  return (
    <>
      <Headers />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      {isModalOpen && <LogOutModal />}
      <ToastContainer
        autoClose={3000}
        theme="colored"
        limit={2}
        style={{ zIndex: '100000' }}
      />
    </>
  );
};

export default Layout;
