import React from 'react';
import Feed from '../../Components/Feed';
import Loading from '../../Components/utils/Loading';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Feed />
      {/* <Loading /> */}
    </Container>
  );
}

export default Home;
