import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Container from 'react-bootstrap/esm/Container';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/card/Home';

import Detail from './pages/card/Detail';
import UpdateForm from './pages/Deck/UpdateForm';
import DeckList from './pages/Deck/DeckList';
import SaveForm from './pages/Deck/SaveForm';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/saveForm" exact={true} element={<SaveForm />} />
          <Route path="/card/:id" exact={true} element={<Detail />} />
          <Route path="/updateForm/:id" exact={true} element={<UpdateForm />} />
          <Route path="/deckList" exact={true} element={<DeckList />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
