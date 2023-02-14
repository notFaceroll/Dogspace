import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PHOTO_DELETE } from '../../api';
import { UserContext } from '../../context/UserContext';
import useFetch from '../../hooks/useFetch';
import { IPhoto } from '../Feed/FeedGrid';
import { Title } from '../Title';
import Image from '../utils/Image';
import PhotoComments from './PhotoComments';

import { Container, PhotoDeleteButton } from './styles';

const PhotoContent: React.FC<any> = ({ data, single = false }) => {
  const { isLoading, makeRequest } = useFetch();
  const user = useContext(UserContext);
  const { comments } = data;
  const photo: IPhoto = data.photo;

  async function handlePhotoDelete() {
    const confirm = window.confirm("Tem certeza que deseja deletar essa foto?");
    if (confirm) {
      const token = window.localStorage.getItem('token');

      if (token) {
        const { url, options } = PHOTO_DELETE(photo.id, token)
        const { response } = await makeRequest(url, options);

        if (response.ok) {
          window.location.reload();
        }
      }
    }
  }


  return (
    <Container single={single}>
      <div className='img'>
        <Image src={photo.src} alt={photo.title}/>
        {/* <img src={photo.src} alt={photo.title} /> */}
      </div>
      <div className='details'>
        <div>
          <p className='author'>
            {user.data && user.data.username === photo.author ? (
              <PhotoDeleteButton
                disabled={isLoading}
                onClick={handlePhotoDelete}
              >
                {isLoading ? "Deletando" : "Deletar"}
              </PhotoDeleteButton>
            ) : (
              <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className='views'>{photo.acessos}</span>
          </p>
          <Title>
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </Title>
          <ul className='attributes'>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} {photo.idade > '1' ? 'Anos' : 'Ano'}</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} single={single} />
    </Container>
  );
}

export default PhotoContent;
