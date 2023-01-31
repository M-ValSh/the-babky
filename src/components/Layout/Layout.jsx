import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
// import css from './Layout.module.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Headers } from 'components/Headers/Headers';
import { openModalLogout } from 'redux/global/global-slice';
import {selectIsModalLogoutOpen} from 'redux/global/global-selectors';
import { useSelector } from 'react-redux';
import LogOutModal from 'components/Modals/LogOutModal/LogOutModal';

const Layout = () => {
  const isModalOpen = useSelector(selectIsModalLogoutOpen);
  return (
    <>
      {/* <div className={css.loader_field}>
        <Loader />
      </div> */}
      <Headers />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      {isModalOpen && (<LogOutModal />)}
      <ToastContainer />
    </>
  );
};

export default Layout;
