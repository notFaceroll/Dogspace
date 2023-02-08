import React, { useState } from 'react';
import { PHOTO_POST } from '../../../api';
import Button from '../../../Components/Button';
import FormGroup from '../../../Components/FormGroup';
import { StyledInput } from '../../../Components/Input/styles';
import useFetch from '../../../hooks/useFetch';
import useForm from '../../../hooks/useForm';

import { Container } from './styles';


const UserPhotoPost: React.FC = () => {
  const [img, setImg] = useState<{ raw: string }>({ raw: '' });

  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');

  const { data, error, isLoading, makeRequest } = useFetch();

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('idade', idade.value);
    formData.append('peso', peso.value);

    const token = window.localStorage.getItem('token');

    if (token) {
      const { url, options } = PHOTO_POST(formData, token);
      makeRequest(url, options);
    }
  }

  function handleImgChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (!target.files) return;

    setImg({
      // @ts-ignore
      raw: target.files[0],
    })
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormGroup label='Nome'>
          <StyledInput
            id='nome'
            type='text'
            value={nome.value}
            onChange={nome.onChange}
            onBlur={nome.onBlur}
          />
        </FormGroup>
        <FormGroup label='Peso'>
          <StyledInput
            id='peso'
            type='text'
            value={peso.value}
            onChange={peso.onChange}
            onBlur={peso.onBlur} />
        </FormGroup>
        <FormGroup label='Idade'>
          <StyledInput
            id='idade'
            type='text'
            value={idade.value}
            onChange={idade.onChange}
            onBlur={idade.onBlur} />
        </FormGroup>
        <FormGroup label='Foto'>
          <input
            type="file"
            name="img"
            id="img"
            onChange={handleImgChange}
          />
        </FormGroup>
        <Button type='submit'>Enviar</Button>
      </form>
    </Container>
  );
}

export default UserPhotoPost;
