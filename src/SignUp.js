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

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.flag = ["https://alianzapacifico.net/wp-content/uploads/2015/03/2000px-Flag_of_Peru_1825_-_1950.svg_.png", "data:image/jpeg;base64,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", "https://as01.epimg.net/img/comunes/fotos/fichas/paises/svg/chi.svg"];
		this.id = ["Perú", "México", "Chile"];
		this.code = ["+51", "+56", "+52"];
		this.state = {
			selectValue: 'Perú',
			flag: this.flag[0],
			code: this.code[0],
			phone: "",
			activeNext: false,
		}
	}

	render() {
		const {model} = this.props;
		const handleChange = (e) => {
			model.notify();
			let country = e.target.value;
			let index = this.id.indexOf(country);
			this.setState({
				selectValue: e.target.value,
				flag: this.flag[index],
				code: this.code[index],
				phone: ""
			});
			console.log(this.state.code);
		};
		const validatePhone = (e) => {
			const phoneNumber = e.target.value
			if (!isNaN(phoneNumber) && phoneNumber.length <= 9) {
				this.setState({
					phone: e.target.value,
				});
				if ( phoneNumber.length == 9 ) {
					this.setState({	activeNext: true });
				} else {
					this.setState({	activeNext: false });
				}
				model.userInfo.phone = this.state.code + phoneNumber;
				model.notify();
			}

		};
		return (
			<div className="container-fluid">
				<Grid>
				<Row className="text-center head">
					<Col xs={12} md={12}>
					<Row>
						<Col xs={2} md={2} className='back'>
							<NavLink to={"/home"}>
								<i className="fa fa-angle-left fa-3x" aria-hidden="true"/>
							</NavLink>
						</Col>
						<Col xs={8} md={8}>
							<h1>Sign up</h1>
							<h5 className="text-center"> Join now for free ride credit</h5>
						</Col>
					</Row>
					</Col>
				</Row>
				</Grid>
				<hr/>
				<section className="container signUp-phone text-center">
					<p><em>Get riding within minutes</em></p>
					<Grid>
						<Row className="show-grid">
							<Col xs={3} md={2}>
								<select value={this.state.selectValue} onChange={handleChange} >
									<option id="+51" value="Perú">Perú</option>
									<option id="+56" value="México">México</option>
									<option id="+52" value="Chile">Chile</option>
								</select>
								<div>
									<img className="flag-img" src={this.state.flag} />
								</div>
							</Col>
							<Col xs={9}>
								<InputGroup>
									<InputGroup.Addon>{this.state.code}</InputGroup.Addon>
									<FormControl type="tel" value={this.state.phone} placeholder={123456789} onChange={validatePhone} />
								</InputGroup>
							</Col>
						</Row>
					</Grid>
					<p><em>We'll send a text to verify your phone</em></p>
				</section>
				{
				this.state.activeNext ?
					<NavLink
						to={"/send-code"}
						className="btn btn-lg btn-block btn-lyft">Next</NavLink>
					:
					<button
						className="btn btn-lg btn-block btn-lyft disabled">Next</button>
				}
			</div>
		);
	}
}

export default SignUp;