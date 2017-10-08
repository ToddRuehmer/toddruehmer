//React Import
import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Route, NavLink, Switch, browserHistory, IndexRoute } from 'react-router-dom';

//Module
import Main from "./components/Main";

//Chaining
import "./utility/chaining"

render(
	<Main />, 
	window.document.getElementById('TR-Container'));
	
//Typekit
import "./typekit/kepler";
	
//Breathing Halftone
import "./plugins/breathing-halftone.pkgd.js";
new BreathingHalftone(document.querySelector('#TR-Portrait img'), {
	oscPeriod: 10,
	dotSize: 1/100,
	friction: 1,
	isRadial: true
});