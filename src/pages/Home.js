import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #000000; 
`;

const LeftSection = styled.div`
  width: 45%;
  margin-left: 40px;
`;

const RightSection = styled.div`
  width: 45%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const Ballon = styled.div`
  background: ${({ bgColor }) => bgColor || '#3c3c3c'};
  border: 2px solid ${({ borderColor }) => borderColor || '#3c3c3c'};
  padding: 1rem;
  border-radius: 15px;
  width: 40%; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const BalanceTitle = styled.div`
  color: #fff;
  font-size: 34px; 
  font-weight: bold;
`;

const BalanceAmount = styled.div`
  color: #d4af37; 
  font-size: 30px; 
  font-weight: bold;
`;

const EyeIcon = styled.i`
  font-size: 24px;
  cursor: pointer;
  color: #d4af37;
`;

const ActionButton = styled(Link)`
  text-decoration: none;
  color: #fff;
  background-color: #3c3c3c;
  padding: 1rem;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  height: 80px; 
  align-items: center;
  justify-content: space-around;
  transition: background-color 0.3s ease;
  margin-right: 100px;

  &:hover {
    background-color: #d4af37; 
  }

  &:hover i {
    color: #fff; 
  }
`;

const Icon = styled.i`
  font-size: 24px;
  color: #d4af37; 
  width: 50px; 
  height: 50px; 
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.3s ease;
`;

const ButtonTitle = styled.div`
  color: #fff;
  font-size: 14px;
`;

const Home = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [balance, setBalance] = useState(5000); {/* PRA QUEM FOR FAZERO BACK, AQUI É A VARIAVEL DO SALDO*/ }

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  return (
    <Container>
      <LeftSection>
        <Ballon bgColor="#3c3c3c">
          <div>
            <BalanceTitle>Saldo Atual</BalanceTitle>
            <BalanceAmount>
              {showBalance ? `R$ ${balance}` : '******'}
            </BalanceAmount>
          </div>
          <EyeIcon
            className={`fas ${showBalance ? 'fa-eye' : 'fa-eye-slash'}`}
            onClick={toggleBalanceVisibility}
          />
        </Ballon>
      </LeftSection>

      <RightSection>
        <ActionButton to="/page3">
          <Icon className="fas fa-minus-circle" />
          <ButtonTitle>Remover Fundos</ButtonTitle>
        </ActionButton>

        <ActionButton to="/page2">
          <Icon className="fas fa-plus-circle" />
          <ButtonTitle>Adicionar Fundos</ButtonTitle>
        </ActionButton>

        <ActionButton to="/page1">
          <Icon className="fas fa-chart-line" />
          <ButtonTitle>Análise de Gastos</ButtonTitle>
        </ActionButton>

        <ActionButton to="/page4">
          <Icon className="fas fa-dollar-sign" />
          <ButtonTitle>Gerencie seus Gastos</ButtonTitle>
        </ActionButton>
      </RightSection>
    </Container>
  );
};

export default Home;
