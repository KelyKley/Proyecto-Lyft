
import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom';
import './SignUp.css';

class SignUpForm extends Component {

	constructor (props) {
		super (props);
		this.state = {
			goFordward : false
		}
	}

	render () {
		const {model} = this.props;
		console.log('SignUpForm');

		const onInputChange = (e) => {
			this.setState ({
				goFordward: e.target.checked
			});
		}

		return (
			<div className="container-fluid">
				<div className="row text-center head">
					<div className="col-xs-12 col-md-12">
					<div className="col-xs-2 col-md-2 atras">
					<a href="javascript:window.history.back();">
							<i className="fa fa-angle-left fa-3x" aria-hidden="true"/>
					</a>
						
					</div>
					<div className="col-xs-8 col-md-8">
						<h1>Sign Up Form</h1>
						<h5 className="text-center"> Join now for free ride credit</h5>
					</div>
					</div>
				</div>
				<hr />

				<section className="container-fluid form">

					<label className="form-check-label">
						<input className="form-check-input" id="agreeUser" type="checkbox" onChange={onInputChange}/>
						I agree to Lyft's <a href="lyft.com"> Terms of Service</a>
					</label>

					{
						this.state.goFordward ?
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

export default SignUpForm;