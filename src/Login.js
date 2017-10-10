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

const Login = ( {model} ) => {

	return (
<section id="registro">
<div className="container-fluid">
  <div className="row">
    <div className="col-xs-12 col-md-12">
      <div className="col-xs-2 col-md-2 atras">
      <a href="javascript:window.history.back();">
			<i className="fa fa-angle-left fa-3x" aria-hidden="true"/>
	</a>
          
      </div>
      <div className="col-xs-8 col-md-8">
        <h1>Login</h1>
        <h5 className="text-center">Get a ride in minutes</h5>
      </div>
    </div>
  </div>
  <hr />
  <form action="">
    <div className="text-center  row">
    <div className="col-md-3 col-xs-1"></div>
      <div className="input-group input-group-lg col-md-6 col-xs-10">
        <span className="input-group-addon" id="sizing-addon1">
          <i className="fa fa-phone" aria-hidden="true" />
        </span>
        <input
          type="tel" className="form-control" placeholder="Enter your phone number" aria-describedby="sizing-addon1"
          id="phone" pattern="^\d{3}\d{3}\d{3}$" required="" />
      </div>
      <div className="col-md-3 col-xs-1"></div>
    </div>

    <br />
    <h4 className="text-center">
      we'll send a text to verify your phone
    </h4>
    <br />
    <hr />
    <br />

    <div className="col-md-12 col-xs-12">
    <div className="col-md-4"></div>
        <div className="col-md-4">
		  <NavLink to={"/lyftmap"}className="btn btn-lyft btn-lg btn-block next">Next</NavLink>
          </div>
          <div className="col-md-4"></div>
    </div>
  </form>
</div>
</section>
	);
}

export default Login;