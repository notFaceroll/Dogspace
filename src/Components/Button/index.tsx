import React, { ReactNode } from 'react';

import { StyledButton } from './styles';

interface ButtonProps {
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, type, disabled = false }) => {
  return (
    <StyledButton disabled={disabled} type={type}>{children}</StyledButton>
  );
}

export default Button;
