import React, { lazy, Suspense } from 'react';

const LazyClientList = lazy(() => import('./ClientList'));

const ClientList = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyClientList {...props} />
  </Suspense>
);

export default ClientList;
