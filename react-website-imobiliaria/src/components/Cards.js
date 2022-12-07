import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Imóveis</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/praia.jpg'
              text='Casa de praia localizada em Angra dos Reis/RJ, com 5 quartos, 3 banheiros com suites, amplo espaço gourmet e piscina com vista para praia.'
              label='Casa de Praia'
              path='/services'
            />
            <CardItem
              src='images/campo.jpg'
              text='Casa de alto padrão disponível para venda no belo município de Teresópolis.Com uma vista magnífica para um lago, é composto de              
              Ampla sala de estar com lareira, sala de jantar , bela cozinha arejada e 3 quartos. '
              label='Casa de Campo'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/apartamentoo.jpg'
              text='Condominio com vistas para Lagoa e a praia de Ipanema, com 58 m², composto de 2 quartos e vaga na garagem .'
              label='Apartamento em Ipanema'
              path='/services'
            />
            <CardItem
              src='images/casa.jpg'
              text='Casa localizada no condominio Bela vista, composta de 4 quartos, 2 banheiros, garagem ampla e piscina.'
              label='Casa na Barra da Tijuca  '
              path='/products'
            />
            <CardItem
              src='images/apartamento.jpg'
              text='Apartamento de 250 m² com vista para o mar, sala de jantar íntima, lavabo, grande cozinha e uma grande área de serviço
           e composto 4 quartos com suites. '
              label='Apartamento em Copacabana'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
