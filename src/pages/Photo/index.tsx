import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PHOTO_GET } from '../../api';
import PhotoContent from '../../Components/PhotoContent';
import Loading from '../../Components/utils/Loading';
import useFetch from '../../hooks/useFetch';

import { Container } from './styles';

const Photo: React.FC = () => {
  const { id } = useParams();
  const { data, error, isLoading, makeRequest } = useFetch();

  useEffect(() => {
    if (id) {
      const { url, options } = PHOTO_GET(id);
      makeRequest(url, options);
    }
  }, [makeRequest, id]);

  if (error) {
    return <p>{error}</p>
  }

  if (isLoading) {
    return <Loading />
  }

  if (data) {
    return (
      <Container>
        <PhotoContent data={data} single />
      </Container>
    );
  } else {
    return null;
  }
}

export default Photo;
