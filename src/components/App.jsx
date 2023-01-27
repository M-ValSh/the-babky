import { useTheme } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import NotFound from './NotFound/NotFound';
import HomePage from './HomePage/HomePage';
import Statistics from 'pages/Statistics/Statistics';

export const App = () => {
  const theme = useTheme();

  console.log(theme);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
