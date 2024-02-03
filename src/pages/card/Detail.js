import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const Detail = () => {
  const param = useParams();
  const navigate = useNavigate();
  const id = param.id;

  const [card, setCard] = useState({
    cardNo: '',
    cardName: '',
    cardContents: '',
  });

  useEffect(() => {
    fetch('http://localhost:8080/card/' + id)
      .then((res) => res.json())
      .then((res) => {
        setCard(res);
      });
  }, []);

  const updateCard = (e) => {
    navigate('/updateForm/' + id);
  };

  const deleteCard = (e) => {
    fetch('http://localhost:8080/card/' + id, { method: 'DELETE' })
      .then((res) => res.text())
      .then((res) => {
        if (res === 'ok') {
          navigate('..');
        } else {
          alert('삭제실패');
        }
      });
  };

  return (
    <div>
      <h3>카드 상세</h3>
      <Button onClick={updateCard} variant="warning">
        수정
      </Button>{' '}
      <Button onClick={deleteCard} variant="danger">
        삭제
      </Button>
      <hr />
      <h2>{card.cardName}</h2>
      <h2>{card.cardContents}</h2>
    </div>
  );
};

export default Detail;
