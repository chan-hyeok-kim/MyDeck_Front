import React from 'react';

import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const CardItem = (props) => {
  const { cardNo, cardName } = props.card;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{cardName}</Card.Title>
        <Link to={'/card/' + cardNo} className="btn btn-primary">
          상세보기
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
