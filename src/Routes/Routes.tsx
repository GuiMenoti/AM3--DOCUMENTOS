import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from '../App';
import { PrivateRoute } from '../Guards/PrivateRoute';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Suspense, lazy } from 'react';
import { AgricultorConsultarSkeleton } from '../Skeletons/Agricultor.consultar.skeleton';
import { Login } from '../pages/Login/Login';
import { ErrorSkeleton } from '../Skeletons/Error.skeleton';
import { consultarRoute } from './consultar.route';
import { registrarRoute } from './registrar.route';

const LazyHelp = lazy(() => import('../pages/Help/Help'));
const LazyNotFound = lazy(() => import('../pages/Errors/404'));

export const routes = createRoutesFromElements(
  <Route path={'/'} element={<App />}>
    <Route index element={<Navigate to={'/dashboard'} />} />
    <Route
      path={'dashboard'}
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    >
      <Route
        index
        element={<Navigate to={'/dashboard/consultar/agricultor'} />}
      />
      {consultarRoute}
      {registrarRoute}
      <Route
        path="ajuda"
        element={
          <Suspense fallback={<AgricultorConsultarSkeleton />}>
            <LazyHelp />
          </Suspense>
        }
      />
    </Route>
    <Route path="login" element={<Login />} />
    <Route
      path="*"
      element={
        <Suspense fallback={<ErrorSkeleton />}>
          <LazyNotFound />
        </Suspense>
      }
    />
  </Route>
);

export const browserRouter = createBrowserRouter(routes);
