import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login } from './pages/login/login';
import { UserRoutes } from './router/userroute';
import AdminRoutes from './router/adminroute';

function AppRoutes(props) {
  useEffect(() => {}, []);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <AdminRoutes />
      <UserRoutes />
    </>
  );
}
export default AppRoutes;
