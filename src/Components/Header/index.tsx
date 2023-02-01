import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import dogs from '../../assets/dogs.svg';
import { UserContext } from '../../context/UserContext';

const Header: React.FC = () => {

  const { data } = useContext(UserContext);

  return (
    <Container>
      <nav className='container'>
        <Link to='/' aria-label='Dogs - Home' className='logo'>
          <img src={dogs} alt="Dog" />
        </Link>
        {data ? (
          <Link to='/account' className='login'>{data.nome}</Link>
        ) : (
          <Link to='/login' className='login'>Login / Criar</Link>
        )}
      </nav>
    </Container>
  );
}

export default Header;
