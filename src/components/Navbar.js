import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.body};
  flex-direction: row;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Logo = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.highlight};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.highlight};
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
`;

const Navbar = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <Nav>
      <LogoContainer>
        <Logo>Cash Manager</Logo>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </LogoContainer>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/page1">Análise de Gastos</NavLink>
        <NavLink to="/page2">Adicionar Fundo</NavLink>
        <NavLink to="/page3">Retirar Fundo</NavLink>
        <NavLink to="/page4">Gerenciamento de Gastos</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;