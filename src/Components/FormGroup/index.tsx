import React, { ReactNode } from 'react';

import { Container } from './styles';

interface FormGroupProps {
  children: ReactNode;
  error?: string | null;
  label: string;
}

const FormGroup: React.FC<FormGroupProps> = ({ children, error, label }) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      {children}
      {error && <small className='error'>{error}</small>}
    </Container>
  );
}

export default FormGroup;
