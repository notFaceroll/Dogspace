import React, { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Loading from './Loading';

interface ProtectedRouteProps {
  children?: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {

  const { isUserLoggedIn, isLoading } = useContext(UserContext);


  return isUserLoggedIn ? (
    <>
      {children}
    </>
  ) : (
    <Navigate to='/' />
  );
}

export default ProtectedRoute;
