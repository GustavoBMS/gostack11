import React, { ButtonHTMLAttributes } from 'react'

// Quando nao for alterar nada pode usar type ao inves de interface
type ButtonsProps = ButtonHTMLAttributes<HTMLButtonElement>;

import { Container } from './styles';

const Button: React.FC<ButtonsProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      {children}
    </Container>
  )
}

export default Button;
