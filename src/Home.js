import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'

const Home = ( {model} ) => {

	return (
		<div>
			<NavLink to={"/signup"}
			         className="btn btn-lyft btn-lg btn-block"
			>
				Sign Up
			</NavLink>
		</div>
	);
}

export default Home;