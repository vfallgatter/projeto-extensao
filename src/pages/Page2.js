import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #2d2d2d; 
  color: ${({ theme }) => theme.text};
  flex-direction: column;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; 
  padding: 2rem;
  border-radius: 10px;
  background: #2d2d2d; 
  width: 100%;
  max-width: 500px;
  border: none; 
`;

const Input = styled.input`
  padding: 1rem; 
  border: 2px solid #d4af37; 
  border-radius: 5px;
  font-size: 18px; 
  font-style: ${({ hasValue }) => (hasValue ? 'normal' : 'italic')};
  color: ${({ hasValue, theme }) => (hasValue ? theme.text : '#888')};
  background: #2d2d2d; 
  width: 100%; 
  appearance: none; 
  -webkit-appearance: none; 
`;

const TextArea = styled.textarea`
  padding: 1rem; 
  border: 2px solid #d4af37; 
  border-radius: 5px;
  font-size: 18px; 
  width: 100%; 
  background: #2d2d2d; 
  color: ${({ hasValue }) => (hasValue ? '#fff' : '#888')}; 
  font-style: ${({ hasValue }) => (hasValue ? 'normal' : 'italic')};
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.highlight};
  color: ${({ theme }) => theme.body};
  cursor: pointer;
  font-size: 18px; 
  transition: 0.3s;
  text-align: center;

  &:hover {
    background: ${({ theme }) => theme.highlight};
    color: ${({ theme }) => theme.body};
  }
`;

const ToggleButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ToggleButton = styled.div`
  position: relative;
  width: 70px; 
  height: 40px;
  background-color: ${({ isActive, theme }) => (isActive ? theme.highlight : '#ccc')};
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    top: 4px;
    left: ${({ isActive }) => (isActive ? '50%' : '4px')};
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50%;
    transition: left 0.3s ease;
  }
`;

const Page2 = () => {
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
  const [isActive, setIsActive] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount <= 0) {
      alert('Valor inválido. O valor deve ser maior que 0.');
      return;
    }
    // Lógica para processar a entrada
    console.log(`Adicionar: ${amount}, Motivo: ${reason}`);
    setAmount('');
    setReason('');
  };

  return (
    <Container>
      <h1 style={{ color: '#fff', marginBottom: '20px', fontSize: '30px' }}>Adicionar Fundos</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="number"
          placeholder="Valor a se adicionar"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          hasValue={amount !== ''}
          required
        />
        <TextArea
          placeholder="Motivo da adição"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          hasValue={reason !== ''}
          required
        />
        <ToggleButtonContainer>
          <ToggleButton
            isActive={isActive}
            onClick={() => setIsActive(!isActive)}
          />
          <span style={{ fontSize: '18px' }}>Agendar pagamento</span>
        </ToggleButtonContainer>
        <Button type="submit">Confirmar Adição</Button>
      </Form>
    </Container>
  );
};

export default Page2;
