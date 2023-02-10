import React, { useContext } from 'react';
import { USER_POST } from '../../../api';
import Button from '../../../Components/Button';
import FormGroup from '../../../Components/FormGroup';
import { StyledInput } from '../../../Components/Input/styles';
import { Title } from '../../../Components/Title';
import { UserContext } from '../../../context/UserContext';
import useFetch from '../../../hooks/useFetch';
import useForm from '../../../hooks/useForm';
import { FormTitle } from '../LoginForm/styles';

import { Container } from './styles';

const LoginCreate: React.FC = () => {
  const username = useForm();
  const password = useForm();
  const email = useForm('email');

  const { userLogin } = useContext(UserContext);
  const { isLoading, error, makeRequest } = useFetch();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await makeRequest(url, options);

    if (response?.ok) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <Container>
      <Title>Cadastre-se</Title>

      <form action="" onSubmit={handleSubmit}>
        <FormGroup label='username' error={username.error}>
          <StyledInput
            id="username"
            type='text'
            onChange={username.onChange}
            onBlur={username.onBlur}
            value={username.value}
          />
        </FormGroup>
        <FormGroup label='email' error={email.error}>
          <StyledInput
            id='email'
            type='email'
            onChange={email.onChange}
            onBlur={email.onBlur}
            value={email.value}
          />
        </FormGroup>
        <FormGroup label='password' error={password.error}>
          <StyledInput
            type='password'
            onChange={password.onChange}
            onBlur={password.onBlur}
            value={password.value}
          />
        </FormGroup>
        <Button
          disabled={isLoading}
          type='submit'>
          {isLoading ? 'Cadastrando...' : 'Cadastrar'}
        </Button>
        {error && <p>{error}</p>}
      </form>

    </Container>
  );
}

export default LoginCreate;
