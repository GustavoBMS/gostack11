import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './styles';

// Quando nao for alterar nada pode usar type ao inves de interface
type ButtonsProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonsProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      {children}
    </Container>
  )
}

export default Button;
