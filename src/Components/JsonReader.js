//import React from "react"
import React, {Component} from 'react'
import '../App.css';
import JsonData from '../corkscrew_ft.json'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';

var brand = JsonData.brand;
var name = JsonData.name;
let sizes = JsonData.size;
let materials = JsonData.material;
let competitors = JsonData.competitor;
let features = JsonData.features;
let sellingPoints = JsonData.sellingPoints;


// Reuse Product() function for JsonReader(), then call JsonReader() from the search/filter engine class
// See notes

class JsonReader extends Component {

    render(){
        return(

            <div className='Product'>
                
                <Card style={{ color: "#000" }}>
                <Card.Img />
                <Card.Body>
                    <Card.Title>
                        {brand}
                    </Card.Title>
                    <Card.Title>
                        {name}
                    </Card.Title>
                    <Card.Text>
                        Sizes: {sizes.map(s => (<li>{s}</li>))}
                    </Card.Text>
                    <Card.Text>
                        Materials: {materials.map(s => (<li>{s}</li>))}
                    </Card.Text>
                    <Card.Text>
                        Competitors {competitors.map(s => (<li>{s}</li>))}
                    </Card.Text>
                    <Card.Text>
                        Features {features.map(s => (<li>{s}</li>))}
                    </Card.Text>
                    <Card.Text>
                        Selling Points {sellingPoints.map(s => (<li>{s}</li>))}
                    </Card.Text>

                    <Button className="Button">Read More</Button>
                </Card.Body>
            </Card>

{/*
                <h1>JSON Data</h1>
                <ul>
                    <h3>Brand</h3>
                    {brand}
                    <h3>Name</h3>
                    {name}
                    <h3>Sizes</h3>
                    {sizes.map(s => (<li>{s}</li>))}
                    <h3>Materials</h3>
                    {materials.map(s => (<li>{s}</li>))}
                    <h3>Competitors</h3>
                    {competitors.map(s => (<li>{s}</li>))}
                    <h3>Features</h3>
                    {features.map(s => (<li>{s}</li>))}
                    <h3>Selling Points</h3>
                    {sellingPoints.map(s => (<li>{s}</li>))}
                </ul>
*/}

            </div>
        );
    }
}

export default JsonReader