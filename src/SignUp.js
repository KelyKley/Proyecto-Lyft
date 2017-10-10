import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'


const SignUp = ({model}) => {
	return (
		<div>
			<header>
				<nav className="navbar navbar-light text-center">
					<a href="javascript:window.history.back();">
						<i
							className="fa fa-angle-left fa-3x"
							aria-hidden="true"/>
					</a>
					<div className="navbar-brand">
						<h3>
							Sign Up
						</h3>
					</div>
				</nav>
			</header>

			<NavLink to={"/signup-form"}
			         className="btn btn-lyft btn-lg btn-block">
				Next
			</NavLink>
		</div>
	);
}

export default SignUp;