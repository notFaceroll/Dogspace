import React, { useEffect } from 'react';
import { PHOTOS_GET } from '../../../api';
import useFetch from '../../../hooks/useFetch';
import Loading from '../../utils/Loading';
import Image from '../../utils/Image';

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


const FeedGrid: React.FC<{ page?: number, user:number , setModalPhoto: React.Dispatch<React.SetStateAction<IPhoto | null>>, setInfinite: React.Dispatch<React.SetStateAction<boolean>>}> = ({ page = 1, user, setModalPhoto, setInfinite }) => {

  const { data, error, isLoading, makeRequest } = useFetch();

  useEffect(() => {
    (async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page, total: 3, user });
      const { response, json } = await makeRequest(url, options);

      if (response && response.ok && json.length < 3) {
        setInfinite(false);
      }
    })();
  }, [user, makeRequest, page, setInfinite]);

  function handleOpenPhotoModal(photo: IPhoto) {
    setModalPhoto(photo);
  };

  if (error) {
    return <p>{error}</p>
  };

  if (isLoading) {
    return <Loading />;
  };

  return (
    <PhotoList className='slideRight'>
      {data?.map((photo: IPhoto) => (
        <PhotoItem
          key={photo.id}
          onClick={() => handleOpenPhotoModal(photo)}
        >
          <Image src={photo.src} alt={photo.title}/>
          {/* <img src={photo.src} alt={photo.title} /> */}
          <span>{photo.acessos}</span>
        </PhotoItem>
      ))}
    </PhotoList>
  );
}

export default FeedGrid;
