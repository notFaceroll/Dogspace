import React, { ReactNode } from 'react';

import { Container } from './styles';

interface FormGroupProps {
  children: ReactNode;
}

const FormGroup: React.FC<FormGroupProps> = ({children}) => {
  return (
    <Container>
      {children}
      <small className='error'>Error</small>
    </Container>
  );
}

export default FormGroup;
