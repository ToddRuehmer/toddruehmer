//React Import
import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Route, NavLink, Switch, browserHistory, IndexRoute } from 'react-router-dom';

//Module
import Main from "./components/Main";

render(
	<Main />, 
	window.document.getElementById('TR-Container'));
	
//Typekit
import kepler from "./typekit/kepler";
kepler();