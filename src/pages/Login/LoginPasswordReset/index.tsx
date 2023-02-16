import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PASSWORD_RESET } from '../../../api';
import Button from '../../../Components/Button';
import FormGroup from '../../../Components/FormGroup';
import { StyledInput } from '../../../Components/Input/styles';
import { Title } from '../../../Components/Title';
import useFetch from '../../../hooks/useFetch';
import useForm from '../../../hooks/useForm';

import { Container } from './styles';

const LoginPasswordReset: React.FC = () => {
  const [login, setLogin] = useState<string>('');
  const [key, setKey] = useState<string>('');
  const password = useForm();
  const { error, isLoading, makeRequest } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key) setKey(key);
    if (login) setLogin(login);

  }, [])

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const { url, options } = PASSWORD_RESET({
      login,
      key,
      password: password.value,
    });

    const { response } = await makeRequest(url, options);
    if (response.ok) navigate('/login');
  }

  return (
    <Container className='slideRight'>
      <Title>Reset sua senha</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup label='Nova Senha' error={password.error}>
          <StyledInput
            id='password'
            type='text'
            onChange={password.onChange}
            onBlur={password.onBlur}
            value={password.value}
          />
        </FormGroup>
        {error && <p>{error}</p>}
        <Button disabled={isLoading}>
          {isLoading ? 'Resetando...' : 'Resetar'}
        </Button>
      </form>
    </Container>
  );
}

export default LoginPasswordReset;
