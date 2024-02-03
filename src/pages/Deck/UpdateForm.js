import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateForm = (props) => {
  const param = useParams();
  const id = param.id;

  const navigate = useNavigate();
  const [card, setCard] = useState({
    cardNo: '',
    cardName: '',
    cardContents: '',
  });

  const changeValue = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetch('http://localhost:8080/card/' + id)
      .then((res) => res.json())
      .then((res) => {
        setCard(res);
      });
  }, []);

  const onChange = (e) => {
    const { value, name } = e.target;
    setCard({
      ...card,
      [name]: value,
    });
  };

  useEffect(() => {
    fetch('http://localhost:8080/card/' + id)
      .then((res) => res.json())
      .then((res) => {
        setCard(res);
      });
  }, []);

  const submitCard = (e) => {
    //submit이 action을 안타고 자기 할일을 그만함
    fetch('http://localhost:8080/card' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(card),
    })
      .then((res) => {
        console.log(1, res);
        if (res.status === 200) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        if (res !== null) {
          nav('/');
        } else {
          alert('책 등록에 실패하였습니다.');
        }
      });
  };

  return (
    <div>
      <h2>카드 수정 폼</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={changeValue}
            name="cardName"
            value={card.cardName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>contents</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter contents"
            onChange={changeValue}
            name="cardContents"
            value={card.cardContents}
          />
        </Form.Group>
        <Button onClick={submitCard} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UpdateForm;
