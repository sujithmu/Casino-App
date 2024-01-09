import { useContext } from 'react';
import { AuthContext } from '../state/auth-context';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const {
    player: { username },
  } = useContext(AuthContext);

  return username ? <Outlet /> : <Navigate to='/' replace />;
};

export default PrivateRoute;
