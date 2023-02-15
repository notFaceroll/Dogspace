import React from 'react';
import { Title } from '../../Components/Title';

import { Container } from './styles';

const NotFound: React.FC = () => {
  return (
    <Container>
      <Title>Erro 404</Title>
      <p>Página não encontrada!</p>
    </Container>
  );
}

export default NotFound;
