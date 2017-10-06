import React from "react";

import "../css/components/_main.scss";

//Module
import Title from "./Title";
import Summary from "./Summary";

class Main extends React.Component {
	constructor(props) {
		super();
	}
	render() {
		return (
			<div className={"TR-Main"}>
				<Title />
				<Summary />
			</div>
		)
	}
}

export default Main;