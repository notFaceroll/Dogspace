import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TOKEN_POST, USER_GET } from '../../../api';
import Button from '../../../Components/Button';
import { StyledButton } from '../../../Components/Button/styles';
import FormGroup from '../../../Components/FormGroup';
import { StyledInput } from '../../../Components/Input/styles';

import useForm from '../../../hooks/useForm';

import { Container } from './styles';

const LoginForm: React.FC = () => {
  const username = useForm();
  const password = useForm();

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (token) {
      getUser(token);
    }
  }, [])

  async function getUser(token: string) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const data = await response.json();
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value
      })

      const response = await fetch(url, options);
      const data = await response.json();
      window.localStorage.setItem('token', data.token);

      console.log({ data });
      return data;

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
