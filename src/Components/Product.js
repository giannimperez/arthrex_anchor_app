import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';

function Product({ name, size, material, doubleLoaded, knotless, tripleloaded, sutureTape, selfPuncturing, fiberTape, cannulatedVented, fixationStrength }) {
    return (
        <div className="Product">

            <Card style={{ color: "#000" }}>
                <Card.Img />
                <Card.Body>
                    <Card.Title>
                        {name}
                    </Card.Title>
                    <Card.Text>
                        Size: {size}
                    </Card.Text>
                    <Card.Text>
                        Material: {material}
                    </Card.Text>
                    <Card.Text>
                        Knotless: {knotless}
                    </Card.Text>
                    <Card.Text>
                        Triple Loaded: {tripleloaded}
                    </Card.Text>
                    <Card.Text>
                        Self Puncturing: {selfPuncturing}
                    </Card.Text>
                    <Card.Text>
                        Fiber Tape: {fiberTape}
                    </Card.Text>
                    <Card.Text>
                        Cannulated/Vented: {cannulatedVented}
                    </Card.Text>
                    <Card.Text>
                        Fixation Strength: {fixationStrength}
                    </Card.Text>
                    <Button className="Button">Read More</Button>
                </Card.Body>
            </Card>

        </div>
    );
}

export default Product;