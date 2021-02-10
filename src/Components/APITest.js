import React from "react";

export default class APITest extends React.Component {
    state = {
        loading: true,
        person: null
    };

    async componentDidMount(){
        const url = "http://localhost:3000/test/things/";
        const response = await fetch(url);
        const data = await response.json();
        console.log("Hello");
        console.log(data.results[0]);
        this.setState({person: data.results[0], loading: false});
        console.log(data.results[0]);
    }
//access allow control origin all header CORS
    render(){
        return(

            <div>
                <div>{this.state.first_name}</div>
                {this.state.loading || !this.state.person ? (
                 <div>loading...</div>
                ) : (
                <div>
                    <div>{this.state.first_name}</div>
                </div>
                )}
            </div>
        );
    }
}