import React from 'react';
import Feed from '../../Components/Feed';
import Head from '../../Components/utils/Head';
import Loading from '../../Components/utils/Loading';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Head title='Fotos' description='Home page do site Dogs, com o feed de fotos.'/>
      <Feed />
    </Container>
  );
}

export default Home;
