import React from "react";

import "../css/components/_title.scss";

class Main extends React.Component {
	constructor(props) {
		super();
	}
	render() {
		return (
			<section className={"TR-Title"}>
				<img src={require("../images/img-portrait.png")} id="TR-Portrait" />
				<div className={"TR-TitleInner"}>
					<h1>Meet<br /> Todd</h1>
				</div>
			</section>
		)
	}
}

export default Main;