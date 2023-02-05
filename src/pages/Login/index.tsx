import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../context/UserContext';

import { Container } from './styles';

const Login: React.FC = () => {
  const { isUserLoggedIn } = useContext(UserContext);

  if (isUserLoggedIn) {
    console.log({ isUserLoggedIn });

    return <Navigate to='/account' />
  }

  return (
    <Container>
      <div className='forms'>
        <Routes>
          <Route index element={<LoginForm />} />
          <Route path='create' element={<LoginCreate />} />
          <Route path='lost' element={<LoginPasswordLost />} />
          <Route path='reset' element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </Container>
  );
}

export default Login;
