import { Suspense, lazy } from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';
import { AgricultorConsultarSkeleton } from '../Skeletons/Agricultor.consultar.skeleton';
import { ProfileSkeleton } from '../Skeletons/Profile.skeleton';
import { ErrorSkeleton } from '../Skeletons/Error.skeleton';

const LazyAgricultorProfileEdit = lazy(
  () => import('../pages/Profile/Edit/Agricultor.profile.edit')
);

const LazyAgricultorProfileView = lazy(
  () => import('../pages/Profile/View/Agricultor.profile.view')
);

const LazyAgricultorArchives = lazy(
  () => import('../pages/Archives/AgricultorArchives')
);

const LazyAgricultorConsultar = lazy(
  () => import('../pages/Consultar/Agricultor.consultar')
);

const LazyNotImplemented = lazy(() => import('../pages/Errors/501'));

export const consultarRoute = (
  <Route path="consultar" element={<Outlet />}>
    <Route index element={<Navigate to={'agricultor'} />} />
    <Route path="agricultor" element={<Outlet />}>
      <Route
        path=""
        element={
          <Suspense fallback={<AgricultorConsultarSkeleton />}>
            <LazyAgricultorConsultar />
          </Suspense>
        }
      />
      <Route path="ver" element={<Outlet />}>
        <Route index element={<Navigate to={'../'} />} />
        <Route path=":id" element={<Outlet />}>
          <Route
            index
            element={
              <Suspense fallback={<ProfileSkeleton />}>
                <LazyAgricultorProfileView />
              </Suspense>
            }
          />
          <Route
            path="arquivos"
            element={
              <Suspense fallback={<ProfileSkeleton />}>
                <LazyAgricultorArchives />
              </Suspense>
            }
          />
        </Route>
      </Route>
      <Route path="editar" element={<Outlet />}>
        <Route index element={<Navigate to={'../'} />} />
        <Route
          path=":id"
          element={
            <Suspense fallback={<ProfileSkeleton />}>
              <LazyAgricultorProfileEdit />
            </Suspense>
          }
        />
      </Route>
    </Route>
    <Route path="dependente" element={<Outlet />}>
      <Route
        path=""
        element={
          <Suspense fallback={<ErrorSkeleton />}>
            <LazyNotImplemented />
          </Suspense>
        }
      />
      {/* <Route path="ver" element={<Outlet />}>
        <Route path=":id" />
      </Route>
      <Route path="editar" element={<Outlet />}>
        <Route path=":id" />
      </Route> */}
    </Route>
    <Route
      path="maquina"
      element={
        <Suspense fallback={<ErrorSkeleton />}>
          <LazyNotImplemented />
        </Suspense>
      }
    >
      {/* <Route path="" />
      <Route path="ver" element={<Outlet />}>
        <Route path=":id" />
      </Route>
      <Route path="editar" element={<Outlet />}>
        <Route path=":id" />
      </Route> */}
    </Route>
    <Route
      path="implemento"
      element={
        <Suspense fallback={<ErrorSkeleton />}>
          <LazyNotImplemented />
        </Suspense>
      }
    >
      {/* <Route path="ver" element={<Outlet />}>
        <Route path=":id" />
      </Route>
      <Route path="editar" element={<Outlet />}>
        <Route path=":id" />
      </Route> */}
    </Route>
  </Route>
);
