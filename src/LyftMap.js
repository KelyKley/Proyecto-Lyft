import React, {Component} from 'react';
import logo from "./logo-black.png";
import "./LyftMap.css";
import GoogleMaps from './GoogleMaps';
import ReactGoogleAutocomplete from './ReactGoogleAutocomplete';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'

const LyftMap = ({model}) => {
	const state = {
		properties: model.properties,
		activeProperty: model.activeProperty,
		filterIsVisible: false,
		filteredProperties: [],
		isFiltering: false,
		isRouting: model.isRouting
	};
	const {
		properties,
		activeProperty,
		filterIsVisible,
		filteredProperties,
		isFiltering,
		isRouting
	} = state;
	const propertiesList = isFiltering ? filteredProperties : properties;
	const setActiveProperty = (property, scroll) => {
		//this.setState({
		//	activeProperty: property,
		//});
		model.setActiveProperty(property);
		const {index} = property;
		// Scroll to active property
		if (scroll) {
			const target = `#card-${index}`;
			//jump(target, {
			//	duration: 800,
			//	easing: easeInOutCubic,
			//});
		}
	}
	const onPathBntClick = () => {
		model.setIsRouting();
		console.log ("routing...");
	}
	return (
		<section id="buscar">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12 col-sm-12 col-xs-12" id="mapa">
						<GoogleMaps
							model = {model}
							properties={properties}
							activeProperty={activeProperty}
							setActiveProperty={setActiveProperty}
							filteredProperties={filteredProperties}
							isFiltering={isFiltering}
							isRouting={isRouting}
						/>
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
								<ReactGoogleAutocomplete
									onPlaceSelected={(place) => {
									console.log (place);
									model.setTarget (place);
								}}
								componentRestrictions={{country: "pe"}}
								/>
							</div>
						</div>
						<br />
						<div className="row">
							<div className="col-xs-12">
								<button className="btn btn-lg btn-block btn-lyft" id="ruta" onClick={onPathBntClick}> Establecer selección 
								</button>
							</div>
						</div>	
					</div>
				</div>
			</div>
		</section>
	);
}

export default LyftMap;