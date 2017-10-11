import React, {Component} from 'react';
import logo from "./logo-white.png";
import "./Home.css";
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'

const Home = ( {model} ) => {

	return (
<section id="cover-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <h1>
              <img src={logo} width="150px;" alt="logo-white" />
            </h1>
          </div>
        </div>
        <div className="row button-initial">
          <div className="col-md-6 col-xs-6">
		  <NavLink to={"/login"}className="btn btn-lyft btn-lg btn-block">Login</NavLink>
		  
          </div>
          <div className="col-md-6 col-xs-6 btnn">
		  <NavLink to={"/signup"}className="btn btn-lyft btn-lg btn-block">Sign Up</NavLink>
          </div>
        </div>
      </div>
    </section>
	);
}

export default Home;