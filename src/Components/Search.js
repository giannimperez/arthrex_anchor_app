import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';

function Search() {
  return (
    <div className="Search">
      <Form inline className="Search">
        <Form.Group>
          <Form.Control type="Name" placeholder="Search Product" />
          <Button className="Button">Search</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Search;