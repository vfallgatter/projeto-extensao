// src/pages/Page1.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const Page1 = () => {
  {/* Variáveis para a página*/}

  const rendaMensal = 3000; {/* AQUI É PRA BOTAR A VARIAVEL DINAMICA DA RENDA MENSAL BELE*/}

  {/*AQUI SÃO OS DADOS DA VARIÁVEL DO GRAFICO*/}
  const [gastos] = useState({
    labels: ['Alimentação', 'Transporte', 'Moradia', 'Lazer', 'Outros'],
    datasets: [
      {
        /*PORCENTAGEM DOS DADOS REAIS */
        data: [40, 20, 30, 5, 5], 
        backgroundColor: [
          '#f8e71c', 
          '#f5a623', 
          '#f1c40f', 
          '#f39c12', 
          '#f4d03f', 
        ],
        hoverOffset: 4,
      },
    ],
  });

  return (
    <div style={{ backgroundColor: '#3c3c3c', height: '100vh', padding: '20px' }}>
     

      
      <div style={{ color: '#fff', paddingTop: '40px', marginLeft: '10%', marginRight: '10%' }}>
        <div style={{ textAlign: 'left', marginBottom: '20px' }}>
          <h1 style={{ color: '#d4af37', fontSize: '58px' }}>Renda Mensal</h1>
          <h2 style={{ color: '#fff', fontSize: '46px' }}>{`R$ ${rendaMensal}`}</h2>
        </div>

        <Link to="/page4">
          <button style={{
            backgroundColor: '#d4af37', 
            color: '#fff', 
            padding: '15px 30px', 
            border: 'none', 
            cursor: 'pointer', 
            fontSize: '22px', 
            marginBottom: '30px',
            borderRadius: '8px', 
            textDecoration: 'underline',
            transition: 'all 0.3s ease-in-out',
          }}>
            Gerenciar Gastos
          </button>
        </Link>

        
        <div style={{
          width: '80%', 
          maxWidth: '600px', 
          marginLeft: '900px', 
          marginRight: 'auto', 
          height: 'calc(50vh - 50px)', 
          marginTop: '-270px' 
        }}>
          <Pie 
            data={gastos} 
            options={{
              responsive: true, 
              maintainAspectRatio: false, 
              plugins: {
                legend: {
                  labels: {
                    color: 'white', 
                    font: {
                      size: 16, 
                    },
                  },
                },
              },
            }} 
          />
        </div>
      </div>
    </div>
  );
};

export default Page1;
