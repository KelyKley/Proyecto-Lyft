import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import ReactBootstrap from 'react-bootstrap';
import { Button, Grid, Col, Row, InputGroup, FormControl ,Dropdown, MenuItem} from 'react-bootstrap';

import './SignUp.css';
import model from './index.js';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.flag = ["https://alianzapacifico.net/wp-content/uploads/2015/03/2000px-Flag_of_Peru_1825_-_1950.svg_.png", "http://flagpedia.net/data/flags/normal/mx.png", "https://as01.epimg.net/img/comunes/fotos/fichas/paises/svg/chi.svg"];
		this.id = ["Perú", "México", "Chile"];
		this.code = ["+51", "+56", "+52"];
		this.state = {
			selectValue: 'Perú',
			flag: this.flag[0],
			flagDrop: this.flag[0],
			code: this.code[0],
			codeDrop: this.code[0],
			phone: "",
			activeNext: false,
		}
	}

	render() {
		const {model} = this.props;

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
				model.userInfo.phone = this.state.codeDrop + " " + phoneNumber;
				model.notify();
			}

		};
		const selectionImg = (e,index) => {
			console.log(e.target.src)
			console.log(index)
			this.setState({
				flagDrop: e.target.src,
				codeDrop: this.code[index],
				phone: ""
			});
		}
		const menuItems = this.flag.map((flag,index)=>{
			return (
				<MenuItem  eventKey={index} key={index-'1'}><img onClick={(e)=>selectionImg(e,index)} className="img-responsive" src={flag} /> {this.id[index]} </MenuItem>
				);
		});
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
					<InputGroup>
						<FormControl
							componentClass="dropdownselect"
							className="dropdown"
						>
							<Dropdown id="dropdown-custom-1">
								<Dropdown.Toggle>
									<img className="img-principal" src={this.state.flagDrop}/>
								</Dropdown.Toggle>
								<Dropdown.Menu className="menu-flags" >
									{menuItems}
								</Dropdown.Menu>	
							</Dropdown>

						</FormControl>
						<InputGroup.Addon>{this.state.codeDrop}</InputGroup.Addon>
						<FormControl type="tel" value={this.state.phone} placeholder={123456789} onChange={validatePhone} />
					</InputGroup>
					
					<p><em>We'll send a text to verify your phone</em></p>
					<div>
					
					</div>
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