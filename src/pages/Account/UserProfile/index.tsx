import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../../../Components/Feed';
import { Title } from '../../../Components/Title';
import Head from '../../../Components/utils/Head';

import { Container } from './styles';

const UserProfile: React.FC = () => {
  const { user } = useParams();
  return (
    <Container>
      <Head title={user} description='Perfil do usuário.'/>
      <Title>{user}</Title>
      <Feed user={user} />
    </Container>
  );
}

export default UserProfile;
