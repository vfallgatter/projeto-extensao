import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #000000; 
`;

const LeftSection = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const RightSection = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-top: 100px;
`;

const Title = styled.h1`
  color: #d4af37; 
  font-size: 40px;
`;

const Ballon = styled.div`
  background: ${({ bgColor }) => bgColor || '#2d2d2d'};
  border: 2px solid ${({ borderColor }) => borderColor || '#3c3c3c'};
  padding: 1rem;
  border-radius: 15px;
  width: ${({ width }) => width || '100%'};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EditButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #fff; 
`;

const PencilIcon = styled.i`
  font-size: 20px;
  margin-right: 10px;
  cursor: pointer;
  color: #ffffff; 
`;

const SubTitle = styled.div`
  font-size: 18px;
  font-style: italic;
`;

const AddButton = styled.div`
  background-color: #fff;
  color: #2d2d2d;
  border-radius: 50%;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: #2d2d2d;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ModalTitle = styled.h2`
  color: #d4af37;
  font-size: 24px;
`;

const ModalInput = styled.input`
  padding: 1rem;
  border: 2px solid #3c3c3c;
  background: #2d2d2d;
  color: white;
  border-radius: 5px;
  font-size: 18px;
  width: 85%;
`;

const ModalButton = styled.button`
  background: #d4af37;
  color: #2d2d2d;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const Page4 = () => {
  const [editingIncome, setEditingIncome] = useState(false);
  const [income, setIncome] = useState(3000); {/* AQUI É PRA POR A VAR DA RENDA MENSAL PRA QUEM FOR FAZER O BACK-END AI */}
  const [categoryData, setCategoryData] = useState([
    { name: 'Alimentação', value: 500 },
    { name: 'Transporte', value: 200 },
  ]);
  const [showModal, setShowModal] = useState(false);

  const handleEditIncome = () => {
    setEditingIncome(true);
  };

  const handleSaveIncome = () => {
    setEditingIncome(false);
  };

  const handleCategoryChange = (index, newValue) => {
    const newCategoryData = [...categoryData];
    newCategoryData[index].value = newValue;
    setCategoryData(newCategoryData);
  };

  const handleAddCategory = () => {
    setShowModal(true);
  };

  const handleAddNewCategory = (newCategoryName, newCategoryValue) => {
    setCategoryData([
      ...categoryData,
      { name: newCategoryName, value: newCategoryValue },
    ]);
    setShowModal(false);
  };

  return (
    <Container>
      <LeftSection>
        <Title>Renda Mensal</Title>
        <Ballon bgColor="#2d2d2d" borderColor="#3c3c3c">
          <span style={{ color: '#fff' }}>R${income}</span>
          {editingIncome ? (
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              style={{
                backgroundColor: '#2d2d2d',
                color: '#fff',
                border: '2px solid #3c3c3c',
                padding: '0.5rem',
                borderRadius: '5px',
                width: '100px',
              }}
            />
          ) : (
            <EditButton onClick={handleEditIncome}>
              <PencilIcon className="fas fa-pencil-alt" /> 
              <span>Editar</span>
            </EditButton>
          )}
        </Ballon>
        <Ballon bgColor="#d4af37" borderColor="#d4af37" width="auto">
          <a href="/page1" style={{ color: '#2d2d2d' }}>
            Análise de Gastos
          </a>
        </Ballon>
      </LeftSection>

      <RightSection>
        {categoryData.map((category, index) => (
          <div key={index}>
            <SubTitle style={{ color: '#d4af37' }}>{category.name}</SubTitle>
            <Ballon bgColor="#3c3c3c" borderColor="#3c3c3c">
              <span style={{ color: '#fff' }}>R${category.value}</span>
              <EditButton
                onClick={() =>
                  handleCategoryChange(index, prompt('Novo valor: ', category.value))
                }
              >
                <PencilIcon className="fas fa-pencil-alt" /> 
                <span>Editar</span>
              </EditButton>
            </Ballon>
          </div>
        ))}
        <AddButton onClick={handleAddCategory}>+</AddButton>
        {showModal && (
          <ModalContainer>
            <ModalTitle>Adicionar Categoria</ModalTitle>
            <ModalInput
              type="text"
              placeholder="Nome da categoria"
              id="categoryName"
            />
            <ModalInput
              type="number"
              placeholder="Valor"
              id="categoryValue"
            />
            <ModalButton
              onClick={() =>
                handleAddNewCategory(
                  document.getElementById('categoryName').value,
                  document.getElementById('categoryValue').value
                )
              }
            >
              Adicionar
            </ModalButton>
          </ModalContainer>
        )}
      </RightSection>
    </Container>
  );
};

export default Page4;
