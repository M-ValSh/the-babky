import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader/Loader';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Headers } from 'components/Headers/Headers';

const Layout = () => {
  return (
    <>
      <Headers />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <ToastContainer />
    </>
  );
};

export default Layout;
