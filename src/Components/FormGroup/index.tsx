import React, { ReactNode } from 'react';

import { Container } from './styles';

interface FormGroupProps {
  children: ReactNode;
  error: string | null
}

const FormGroup: React.FC<FormGroupProps> = ({ children, error }) => {
  return (
    <Container>
      {children}
      {error && <small className='error'>{error}</small>}
    </Container>
  );
}

export default FormGroup;
