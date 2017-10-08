import React from "react";

import "../css/components/_portrait.scss";

class Portrait extends React.Component {
	constructor(props) {
		super();
	}
	render() {
		return (
			<section id="TR-Portrait">
				<img src={require("../images/img-portrait-2.jpg")} />
			</section>
		)
	}
}

export default Portrait;