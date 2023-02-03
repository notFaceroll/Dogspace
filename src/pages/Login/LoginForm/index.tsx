import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Components/Button';
import FormGroup from '../../../Components/FormGroup';
import { StyledInput } from '../../../Components/Input/styles';
import { UserContext } from '../../../context/UserContext';
import useForm from '../../../hooks/useForm';

import { Container, RecoverPasswordLink, SignUpContainer, StyledLink } from './styles';

const LoginForm: React.FC = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, isLoading } = useContext(UserContext);

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

        <FormGroup error={username.error} label="username">
          <StyledInput
            id='username'
            type='text'
            value={username.value}
            onChange={username.onChange}
            onBlur={username.onBlur}
          />
        </FormGroup>

        <FormGroup error={password.error} label="password">
          <StyledInput
            id='password'
            type='password'
            value={password.value}
            onChange={password.onChange}
            onBlur={password.onBlur}
          />
        </FormGroup>
        <Button disabled={isLoading} type='submit'>Entrar</Button>
        {error && <p>{error}</p>}
      </form>
      <RecoverPasswordLink to="/login/reset">Perdeu a senha?</RecoverPasswordLink>
      <SignUpContainer>
        <h2>Cadastre-se!</h2>
        <p>Ainda não possui uma conta? Cadastre-se no site.</p>
        <StyledLink to="/login/create">Cadastro</StyledLink>
      </SignUpContainer>
    </Container>
  );
}

export default LoginForm;
