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
import model from './index.js';


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
		const {model} = this.props;
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
		const newCode = () => {
			this.setState({
				codeNumber: Math.round(Math.random()*(999-100)+parseInt(100)),
				code: "",
				activeNext: false
			});
		}
		return (
			<div className="container-fluid">
				<Grid>
				<Row className="text-center head">
					<Col xs={12} md={12}>
					<Row>
						<Col xs={2} md={2} className='back'>
							<NavLink to={"/signup"}>
								<i className="fa fa-angle-left fa-3x" aria-hidden="true"/>
							</NavLink>
						</Col>
						<Col xs={8} md={8}>
							<h1>Verify phone number</h1>
							<h5 className="text-center"> Join now for free ride credit</h5>
						</Col>
					</Row>
					</Col>
				</Row>
				</Grid>
				<hr/>
				<section className="container text-center signUp-phone">
					<div className="code-phone">
						<b>Code: LAB - {this.state.codeNumber}</b>
						<Button bsStyle="info" onClick={newCode}>Resend Code</Button><br/>
					</div>
					<div>
						<div className="code">
							<b>LAB - </b><input type="text" className="input-code" value={this.state.code} onChange={validateCode}/>
						</div>
						<p><em>Enter the code sent to {model.userInfo.phone}</em></p>
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