import React from 'react';
import { PASSWORD_LOST } from '../../../api';
import Button from '../../../Components/Button';
import FormGroup from '../../../Components/FormGroup';
import { StyledInput } from '../../../Components/Input/styles';
import { Title } from '../../../Components/Title';
import useFetch from '../../../hooks/useFetch';
import useForm from '../../../hooks/useForm';

import { Container } from './styles';

const LoginPasswordLost: React.FC = () => {

  const email = useForm();
  const { data, isLoading, error, makeRequest } = useFetch();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (email.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: email.value,
        url: window.location.href.replace('lost', 'reset'),
      });
      const { json } = await makeRequest(url, options);
      console.log(json);
    }

  }

  return (
    <Container className='slideRight'>
      <Title>Perdeu a senha?</Title>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <FormGroup label='email/usuário' error={email.error}>
            <StyledInput
              id='email'
              type='text'
              onChange={email.onChange}
              onBlur={email.onBlur}
              value={email.value}
            />
          </FormGroup>
          <Button disabled={isLoading}>
            {isLoading ? 'Enviando...' : 'Enviar e-mail'}
          </Button>
        </form>
      )}

      {error && <p>{error}</p>}
    </Container>
  );
}

export default LoginPasswordLost;
