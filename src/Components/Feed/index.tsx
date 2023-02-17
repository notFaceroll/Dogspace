import React, { useEffect, useState } from 'react';
import FeedGrid, { IPhoto } from './FeedGrid';
import FeedModal from './FeedModal';

import { Container } from './styles';

const Feed: React.FC<{ user?: number | string, home?: boolean}> = ({ user = 0, home }) => {
  const [modalPhoto, setModalPhoto] = useState<IPhoto | null>(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * .75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;

          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);

    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    }
  }, [infinite]);

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
      {pages.map((page: number) => (
        <FeedGrid
        key={page}
        user={user}
        page={page}
        setModalPhoto={setModalPhoto}
        setInfinite={setInfinite}
        />
      ))}
      {!infinite && home && (
        <Container>
          <p>&#8212; As fotos acabaram por aqui. :&#40; Poste mais fotos! &#8212;</p>
        </Container>
      )}
    </div>
  );
}

export default Feed;
