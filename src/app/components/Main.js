import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import "../css/components/_main.scss";

//Module
import Title from "./Title";
import Summary from "./Summary";
import Loader from "./Loader";
import Resume from "./resume/Resume";

class NotFound extends React.Component {
	render() {
		return(
			<div>null</div>
		)
	}
}

class Main extends React.Component {
	constructor(props) {
		super();
	}
	render() {
		return (
			<Router>
				<div className={"TR-Main"}>
					<Title />
					<Summary />
					<Loader />
					<Switch>
						<Route component={Resume} path={"/Resume"} />
					</Switch>
				</div>
			</Router>
		)
	}
}

export default Main;