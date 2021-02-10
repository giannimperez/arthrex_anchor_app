import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form, Navbar, Nav, NavDropdown, FormControl } from 'react-bootstrap';
import Product from './Components/Product';
import Search from './Components/Search';
import MyNavbar from './Components/MyNavbar';
import FetchRandomUser from './Components/FetchRandomUser';
import APITest from './Components/APITest';
import APISimpleTest from './Components/APISimpleTest';


function App() {

  // JS to use API for anchor searches
  const string1 = FetchRandomUser;

  return (
    <div className="App">

      <MyNavbar></MyNavbar>
      <Search></Search>
      <APITest></APITest>
      <FetchRandomUser></FetchRandomUser>

      <Container>
        <Row>
          <Col>
            <Product name="SwiveLock" size="4.75" material="BioComposite" knotless="Yes" tripleloaded="No" selfPuncturing="Yes" 
            fiberTape="Yes" cannulatedVented="Yes" fixationStrength="710" />
          </Col>
          <Col>
            <Product name="SwiveLock" size="4.75" material="BioComposite" knotless="Yes" tripleloaded="No" selfPuncturing="Yes" 
            fiberTape="Yes" cannulatedVented="Yes" fixationStrength="710" />
          </Col>
          <Col>
            <FetchRandomUser></FetchRandomUser>
          </Col>
        </Row>
      </Container>

    </div>

  );
}

export default App;
