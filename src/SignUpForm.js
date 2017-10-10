
import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'

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
			<div>
				<header>
					<nav className="navbar navbar-light text-center">
						<a href="javascript:window.history.back();">
							<i
								className="fa fa-angle-left fa-3x"
								aria-hidden="true" />
						</a>
						<div className="navbar-brand">
							<h3>
								Sign Up Form
							</h3>

						</div>
					</nav>
				</header>
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