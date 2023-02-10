import React, { useEffect, useState } from 'react';
import FeedGrid, { IPhoto } from './FeedGrid';
import FeedModal from './FeedModal';

// import { Container } from './styles';

const Feed: React.FC = () => {
  const [modalPhoto, setModalPhoto] = useState<IPhoto | null>(null);

  useEffect(() => {
    console.log(modalPhoto)
  }, [modalPhoto]);

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
      <FeedGrid setModalPhoto={setModalPhoto} />
    </div>
  );
}

export default Feed;
