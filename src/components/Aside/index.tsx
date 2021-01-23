import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Container,
          Header,
          LogoImg,
          Title,
          MenuContainer,
          MenuItemLink } from './styles';

import { MdDashboard,
          MdArrowDownward, 
          MdArrowUpward, 
          MdExitToApp } from 'react-icons/md';

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={logoImg} alt="Logo Minha Carteira" />
        <Title >Minha carteira</Title>
      </Header>
      <MenuContainer>
        <MenuItemLink href="#">
          <MdDashboard/>
          Dashboard
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdArrowUpward/>
          Entrada
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdArrowDownward/>
          Saída
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdExitToApp/>
          Sair
        </MenuItemLink>

      </MenuContainer>

    </Container>
  )
}

export default Aside;