import React from 'react';
import dogs from '../../assets/dogs-footer.svg';
import Image from '../utils/Image';
import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Image src={dogs} alt="Footer logo" />
      <p>Dogs. Alguns direitos reservados.</p>
    </Container>
  );
}

export default Footer;
