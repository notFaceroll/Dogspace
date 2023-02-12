import React, { useState } from 'react';

import { Container, Skeleton } from './styles';

const Image: React.FC<{ alt: string, src: string }> = ({ alt, src }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ currentTarget }: React.SyntheticEvent<HTMLImageElement>) {
    currentTarget.style.opacity = '1';
    setSkeleton(false);
  };

  return (
    <Container>
      {skeleton && <Skeleton />}
      <img onLoad={handleLoad} src={src} alt={alt} />
    </Container>
  );
}

export default Image;
