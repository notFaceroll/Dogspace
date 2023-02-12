import React, { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

interface ProtectedRouteProps {
  children?: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {

  const { isUserLoggedIn } = useContext(UserContext);

  return isUserLoggedIn ? (
    <>
      {children}
    </>
  ) : (
    <Navigate to='/' />
  );
}

export default ProtectedRoute;
