import React, {Component} from  'react';
import {Link} from 'react-router-dom';
export default class extends Component {
	render(){
		return(
			<div className="container-home">
				<h1>Hello React!</h1>
                <p>
                    <Link to="test">Test</Link>
                </p>
                <p>
                    <Link to="login">Login</Link>
                </p>
			</div>
		)
	}
}

