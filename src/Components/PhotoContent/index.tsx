import React from 'react';
import { Link } from 'react-router-dom';
import { IData } from '../../hooks/useFetch';
import { IPhoto } from '../Feed/FeedGrid';
import { Title } from '../Title';
import PhotoComments from './PhotoComments';

import { Container } from './styles';

const PhotoContent: React.FC<any> = ({ data }) => {
  const { comments } = data;
  const photo: IPhoto = data.photo;

  return (
    <Container>
      <div className='img'>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className='details'>
        <div>
          <p className='author'>
            <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
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
      {/* @ts-ignore */}
      <PhotoComments id={photo.id} comments={comments}/>
    </Container>
  );
}

export default PhotoContent;
