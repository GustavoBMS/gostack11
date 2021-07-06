import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
    <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Faça seu Cadastro</h1>

          <Input 
            icon={FiUser}
            name="name"
            placeholder="Nome"
            type="text" 
          />

          <Input 
            icon={FiMail}
            name="email"
            placeholder="E-mail"
            type="email" 
          />

          <Input 
            icon={FiLock}
            name="password"
            type="password" 
            placeholder="Senha"
          />
          
          <Button type="submit">Cadastrar</Button>

        </form>

        <a href="login">
          <FiArrowLeft />
          Voltar para Logon
        </a>
      </Content>
    </Container>
  )
}

export default SignUp
