import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TasksList } from './components/TasksList';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Inbox } from './components/Inbox';



function App() {
  const [get, setGet] = useState([]);
  const [data, setData] = useState();
  return (
    <Container>
      <Navbar get={get} />
      <Row className="justify-content-md-center">
        <Col lg="12">
        <Routes>
        <Route path="/" element={<TasksList  get={get} setGet={setGet} setData={setData}/>} />
        <Route path="/inbox" element={<Inbox data={data}/>} />
      </Routes>
          
        </Col>
      </Row>
    </Container>
  );
}

export default App;