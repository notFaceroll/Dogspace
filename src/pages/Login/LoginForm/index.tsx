import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Components/Button';
import { StyledButton } from '../../../Components/Button/styles';
import FormGroup from '../../../Components/FormGroup';
import { StyledInput } from '../../../Components/Input/styles';

import { Container } from './styles';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      }
    ).then((response) => {
      console.log({ response });
      return response.json();
    }).then((json) => {
      console.log(json);
    });
  }

  return (
    <Container>
      <h1>Login</h1>
      <form action='' onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor='username'>Username</label>
          <StyledInput
            id='username'
            type='text'
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor='password'>Password</label>
          <StyledInput
            id='password'
            type='password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </FormGroup>
        <Button type='submit'>Entrar</Button>
      </form>
      <Link to="/login/create">Criar</Link>
    </Container>
  );
}

export default LoginForm;
