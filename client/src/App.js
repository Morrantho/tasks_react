import React, { Component } from 'react';
import './App.css';
import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";

class App extends Component {
    header = "Header";
    body = "Body";
    footer = "Footer";

    render(){
        return (
            <div className="App">
            	<Header cb={this.update} title={this.header} />
            	<Body cb={this.update} title={this.body} />
            	<Footer title={this.footer} />
            </div>
        );
    }

    update(){
        console.log("PARENT");
    }

    componentDidMount(){

    }
}

export default App;
