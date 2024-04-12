import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

const PrivateRoutes = () => {
  const { isLoggedIn, loading } = useAuth();
  if (loading) {
    return null;
  }
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
