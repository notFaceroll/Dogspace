import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import dogs from '../../assets/dogs.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <nav className='container'>
        <Link to='/' aria-label='Dogs - Home' className='logo'>
          <img src={dogs} alt="Dog" />
        </Link>
        <Link to='/login' className='login'>Login / Criar</Link>
      </nav>
    </Container>
  );
}

export default Header;
