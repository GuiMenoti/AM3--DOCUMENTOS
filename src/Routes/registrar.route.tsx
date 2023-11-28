import { Suspense, lazy } from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';
import { AgricultorRegistrarSkeleton } from '../Skeletons/Agricultor.registrar.skeleton';
import { ErrorSkeleton } from '../Skeletons/Error.skeleton';

const LazyAgricultorRegistrar = lazy(
  () => import('../pages/Registrar/Agricultor.registrar')
);

const LazyNotImplemented = lazy(() => import('../pages/Errors/501'));

export const registrarRoute = (
  <Route path="registrar" element={<Outlet />}>
    <Route path="" element={<Navigate to={'/dashboard'} />} />
    <Route
      path="agricultor"
      element={
        <Suspense fallback={<AgricultorRegistrarSkeleton />}>
          <LazyAgricultorRegistrar />
        </Suspense>
      }
    />
    <Route
      path="dependente"
      element={
        <Suspense fallback={<ErrorSkeleton />}>
          <LazyNotImplemented />
        </Suspense>
      }
    />
    <Route
      path="maquina"
      element={
        <Suspense fallback={<ErrorSkeleton />}>
          <LazyNotImplemented />
        </Suspense>
      }
    />
    <Route
      path="implemento"
      element={
        <Suspense fallback={<ErrorSkeleton />}>
          <LazyNotImplemented />
        </Suspense>
      }
    />
  </Route>
);
