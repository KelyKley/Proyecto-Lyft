import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import ReactBootstrap from 'react-bootstrap';
import { Button, Grid, Col, Row, InputGroup, FormControl } from 'react-bootstrap';

import './SignUp.css';


class SendCode extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phone: "",
			code: "",
			activeNext: false,
			message: "",
			codeNumber: Math.round(Math.random()*(999-100)+parseInt(100))
		}	
	}

	render() {
		const validateCode = (e) => {
			const codeNumber = e.target.value
			if (!isNaN(codeNumber) && codeNumber.length <= 3) {
				this.setState({
					code: e.target.value,
				});
				if ( codeNumber == this.state.codeNumber ) {
					this.setState({	
						activeNext: true,
						message: "Cuenta activada"
					});
				} else if (codeNumber == "" || codeNumber.length != 3) {
					this.setState({	
						activeNext: false,
						message: ""
					});
				} else {
					this.setState({	
						activeNext: false,
						message: "El código es incorrecto"
					});
				}
			}
		};
		return (
			<div className="container-fluid">
				<div className="row text-center head">
				<div className="col-xs-12 col-md-12">
				<div className="col-xs-2 col-md-2 atras">
				<NavLink to={"/signup"}>
					<i className="fa fa-angle-left fa-3x" aria-hidden="true"/>
				</NavLink>
					
				</div>
				<div className="col-xs-8 col-md-8">
					<h1>Confirm Code</h1>
					<h5 className="text-center"> Join now for free ride credit</h5>
				</div>
				</div>
			</div>
			<hr />
				<section className="container signUp-phone">
					<h3>Tu codigo: </h3>
					<h5>LAB - {this.state.codeNumber}</h5>
					<h3>Escribe tu  codigo: </h3>
					<div>
						LAB - <input type="text" value={this.state.code} onChange={validateCode}/>
						<p>{this.state.message}</p>
					</div>
				</section>
				{
				this.state.activeNext ?
					<NavLink
						to={"/signup-form"}
						className="btn btn-lg btn-block btn-lyft">Next</NavLink>
					:
					<button
						className="btn btn-lg btn-block btn-lyft disabled">Next</button>
				}
			</div>
		);
	}
}

export default SendCode;