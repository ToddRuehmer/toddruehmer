import React from "react";

import "../css/components/_portrait.scss";

class Portrait extends React.Component {
	constructor(props) {
		super();
	}
	render() {
		return (
			<section id="TR-Portrait">
				<img src={require("../images/img-portrait.png")} />
			</section>
		)
	}
}

export default Portrait;