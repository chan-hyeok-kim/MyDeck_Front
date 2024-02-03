import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const SaveForm = (props) => {
  const [card, setCard] = useState({
    cardNo: '',
    cardName: '',
  });

  const changeValue = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };

  const submitCard = (e) => {
    //submit이 action을 안타고 자기 할일을 그만함
    fetch('http://localhost:8080/card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(card),
    })
      .then((res) => {
        console.log(1, res);
        if (res.status === 201) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        if (res !== null) {
          props.history.push('/');
        } else {
          alert('책 등록에 실패하였습니다.');
        }
      });
  };

  return (
    <div>
      <h2>카드만들기 폼</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={changeValue}
            name="cardName"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>contents</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter contents"
            onChange={changeValue}
            name="cardContents"
          />
        </Form.Group>
        <Button onClick={submitCard} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SaveForm;
