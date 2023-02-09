import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PHOTO_POST } from '../../../api';
import Button from '../../../Components/Button';
import FormGroup from '../../../Components/FormGroup';
import { StyledInput } from '../../../Components/Input/styles';
import useFetch from '../../../hooks/useFetch';
import useForm from '../../../hooks/useForm';

import { Container } from './styles';


const UserPhotoPost: React.FC = () => {
  const [img, setImg] = useState<any>({});
  const navigate = useNavigate();


  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');

  const { data, error, isLoading, makeRequest } = useFetch();

  useEffect(() => {
    if (data) navigate('/account');
  }, [data, navigate])

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
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    })
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormGroup label='Nome' error={nome.error}>
          <StyledInput
            id='nome'
            type='text'
            value={nome.value}
            onChange={nome.onChange}
            onBlur={nome.onBlur}
          />
        </FormGroup>
        <FormGroup label='Peso' error={peso.error}>
          <StyledInput
            id='peso'
            type='number'
            value={peso.value}
            onChange={peso.onChange}
            onBlur={peso.onBlur} />
        </FormGroup>
        <FormGroup label='Idade' error={idade.error}>
          <StyledInput
            id='idade'
            type='number'
            value={idade.value}
            onChange={idade.onChange}
            onBlur={idade.onBlur} />
        </FormGroup>
        <FormGroup label='Foto'>
          <input
            className='file'
            type="file"
            name="img"
            id="img"
            onChange={handleImgChange}
          />
        </FormGroup>
        <Button
          disabled={isLoading}
          type='submit'>
          {isLoading ? 'Enviando...' : 'Enviar'}
        </Button>
      </form>
      <div>
        {img.preview && (
          <div
            className='preview'
            style={
              {
                background: `url('${img.preview}') center center`,
                backgroundSize: 'cover'
              }
            }
          >
          </div>
        )
        }
      </div>
    </Container>
  );
}

export default UserPhotoPost;
