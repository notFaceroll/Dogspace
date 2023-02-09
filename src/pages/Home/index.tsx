import React from 'react';
import Feed from '../../Components/Feed';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Feed />
    </Container>
  );
}

export default Home;
