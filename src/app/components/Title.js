import React from "react";

import "../css/components/_title.scss";

class Main extends React.Component {
	constructor(props) {
		super();
	}
	render() {
		return (
			<section className={"TR-Title"}>
				<section id="TR-Portrait">
					<img src={require("../images/img-portrait.png")} />
				</section>
				<div className={"TR-TitleInner"}>
					<h1>Meet<br /> Todd</h1>
				</div>
			</section>
		)
	}
}

export default Main;