import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  let noToken = window.localStorage.getItem('authToken');

  if (!noToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
