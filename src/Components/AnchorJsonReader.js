import React, {Component} from 'react'
import '../App.css';
import JsonData from '../corkscrew_ft.json'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import Anchor from './Anchor';

// Temporary until API works

// Why does this not work
var myAnchor = new Anchor(JsonData.brand, JsonData.name, JsonData.size, JsonData.material, JsonData.competitor, JsonData.features, JsonData.sellingPoints);
// but this does? v
myAnchor.brand = JsonData.brand;
myAnchor.name = JsonData.name;
myAnchor.sizes = JsonData.size;
myAnchor.materials = JsonData.material;
myAnchor.competitors = JsonData.competitor;
myAnchor.features = JsonData.features;
myAnchor.sellingPoints = JsonData.sellingPoints;
// Potential data type issue starting at sizes[]

class AnchorJsonReader extends Component {

    render(){
        return(

            <div className='Product'>
                <Card style={{ color: "#000" }}>
                <Card.Img />
                <Card.Body>
                    <Card.Title>
                        {myAnchor.brand}
                    </Card.Title>
                    <Card.Title>
                        {myAnchor.name}
                    </Card.Title>
                    <Card.Text>
                        Sizes: {myAnchor.sizes.map(s => (<li>{s}</li>))}
                    </Card.Text>
                    <Card.Text>
                        Materials: {myAnchor.materials.map(s => (<li>{s}</li>))}
                    </Card.Text>
                    <Card.Text>
                        Competitors {myAnchor.competitors.map(s => (<li>{s}</li>))}
                    </Card.Text>
                    <Card.Text>
                        Features {myAnchor.features.map(s => (<li>{s}</li>))}
                    </Card.Text>
                    <Card.Text>
                        Selling Points {myAnchor.sellingPoints.map(s => (<li>{s}</li>))}
                    </Card.Text>

                    <Button className="Button">Read More</Button>
                </Card.Body>
            </Card>

            </div>
        );
    }
}

export default AnchorJsonReader