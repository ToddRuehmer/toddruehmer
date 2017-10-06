import React from "react";

import "../css/components/_summary.scss";

class Main extends React.Component {
	constructor(props) {
		super();
	}
	render() {
		return (
			<section className={"TR-Summary"}>
				<div className={"TR-SummaryInner"}>
					<p>Todd Ruehmer is a UI Developer/Designer proudly based in Milwaukee.</p>
					<p>Focused on front end development serving as dot-connector between design and back end.</p>
					<p><a href="#">View Resume <span className="TR-Icon">&#xf178;</span></a></p>
				</div>
			</section>
		)
	}
}

export default Main;