import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import JsonReader from './JsonReader';

// Search Anchors by NAME ONLY
class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.change = this.change.bind(this);
      this.submit = this.submit.bind(this);
    }
  
    change(event) {
      this.setState({value: event.target.value});
    }
  
    submit(event) {
      alert('Search Entry: ' + this.state.value);
      event.preventDefault();

      // Perform API Call Here
    }
  
    render() {
      return (
          <div className="Search">
        <form inline className="Search" onSubmit={this.submit}>
          <label for="inputlg">
            <input class="form-control input-lg" type="text" placeholder="Search Product" value={this.state.value} onChange={this.change} />
          </label>
          <Button className="Button" type="submit">Search</Button>
          {/**<input className="Button" type="submit" value="Search" />*/}
        </form>
        </div>
      );
    }
  }

export default SearchBar;
