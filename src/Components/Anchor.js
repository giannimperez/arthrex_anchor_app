import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';


// Creates Anchor Object with Strings and String[]
function Anchor({ brand, name, sizes, materials, competitors, features, sellingPoints}) {

    this.brand = brand;
    this.name = name;
    this.sizes = sizes;
    this.materials = materials;
    this.competitors = competitors;
    this.features = features;
    this.sellingPoints = sellingPoints;
}

export default Anchor;