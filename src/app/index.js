//React Import
import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Route, NavLink, Switch, browserHistory, IndexRoute } from 'react-router-dom';
import {Provider} from "react-redux";

//GSAP
import {TweenMax, Power2, TimelineLite} from "gsap";

//Modules
import Main from "./components/Main";

//Store Import
import store from "./Store";

//Chaining
import "./utility/chaining"

render(
	<Provider store={store}>
		<Main />
	</Provider>, 
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