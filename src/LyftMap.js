import React, {Component} from 'react';
import logo from "./logo-black.png";
import "./LyftMap.css";
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'

import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'

const LyftMap = ({model}) => {
	return (
		<section id="buscar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12" id="mapa">
              {/* Aqui ira nuestro mapa */}
            </div>
            <div className="row cabeza">
              <div className="col-xs-4 text-center">
                <span className="fa-stack fa-3x">
                  <i className="fa fa-circle fa-stack-2x fa-inverse" />
                  <i className="fa fa-user fa-stack-1x" />
                </span>
              </div>
              <div className="col-xs-4 logo text-center">
                <img src={logo} alt />
              </div>
              <div className="col-xs-4 text-center">
                <span className="fa-stack fa-3x">
                  <i className="fa fa-circle fa-stack-2x fa-inverse" />
                  <i className="fa fa-gift fa-stack-1x" />
                </span>
              </div>
            </div>
            <div className="container pie">
              <div className="row">
                <div className="col-xs-12">
                  <input type="text" className="form-control" id="destino" />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-xs-12">
                  <a className="btn btn-lg btn-block btn-lyft" id="ruta" href="#"> Establecer selección </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

	);
}


export default LyftMap;