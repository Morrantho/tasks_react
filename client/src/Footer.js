import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
	constructor(props){
		super(props);
	}

    render(){
        return (
            <div className="Footer">
                <h1>3. {this.props.title} Component</h1>
            </div>
        );
    }

    componentDidMount(){

    }
}

export default Footer;
