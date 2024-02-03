import React, { useEffect, useState } from 'react';
import CardItem from './../../components/CardItem';

const Home = () => {
  const [cards, setCards] = useState([]);

  //함수 실행 시 최초 한번 실행되는 것: useEffect
  useEffect(() => {
    fetch('http://localhost:8080/card')
      .then((res) => res.json())
      .then((res) => {
        console.log(1, res);
        setCards(res);
      });
  }, []);

  return (
    <div>
      {cards.map((card) => (
        <CardItem key={card.cardNo} card={card} />
      ))}
    </div>
  );
};

export default Home;
