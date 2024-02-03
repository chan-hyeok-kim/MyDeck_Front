import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Link to="/" className="navbar-brand">
            홈
          </Link>
          <Nav className="me-auto">
            <Link to="/deckList" className="navbar-link">
              내 덱리스트
            </Link>
            <Link to="/saveForm" className="navbar-link">
              덱 생성하기
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
    </>
  );
};

export default Header;
