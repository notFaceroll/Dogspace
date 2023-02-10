import React, { useEffect } from 'react';
import { PHOTO_GET } from '../../../api';
import useFetch from '../../../hooks/useFetch';
import PhotoContent from '../../PhotoContent';
import Loading from '../../utils/Loading';
import { IPhoto } from '../FeedGrid';

import { Container } from './styles';

interface FeedModalProps {
  photo: IPhoto;
  setModalPhoto: React.Dispatch<React.SetStateAction<IPhoto | null>>
}

const FeedModal: React.FC<FeedModalProps> = ({ photo, setModalPhoto }) => {
  const { data, error, isLoading, makeRequest } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    makeRequest(url, options);
  }, [photo, makeRequest])

  function handleCloseModal(event: React.MouseEvent<HTMLElement>) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <Container onClick={handleCloseModal}>
      {error && <p>{error}</p>}
      {isLoading && <Loading />}
      {data && <PhotoContent data={data}/>}
    </Container>
  );
}

export default FeedModal;
