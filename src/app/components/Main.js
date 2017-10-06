import React from "react";

import "../css/components/_main.scss";

//Module
import Title from "./Title";
import Summary from "./Summary";
import Loader from "./Loader";

class Main extends React.Component {
	constructor(props) {
		super();
	}
	render() {
		return (
			<div className={"TR-Main"}>
				<Title />
				<Summary />
				<Loader />
			</div>
		)
	}
}

export default Main;