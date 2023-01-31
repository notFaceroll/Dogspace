import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

// import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='create' element={<LoginCreate />} />
        <Route path='lost' element={<LoginPasswordLost />} />
        <Route path='reset' element={<LoginPasswordReset />} />
      </Routes>
    </div>);
}

export default Login;
