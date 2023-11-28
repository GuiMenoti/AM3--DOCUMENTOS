import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/useAuth';

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const { access_token } = useAuth();

  return <>{access_token ? children : <Navigate to={'/login'} />}</>;
}
