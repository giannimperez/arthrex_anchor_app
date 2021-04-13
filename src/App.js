import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form, Navbar, Nav, NavDropdown, FormControl } from 'react-bootstrap';
import SearchBar from './Components/SearchBar';
import MyNavbar from './Components/MyNavbar';
import FetchRandomUser from './Components/FetchRandomUser';
import APITest from './Components/APITest';
import JsonReader from './Components/JsonReader';
import AnchorJsonReader from './Components/AnchorJsonReader';
import Anchor2JsonReader from './Components/Anchor2JsonReader';

function App() {
  
  const string1 = FetchRandomUser;

  return (
    <div className="App">
      
      <MyNavbar></MyNavbar>
      {/**<Search></Search>*/}
      <SearchBar></SearchBar>

      <Container>
        <Row>
          <Col>
            <AnchorJsonReader></AnchorJsonReader>
          </Col>
          <Col>
            <Anchor2JsonReader></Anchor2JsonReader>
          </Col>
        </Row>
      </Container>

    </div>

  );
}

export default App;
