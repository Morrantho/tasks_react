import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	constructor(props){
		super(props);
	}

    render(){
        return (
            <div className="Header">
                <h1>1. {this.props.title} Component</h1>
            </div>
        );
    }

    componentDidMount(){

    }
}

export default Header;
