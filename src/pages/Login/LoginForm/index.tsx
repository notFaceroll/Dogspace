import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TOKEN_POST, USER_GET } from '../../../api';
import Button from '../../../Components/Button';
import { StyledButton } from '../../../Components/Button/styles';
import FormGroup from '../../../Components/FormGroup';
import { StyledInput } from '../../../Components/Input/styles';
import { UserContext } from '../../../context/UserContext';

import useForm from '../../../hooks/useForm';

import { Container } from './styles';

const LoginForm: React.FC = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin } = useContext(UserContext);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
        userLogin(username.value, password.value);
      }
  }

  return (
    <Container>
      <h1>Login</h1>
      <form action='' onSubmit={handleSubmit}>

        <FormGroup error={username.error}>
          <label htmlFor='username'>Username</label>
          <StyledInput
            id='username'
            type='text'
            value={username.value}
            onChange={username.onChange}
            onBlur={username.onBlur}
          />
        </FormGroup>

        <FormGroup error={password.error}>
          <label htmlFor='password'>Password</label>
          <StyledInput
            id='password'
            type='password'
            value={password.value}
            onChange={password.onChange}
            onBlur={password.onBlur}
          />
        </FormGroup>
        <Button type='submit'>Entrar</Button>
      </form>
      <Link to="/login/create">Criar</Link>
    </Container>
  );
}

export default LoginForm;
