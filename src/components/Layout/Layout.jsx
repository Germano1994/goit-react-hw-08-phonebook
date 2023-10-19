import React, { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

import AppBar from '../AppBar';
import Skeleton from '../Skeleton';
import { Container } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <AppBar />
      <main>
        <Suspense fallback={<Skeleton />}>
          <Outlet />
        </Suspense>
      </main>
      <Toaster
        position="buttom-left"
        toastOptions={{
          duration: 3000,
        }}
      />
    </Container>
  );
};

export default Layout;