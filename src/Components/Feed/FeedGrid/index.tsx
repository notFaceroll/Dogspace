import React, { useEffect } from 'react';
import { PHOTOS_GET } from '../../../api';
import useFetch from '../../../hooks/useFetch';
import Loading from '../../utils/Loading';

import { PhotoList, PhotoItem } from './styles';

export interface IPhoto {
  acessos: string;
  author: string;
  date: string;
  id: number;
  idade: string;
  peso: string;
  src: string;
  title: string;
  total_comments: string;
}


const FeedGrid: React.FC<{ setModalPhoto: React.Dispatch<React.SetStateAction<IPhoto | null>> }> = ({ setModalPhoto }) => {
  const { data, error, isLoading, makeRequest } = useFetch();

  useEffect(() => {
    (async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await makeRequest(url, options);
      console.log(json);
    })();
  }, [])

  function handleOpenPhotoModal(photo: IPhoto) {
    setModalPhoto(photo)
  }

  if (error) {
    return <p>{error}</p>
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <PhotoList className='slideRight'>
      {data?.map((photo: IPhoto) => (
        <PhotoItem
          key={photo.id}
          onClick={() => handleOpenPhotoModal(photo)}
        >
          <img src={photo.src} alt={photo.title} />
          <span>{photo.acessos}</span>
        </PhotoItem>
      ))}
    </PhotoList>
  );
}

export default FeedGrid;
