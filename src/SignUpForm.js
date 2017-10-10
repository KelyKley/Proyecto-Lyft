
import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom';
import Utils from './Utils'
import ReactBootstrap from 'react-bootstrap';
import { Button, Grid, Col, Row, InputGroup, FormControl , FormGroup } from 'react-bootstrap';
import './SignUp.css';

class SignUpForm extends Component {

	constructor (props) {
		super (props);
		this.state = {
			name: "",
			lastName: "",
			email: "",
			controlName: "formValidationError4",
			controlLast: "formValidationError4",
			controlEmail: "formValidationError4",
			validationName: "error",
			validationLast: "error",
			validationEmail: "error",
			goFordward : false
		}
	}
	control () {
		
	}

	render () {
		const {model} = this.props;
		// console.log('SignUpForm');

		const onInputChange = (e) => {
			this.setState ({
				goFordward: e.target.checked
			});
		}

		const validateName = (e) => {
			const nameValue = e.target.value
			if ( nameValue.length >=1){
				this.setState({
					name: e.target.value,
					controlName: "formValidationSuccess4",
					validationName: "success",
				});
			} else {
				this.setState({
					name: e.target.value,
					controlName: "formValidationError4",
					validationName: "error",
				});
			}
		};
		const validateLast = (e) => {
			const lastValue = e.target.value
			if ( lastValue.length >=1){
				this.setState({
					lastName: e.target.value,
					controlLast: "formValidationSuccess4",
					validationLast: "success",
				});
			} else {
				this.setState({
					lastName: e.target.value,
					controlLast: "formValidationError4",
					validationLast: "error",
				});
			}
		};
		const validateEmail = (e) => {
			const emailValue = e.target.value;
			const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
			if (emailRegex.test(emailValue)) {
				this.setState({
					email: e.target.value,
					controlEmail: "formValidationSuccess4",
					validationEmail: "success",
				});
			} else {
				this.setState({
					email: e.target.value,
					controlEmail: "formValidationError4",
					validationEmail: "error",
				});
			}
		};
		return (
			<div>
				<header className="text-center">
					<div className="back">
						<i className="fa fa-angle-left fa-3x" aria-hidden="true" />
					</div>
					<h1> Sign up </h1>
					<h4> Join now for free ride credit </h4>
					<hr />
				</header>
				<section className="container-fluid form">
				<form>
				<Grid>
					<Row>
						<Col xs={6}>
							<FormGroup controlId={this.state.controlName} validationState={this.state.validationName}>
								<InputGroup>
									<InputGroup.Addon><i className="fa fa-user" aria-hidden="true"></i></InputGroup.Addon>
									<FormControl type="text" value={this.state.name} placeholder="Name" onChange={validateName}/>
								</InputGroup>
								<FormControl.Feedback />
							</FormGroup>
						</Col>
						<Col xs={6}>
							<FormGroup controlId={this.state.controlLast} validationState={this.state.validationLast}>
								<InputGroup>
									<InputGroup.Addon><i className="fa fa-user" aria-hidden="true"></i></InputGroup.Addon>
									<FormControl type="text" value={this.state.lastName} placeholder="Last Name" onChange={validateLast}/>
								</InputGroup>
								<FormControl.Feedback />
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<FormGroup controlId={this.state.controlEmavalidationEmail} validationState={this.state.validationEmail}>
								<InputGroup>
									<InputGroup.Addon><i className="fa fa-envelope" aria-hidden="true" /></InputGroup.Addon>
									<FormControl type="text" value={this.state.email} placeholder="E-mail" onChange={validateEmail}/>
								</InputGroup>
								<FormControl.Feedback />
							</FormGroup>
						</Col>
					</Row>
				</Grid>
				</form>


					<label className="form-check-label">
						<input className="form-check-input" id="agreeUser" type="checkbox" onChange={onInputChange}/>
						I agree to Lyft's <a href="lyft.com"> Terms of Service</a>
					</label>

					{
						(this.state.goFordward && this.state.name && this.state.lastName && this.state.validationEmail!="error") ?
							<NavLink
								to={"/lyftmap"}
								className="btn btn-lg btn-block btn-lyft">Next</NavLink>
							:
							<button
								className="btn btn-lg btn-block btn-lyft disabled">Next</button>

					}

				</section>
			</div>

		);
	}
}

let utilities = new Utils

export default SignUpForm;